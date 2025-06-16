'use strict';

const replaceBreakpoint = require('./replace-breakpoint-9e1c0efa.js');
const stencilAccessibilityUtils = require('./stencil-accessibility-utils-7eed7a97.js');
const utils = require('./utils-b6642872.js');

const resultComponentClass = 'result-component';
class ItemListCommon {
    constructor(props) {
        this.props = props;
        this.props.store.setLoadingFlag(this.props.loadingFlag);
        this.props.store.state.resultList = this;
        this.updateBreakpointsOnce = utils.once(() => replaceBreakpoint.updateBreakpoints(this.props.host));
    }
    updateBreakpoints() {
        this.updateBreakpointsOnce();
    }
    getResultId(uniqueIdOnResult, searchResponseId, density, imageSize) {
        return `${uniqueIdOnResult}${searchResponseId}${density}${imageSize}`;
    }
    setNewResultRef(element, resultIndex) {
        if (resultIndex === 0) {
            this.firstResultEl = element;
        }
        if (resultIndex !== this.indexOfResultToFocus) {
            return;
        }
        if (!element.children.length && !element.shadowRoot?.children.length) {
            return;
        }
        this.indexOfResultToFocus = undefined;
        const elementToFocus = stencilAccessibilityUtils.getFirstFocusableDescendant(element) ?? element;
        this.props.nextNewItemTarget.setTarget(elementToFocus);
    }
    focusOnNextNewResult() {
        this.indexOfResultToFocus = this.props.getCurrentNumberOfItems();
        this.props.nextNewItemTarget.focusOnNextTarget();
    }
    async focusOnFirstResultAfterNextSearch() {
        await utils.defer();
        return new Promise((resolve) => {
            if (this.props.getIsLoading()) {
                this.firstResultEl = undefined;
            }
            const unsub = this.props.engineSubscribe(async () => {
                await utils.defer();
                if (!this.props.getIsLoading() && this.firstResultEl) {
                    const elementToFocus = stencilAccessibilityUtils.getFirstFocusableDescendant(this.firstResultEl) ??
                        this.firstResultEl;
                    this.props.nextNewItemTarget.setTarget(elementToFocus);
                    this.props.nextNewItemTarget.focus();
                    this.firstResultEl = undefined;
                    unsub();
                    resolve();
                }
            });
        });
    }
}

exports.ItemListCommon = ItemListCommon;
exports.resultComponentClass = resultComponentClass;

//# sourceMappingURL=stencil-item-list-common-3fa0a493.js.map