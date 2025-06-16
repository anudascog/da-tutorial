'use strict';

const index = require('./index-757bc886.js');
const close = require('./close-20739950.js');
const exportParts = require('./export-parts-878c454a.js');
const popoverType = require('./popover-type-b1385b27.js');
const store = require('./store-590ec8d4.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const RefineModal = (props, children) => {
    const flushFacetElements = () => {
        props.host.querySelector('div[slot="facets"]')?.remove();
    };
    const renderHeader = () => {
        return (index.h("div", { slot: "header", class: "contents" },
            index.h("h1", { part: "title", class: "truncate" }, props.title),
            index.h(stencilButton.Button, { style: "text-transparent", class: "grid place-items-center", part: "close-button", onClick: props.onClose, ariaLabel: props.i18n.t('close') },
                index.h("atomic-icon", { part: "close-icon", class: "h-5 w-5", icon: close.CloseIcon }))));
    };
    const renderFooter = () => {
        return (index.h("div", { part: "footer-content", slot: "footer" },
            index.h(stencilButton.Button, { style: "primary", part: "footer-button", class: "flex w-full justify-center p-3 text-lg", onClick: props.onClose },
                index.h("span", { part: "footer-button-text", class: "mr-1 truncate" }, props.i18n.t('view-results')),
                index.h("span", { part: "footer-button-count" }, props.i18n.t('between-parentheses', {
                    text: props.numberOfItems.toLocaleString(props.i18n.language),
                })))));
    };
    return (index.h("atomic-modal", { fullscreen: true, isOpen: props.isOpen, source: props.openButton, container: props.host, close: props.onClose, onAnimationEnded: () => {
            if (!props.isOpen) {
                flushFacetElements();
            }
        }, exportparts: exportParts.ATOMIC_MODAL_EXPORT_PARTS, boundary: props.boundary, scope: props.scope },
        renderHeader(),
        ...children,
        renderFooter()));
};
function getClonedFacetElements(facetElements, collapseFacetsAfter, root) {
    const divSlot = document.createElement('div');
    divSlot.setAttribute('slot', 'facets');
    divSlot.style.display = 'flex';
    divSlot.style.flexDirection = 'column';
    divSlot.style.gap = 'var(--atomic-refine-modal-facet-margin, 20px)';
    const allFacetTags = Array.from(new Set(facetElements.map((el) => el.tagName.toLowerCase())));
    const allFacetsInOrderInDOM = allFacetTags.length
        ? root.querySelectorAll(allFacetTags.join(','))
        : [];
    allFacetsInOrderInDOM.forEach((facetElement, index) => {
        const clone = facetElement.cloneNode(true);
        clone.isCollapsed = index + 1 > collapseFacetsAfter;
        clone.classList.remove(popoverType.popoverClass);
        clone.setAttribute(store.isRefineModalFacet, '');
        divSlot.append(clone);
    });
    return divSlot;
}

exports.RefineModal = RefineModal;
exports.getClonedFacetElements = getClonedFacetElements;

//# sourceMappingURL=modal-c4ccd6eb.js.map