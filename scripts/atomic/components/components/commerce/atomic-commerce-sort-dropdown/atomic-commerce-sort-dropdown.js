var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindings } from "../../../decorators/bindings";
import { withTailwindStyles } from "../../../decorators/with-tailwind-styles";
import { buildProductListing, buildSearch, } from '@coveo/headless/commerce';
import { html, unsafeCSS, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';
import { map } from 'lit/directives/map.js';
import { bindStateToController } from '../../../decorators/bind-state';
import { bindingGuard } from '../../../decorators/binding-guard';
import { errorGuard } from '../../../decorators/error-guard';
import { randomID } from '../../../utils/utils';
import { renderSortLabel } from '../../common/sort/label';
import { renderSortSelect } from '../../common/sort/select';
import { sortGuard } from '../../common/sort/sort-guard';
import { getSortByLabel, renderCommerceSortOption } from '../sort/option';
import styles from './atomic-commerce-sort-dropdown.tw.css';
/**
 * The `atomic-commerce-sort-dropdown` component renders a dropdown that the end user can interact with to select the criteria to use when sorting products.
 *
 * @part label - The "Sort by" label of the `<select>` element.
 * @part select-parent - The `<select>` element parent.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-separator - The element separating the select from the icon.
 * @part placeholder - The dropdown placeholder for while the interface is initializing.
 *
 * @alpha
 */
let AtomicCommerceSortDropdown = class AtomicCommerceSortDropdown extends LitElement {
    constructor() {
        super(...arguments);
        this.dropdownId = randomID('atomic-commerce-sort-dropdown-');
    }
    initialize() {
        if (this.bindings.interfaceElement.type === 'product-listing') {
            this.searchOrListing = buildProductListing(this.bindings.engine);
        }
        else {
            this.searchOrListing = buildSearch(this.bindings.engine);
        }
        this.sort = this.searchOrListing.sort();
    }
    select(e) {
        const select = e.composedPath()[0];
        this.sort.sortBy(getSortByLabel(select.value, this.sortState.availableSorts));
    }
    sortLabelTemplate() {
        return renderSortLabel({
            props: {
                id: this.dropdownId,
                i18n: this.bindings.i18n,
            },
        });
    }
    sortSelectTemplate() {
        const { bindings: { i18n }, dropdownId: id, } = this;
        return renderSortSelect({
            props: {
                i18n,
                id,
                onSelect: (evt) => this.select(evt),
            },
        })(html `${guard([this.sortState], () => map(this.sortState.availableSorts, (sort) => renderCommerceSortOption({
            props: {
                i18n,
                selected: this.sort.isSortedBy(sort),
                sort,
            },
        })))}`);
    }
    render() {
        const { responseId, error, products, isLoading } = this.searchOrListingState;
        return html `${sortGuard({
            isLoading,
            firstSearchExecuted: responseId !== '',
            hasResults: products.length > 0 && this.sortState.availableSorts.length > 1,
            hasError: error !== null,
        }, () => html `<div class="text-on-background flex flex-wrap items-center">
          ${this.sortLabelTemplate()} ${this.sortSelectTemplate()}
        </div>`)}`;
    }
};
AtomicCommerceSortDropdown.styles = [unsafeCSS(styles)];
__decorate([
    state()
], AtomicCommerceSortDropdown.prototype, "bindings", void 0);
__decorate([
    bindStateToController('sort'),
    state()
], AtomicCommerceSortDropdown.prototype, "sortState", void 0);
__decorate([
    bindStateToController('searchOrListing'),
    state()
], AtomicCommerceSortDropdown.prototype, "searchOrListingState", void 0);
__decorate([
    state()
], AtomicCommerceSortDropdown.prototype, "error", void 0);
__decorate([
    errorGuard(),
    bindingGuard()
], AtomicCommerceSortDropdown.prototype, "render", null);
AtomicCommerceSortDropdown = __decorate([
    customElement('atomic-commerce-sort-dropdown'),
    bindings(),
    withTailwindStyles
], AtomicCommerceSortDropdown);
export { AtomicCommerceSortDropdown };
