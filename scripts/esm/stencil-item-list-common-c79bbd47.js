import { u as updateBreakpoints } from './replace-breakpoint-213367f8.js';
import { g as getFirstFocusableDescendant } from './stencil-accessibility-utils-08c682fb.js';
import { o as once, d as defer } from './utils-0a01e06c.js';

const resultComponentClass = 'result-component';
class ItemListCommon {
    constructor(props) {
        this.props = props;
        this.props.store.setLoadingFlag(this.props.loadingFlag);
        this.props.store.state.resultList = this;
        this.updateBreakpointsOnce = once(() => updateBreakpoints(this.props.host));
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
        const elementToFocus = getFirstFocusableDescendant(element) ?? element;
        this.props.nextNewItemTarget.setTarget(elementToFocus);
    }
    focusOnNextNewResult() {
        this.indexOfResultToFocus = this.props.getCurrentNumberOfItems();
        this.props.nextNewItemTarget.focusOnNextTarget();
    }
    async focusOnFirstResultAfterNextSearch() {
        await defer();
        return new Promise((resolve) => {
            if (this.props.getIsLoading()) {
                this.firstResultEl = undefined;
            }
            const unsub = this.props.engineSubscribe(async () => {
                await defer();
                if (!this.props.getIsLoading() && this.firstResultEl) {
                    const elementToFocus = getFirstFocusableDescendant(this.firstResultEl) ??
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

export { ItemListCommon as I, resultComponentClass as r };

//# sourceMappingURL=stencil-item-list-common-c79bbd47.js.map