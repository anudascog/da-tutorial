'use strict';

const index = require('./index-757bc886.js');
const arrowRight = require('./arrow-right-a3be291c.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const Carousel = (props, children) => {
    const commonPaginationClasses = 'w-10 h-10 grid justify-center items-center absolute top-1/2 -translate-y-1/2 z-1 shadow-lg group';
    const commonArrowClasses = 'w-3.5 align-middle text-on-background group-hover:text-primary group-focus:text-primary-light';
    function renderPreviousButton() {
        return (index.h(stencilButton.Button, { style: "outline-primary", ariaLabel: props.bindings.i18n.t('previous'), onClick: () => props.previousPage(), part: "previous-button", class: `${commonPaginationClasses} -translate-x-1/2` },
            index.h("atomic-icon", { icon: arrowRight.ArrowRight, class: `${commonArrowClasses} rotate-180` })));
    }
    function renderNextButton() {
        return (index.h(stencilButton.Button, { style: "outline-primary", ariaLabel: props.bindings.i18n.t('next'), onClick: () => props.nextPage(), part: "next-button", class: `${commonPaginationClasses} right-0 translate-x-1/2` },
            index.h("atomic-icon", { icon: arrowRight.ArrowRight, class: commonArrowClasses })));
    }
    function renderIndicators() {
        return (index.h("ul", { part: "indicators", class: "mt-6 flex justify-center gap-2" }, Array.from({ length: props.numberOfPages }, (_, index$1) => {
            const isActive = index$1 === props.currentPage % props.numberOfPages;
            return (index.h("li", { part: `indicator ${isActive ? 'active-indicator' : ''}`, class: `h-1 w-12 rounded-md ${isActive ? 'bg-primary' : 'bg-neutral'} ` }));
        })));
    }
    return (index.h(index.Fragment, null,
        index.h("div", { class: "relative" },
            renderPreviousButton(),
            children,
            renderNextButton()),
        renderIndicators()));
};

exports.Carousel = Carousel;

//# sourceMappingURL=stencil-carousel-99b645ca.js.map