import { getElement, h, Fragment } from '@stencil/core/internal/client';
import { b as buildCustomEvent } from './event-utils.js';
import { a as ResultsPlaceholder } from './stencil-placeholders.js';
import { B as Button } from './stencil-button.js';

const foldedItemListContextEventName = 'atomic/resolveFoldedResultList';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
function FoldedItemListContext() {
    return (component, foldedList) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = getElement(this);
            const event = buildCustomEvent(foldedItemListContextEventName, (foldedItemList) => {
                this[foldedList] = foldedItemList;
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
    };
}
const foldedItemListStateContextEventName = 'atomic/resolveFoldedResultList';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
function FoldedItemListStateContext() {
    return (component, foldedListState) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = getElement(this);
            const event = buildCustomEvent(foldedItemListStateContextEventName, (foldedItemList) => {
                foldedItemList?.subscribe(() => {
                    this[foldedListState] = foldedItemList.state;
                });
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
    };
}

const ChildrenWrapper = ({ hasChildren }, children) => {
    return (h("div", { part: "children-root" },
        hasChildren && h("slot", { name: "before-children" }),
        children,
        hasChildren && h("slot", { name: "after-children" })));
};

const CollectionGuard = ({ isLoadingMoreResults, moreResultsAvailable, hasChildren, numberOfChildren, density, imageSize, noResultText, }, children) => {
    if (isLoadingMoreResults) {
        return (h(ChildrenWrapper, { hasChildren: hasChildren },
            h(ResultsPlaceholder, { numberOfPlaceholders: numberOfChildren, density: density, display: 'list', imageSize: imageSize })));
    }
    if (!moreResultsAvailable && !hasChildren) {
        return noResultText.trim().length ? (h("p", { part: "no-result-root", class: "no-result-root my-3" }, noResultText)) : null;
    }
    if (!hasChildren) {
        return;
    }
    return h(Fragment, null, children);
};

const ResultChildrenGuard = ({ inheritTemplates, resultTemplateRegistered, templateHasError }, children) => {
    if (!inheritTemplates && !resultTemplateRegistered) {
        return;
    }
    if (!inheritTemplates && templateHasError) {
        return h("slot", null);
    }
    return h(Fragment, null, children);
};

const ShowHideButton = ({ moreResultsAvailable, loadFullCollection, showInitialChildren, toggleShowInitialChildren, loadAllResults, collapseResults, }) => {
    return (h(Button, { part: "show-hide-button", class: "show-hide-button", style: "text-primary", onClick: () => {
            if (moreResultsAvailable) {
                loadFullCollection();
                toggleShowInitialChildren();
            }
            toggleShowInitialChildren();
        } }, showInitialChildren || moreResultsAvailable
        ? loadAllResults
        : collapseResults));
};

export { CollectionGuard as C, FoldedItemListContext as F, ResultChildrenGuard as R, ShowHideButton as S, FoldedItemListStateContext as a, ChildrenWrapper as b };

//# sourceMappingURL=show-hide-button.js.map