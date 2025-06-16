'use strict';

const index = require('./index-757bc886.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');
const stencilPlaceholders = require('./stencil-placeholders-b8c896fa.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const foldedItemListContextEventName = 'atomic/resolveFoldedResultList';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
function FoldedItemListContext() {
    return (component, foldedList) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = index.getElement(this);
            const event = eventUtils.buildCustomEvent(foldedItemListContextEventName, (foldedItemList) => {
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
            const element = index.getElement(this);
            const event = eventUtils.buildCustomEvent(foldedItemListStateContextEventName, (foldedItemList) => {
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
    return (index.h("div", { part: "children-root" },
        hasChildren && index.h("slot", { name: "before-children" }),
        children,
        hasChildren && index.h("slot", { name: "after-children" })));
};

const CollectionGuard = ({ isLoadingMoreResults, moreResultsAvailable, hasChildren, numberOfChildren, density, imageSize, noResultText, }, children) => {
    if (isLoadingMoreResults) {
        return (index.h(ChildrenWrapper, { hasChildren: hasChildren },
            index.h(stencilPlaceholders.ResultsPlaceholder, { numberOfPlaceholders: numberOfChildren, density: density, display: 'list', imageSize: imageSize })));
    }
    if (!moreResultsAvailable && !hasChildren) {
        return noResultText.trim().length ? (index.h("p", { part: "no-result-root", class: "no-result-root my-3" }, noResultText)) : null;
    }
    if (!hasChildren) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

const ResultChildrenGuard = ({ inheritTemplates, resultTemplateRegistered, templateHasError }, children) => {
    if (!inheritTemplates && !resultTemplateRegistered) {
        return;
    }
    if (!inheritTemplates && templateHasError) {
        return index.h("slot", null);
    }
    return index.h(index.Fragment, null, children);
};

const ShowHideButton = ({ moreResultsAvailable, loadFullCollection, showInitialChildren, toggleShowInitialChildren, loadAllResults, collapseResults, }) => {
    return (index.h(stencilButton.Button, { part: "show-hide-button", class: "show-hide-button", style: "text-primary", onClick: () => {
            if (moreResultsAvailable) {
                loadFullCollection();
                toggleShowInitialChildren();
            }
            toggleShowInitialChildren();
        } }, showInitialChildren || moreResultsAvailable
        ? loadAllResults
        : collapseResults));
};

exports.ChildrenWrapper = ChildrenWrapper;
exports.CollectionGuard = CollectionGuard;
exports.FoldedItemListContext = FoldedItemListContext;
exports.FoldedItemListStateContext = FoldedItemListStateContext;
exports.ResultChildrenGuard = ResultChildrenGuard;
exports.ShowHideButton = ShowHideButton;

//# sourceMappingURL=show-hide-button-b6fee434.js.map