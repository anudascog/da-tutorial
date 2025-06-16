import { h } from './index-3f35faca.js';
import { C as CloseIcon } from './close-ff816971.js';
import { A as ATOMIC_MODAL_EXPORT_PARTS } from './export-parts-14a53e2c.js';
import { p as popoverClass } from './popover-type-895c0e24.js';
import { i as isRefineModalFacet } from './store-498d655a.js';
import { B as Button } from './stencil-button-45a5cdb4.js';

const RefineModal = (props, children) => {
    const flushFacetElements = () => {
        props.host.querySelector('div[slot="facets"]')?.remove();
    };
    const renderHeader = () => {
        return (h("div", { slot: "header", class: "contents" },
            h("h1", { part: "title", class: "truncate" }, props.title),
            h(Button, { style: "text-transparent", class: "grid place-items-center", part: "close-button", onClick: props.onClose, ariaLabel: props.i18n.t('close') },
                h("atomic-icon", { part: "close-icon", class: "h-5 w-5", icon: CloseIcon }))));
    };
    const renderFooter = () => {
        return (h("div", { part: "footer-content", slot: "footer" },
            h(Button, { style: "primary", part: "footer-button", class: "flex w-full justify-center p-3 text-lg", onClick: props.onClose },
                h("span", { part: "footer-button-text", class: "mr-1 truncate" }, props.i18n.t('view-results')),
                h("span", { part: "footer-button-count" }, props.i18n.t('between-parentheses', {
                    text: props.numberOfItems.toLocaleString(props.i18n.language),
                })))));
    };
    return (h("atomic-modal", { fullscreen: true, isOpen: props.isOpen, source: props.openButton, container: props.host, close: props.onClose, onAnimationEnded: () => {
            if (!props.isOpen) {
                flushFacetElements();
            }
        }, exportparts: ATOMIC_MODAL_EXPORT_PARTS, boundary: props.boundary, scope: props.scope },
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
        clone.classList.remove(popoverClass);
        clone.setAttribute(isRefineModalFacet, '');
        divSlot.append(clone);
    });
    return divSlot;
}

export { RefineModal as R, getClonedFacetElements as g };

//# sourceMappingURL=modal-0f5be7cb.js.map