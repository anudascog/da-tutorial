import { h } from '@stencil/core/internal/client';
import { p as parseDate } from './date-utils.js';
import { g as getFieldValueCaption } from './field-utils.js';
import { r as randomID } from './utils.js';
import { H as Hidden } from './initialization-utils.js';
import { F as FacetHeader, a as FacetContainer } from './stencil-facet-header.js';
import { F as FacetPlaceholder } from './facet-placeholder.js';
import { F as FacetValueLabelHighlight } from './stencil-facet-value-label-highlight.js';
import { F as FacetValueLink } from './stencil-facet-value-link.js';
import { F as FacetValuesGroup } from './stencil-facet-values-group.js';
import { i as initializePopover } from './popover-type.js';
import { b as shouldDisplayInputForFacetRange } from './stencil-facet-common.js';

class TimeframeFacetCommon {
    constructor(props) {
        this.props = props;
        this.manualTimeframes = [];
        this.facetId = this.determineFacetId;
        this.props.setFacetId(this.facetId);
        this.manualTimeframes = this.getManualTimeframes();
        // Initialize two facets: One that is actually used to display values for end users, which only exists
        // if we need to display something to the end user (ie: timeframes > 0)
        // A second facet is initialized only to verify the results count. It is never used to display results to end user.
        // It serves as a way to determine if the input should be rendered or not, independent of the ranges configured in the component
        if (this.manualTimeframes.length > 0) {
            this.facetForDateRange = this.props.initializeFacetForDateRange(this.currentValues);
        }
        if (this.props.withDatePicker) {
            this.facetForDatePicker = this.props.initializeFacetForDatePicker();
            this.facetForDatePickerDependenciesManager =
                this.props.buildDependenciesManager(this.facetForDatePicker.state.facetId);
            this.filter = this.props.initializeFilter();
        }
        if (this.facetForDateRange) {
            this.facetForDateRangeDependenciesManager =
                this.props.buildDependenciesManager(this.facetForDateRange?.state.facetId);
        }
        if (this.filter) {
            this.filterDependenciesManager = this.props.buildDependenciesManager(this.filter?.state.facetId);
        }
        this.registerFacetToStore();
    }
    get determineFacetId() {
        if (this.props.facetId) {
            return this.props.facetId;
        }
        if (this.props.bindings.store.state.dateFacets[this.props.field]) {
            return randomID(`${this.props.field}_`);
        }
        return this.props.field;
    }
    get enabled() {
        return (this.facetForDateRange?.state.enabled ??
            this.filter?.state.enabled ??
            true);
    }
    get valuesToRender() {
        return (this.facetForDateRange?.state.values.filter((value) => value.numberOfResults || value.state !== 'idle') || []);
    }
    get shouldRenderValues() {
        return !this.hasInputRange && !!this.valuesToRender.length;
    }
    get shouldRenderFacet() {
        return this.shouldRenderInput || this.shouldRenderValues;
    }
    get shouldRenderInput() {
        return shouldDisplayInputForFacetRange({
            hasInput: this.props.withDatePicker,
            hasInputRange: this.hasInputRange,
            searchStatusState: this.props.getSearchStatusState(),
            facetValues: this.facetForDatePicker?.state?.values || [],
        });
    }
    get hasValues() {
        if (this.facetForDatePicker?.state.values.length) {
            return true;
        }
        return !!this.valuesToRender.length;
    }
    get numberOfSelectedValues() {
        if (this.filter?.state?.range) {
            return 1;
        }
        return (this.facetForDateRange?.state.values.filter(({ state }) => state === 'selected').length || 0);
    }
    get hasInputRange() {
        return !!this.filter?.state.range;
    }
    get currentValues() {
        return this.manualTimeframes.map(({ period, amount, unit }) => period === 'past'
            ? this.props.buildDateRange({
                start: { period, unit, amount },
                end: { period: 'now' },
            })
            : this.props.buildDateRange({
                start: { period: 'now' },
                end: { period, unit, amount },
            }));
    }
    disconnectedCallback() {
        if (this.props.host.isConnected) {
            return;
        }
        this.facetForDateRangeDependenciesManager?.stopWatching();
        this.facetForDatePickerDependenciesManager?.stopWatching();
        this.filterDependenciesManager?.stopWatching();
    }
    get isHidden() {
        return !this.shouldRenderFacet || !this.enabled;
    }
    registerFacetToStore() {
        const facetInfo = {
            label: () => this.props.bindings.i18n.t(this.props.label),
            facetId: this.facetId,
            element: this.props.host,
            isHidden: () => this.isHidden,
        };
        this.props.bindings.store.registerFacet('dateFacets', {
            ...facetInfo,
            format: (value) => this.formatFacetValue(value),
        });
        initializePopover(this.props.host, {
            ...facetInfo,
            hasValues: () => this.hasValues,
            numberOfActiveValues: () => this.numberOfSelectedValues,
        });
        if (this.filter) {
            this.props.bindings.store.state.dateFacets[this.filter.state.facetId] =
                this.props.bindings.store.state.dateFacets[this.facetId];
        }
    }
    getManualTimeframes() {
        return Array.from(this.props.host.querySelectorAll('atomic-timeframe')).map(({ label, amount, unit, period }) => ({
            label,
            amount,
            unit,
            period,
        }));
    }
    formatFacetValue(facetValue) {
        try {
            const startDate = this.props.deserializeRelativeDate(facetValue.start);
            const relativeDate = startDate.period === 'past'
                ? startDate
                : this.props.deserializeRelativeDate(facetValue.end);
            const timeframe = this.getManualTimeframes().find((timeframe) => timeframe.period === relativeDate.period &&
                timeframe.unit === relativeDate.unit &&
                timeframe.amount === relativeDate.amount);
            if (timeframe?.label) {
                return getFieldValueCaption(this.props.field, timeframe.label, this.props.bindings.i18n);
            }
            return this.props.bindings.i18n.t(`${relativeDate.period}-${relativeDate.unit}`, {
                count: relativeDate.amount,
            });
        }
        catch (error) {
            return this.props.bindings.i18n.t('to', {
                start: parseDate(facetValue.start).format('YYYY-MM-DD'),
                end: parseDate(facetValue.end).format('YYYY-MM-DD'),
            });
        }
    }
    renderValues() {
        return this.renderValuesContainer(this.valuesToRender.map((value) => this.renderValue(value)));
    }
    renderValue(facetValue) {
        const displayValue = this.formatFacetValue(facetValue);
        const isSelected = facetValue.state === 'selected';
        const isExcluded = facetValue.state === 'excluded';
        return (h(FacetValueLink, { displayValue: displayValue, isSelected: isSelected, numberOfResults: facetValue.numberOfResults, i18n: this.props.bindings.i18n, onClick: () => this.facetForDateRange.toggleSingleSelect(facetValue) },
            h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, isExcluded: isExcluded })));
    }
    renderValuesContainer(children) {
        return (h(FacetValuesGroup, { i18n: this.props.bindings.i18n, label: this.props.label },
            h("ul", { class: "mt-3", part: "values" }, children)));
    }
    renderHeader(isCollapsed, headerFocus, onToggleCollapse) {
        return (h(FacetHeader, { i18n: this.props.bindings.i18n, label: this.props.label, onClearFilters: () => {
                headerFocus.focusAfterSearch();
                if (this.filter?.state.range) {
                    this.filter?.clear();
                    return;
                }
                this.facetForDateRange?.deselectAll();
            }, numberOfActiveValues: this.numberOfSelectedValues, isCollapsed: isCollapsed, headingLevel: this.props.headingLevel, onToggleCollapse: onToggleCollapse, headerRef: (el) => headerFocus.setTarget(el) }));
    }
    renderDateInput() {
        return (h("atomic-facet-date-input", { min: this.props.min, max: this.props.max, bindings: this.props.bindings, label: this.props.label, facetId: this.filter.state.facetId, rangeGetter: () => this.filter.state.range, rangeSetter: (request) => {
                this.filter.setRange(request);
            } }));
    }
    render({ hasError, firstSearchExecuted, isCollapsed, headerFocus, onToggleCollapse, }) {
        if (hasError || !this.enabled) {
            return h(Hidden, null);
        }
        if (!firstSearchExecuted) {
            return (h(FacetPlaceholder, { numberOfValues: this.currentValues.length, isCollapsed: isCollapsed }));
        }
        if (!this.shouldRenderFacet) {
            return h(Hidden, null);
        }
        return (h(FacetContainer, null,
            this.renderHeader(isCollapsed, headerFocus, onToggleCollapse),
            !isCollapsed && [
                this.shouldRenderValues && this.renderValues(),
                this.shouldRenderInput && this.renderDateInput(),
            ]));
    }
}

export { TimeframeFacetCommon as T };

//# sourceMappingURL=timeframe-facet-common.js.map