var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindStateToController } from "../../../decorators/bind-state";
import { bindingGuard } from "../../../decorators/binding-guard";
import { bindings } from "../../../decorators/bindings";
import { errorGuard } from "../../../decorators/error-guard";
import { withTailwindStyles } from "../../../decorators/with-tailwind-styles";
import { randomID } from "../../../utils/utils";
import { NumberValue, Schema } from '@coveo/bueno';
import { buildProductListing, buildSearch, } from '@coveo/headless/commerce';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
const ArrowLeftIcon = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.5 4.8-4.3 4.5c-.3.4-.3.9 0 1.3l4.3 4.6c.3.4.9.4 1.2 0s.3-.9 0-1.3l-3.7-4 3.7-3.9c.3-.4.3-.9 0-1.3-.3-.3-.9-.3-1.2.1z\"/></svg>";
const ArrowRightIcon = "<svg viewBox=\"0 0 20 20\"><path d=\"m8.5 15.2 4.3-4.6c.3-.4.3-.9 0-1.3l-4.4-4.5c-.3-.4-.9-.4-1.2 0s-.3.9 0 1.3l3.7 4-3.7 3.9c-.3.4-.3.9 0 1.3.4.3 1 .3 1.3-.1z\"/></svg>";
import { createAppLoadedListener } from '../../common/interface/store';
import { pagerNextButton, pagerPageButton, pagerPageButtons, pagerPreviousButton, } from '../../common/pager/pager-buttons';
import { pagerGuard } from '../../common/pager/pager-guard';
import { pagerNavigation } from '../../common/pager/pager-navigation';
import { getCurrentPagesRange } from './commerce-pager-utils';
/**
 * The `atomic-commerce-pager` component enables users to navigate through paginated product results.
 *
 * @part buttons - The list of all buttons rendered by the component.
 * @part page-buttons - The list of all page buttons.
 * @part page-button - The individual page buttons.
 * @part active-page-button - The active page button.
 * @part previous-button - The "previous page" button.
 * @part next-button - The "next page" button.
 * @part previous-button-icon - The "previous page" button icon.
 * @part next-button-icon - The "next page" button icon.
 *
 * @event atomic/scrollToTop - Emitted when the user clicks the next or previous button, or a page button.
 * @alpha
 */
let AtomicCommercePager = class AtomicCommercePager extends LitElement {
    constructor() {
        super(...arguments);
        this.isAppLoaded = false;
        /**
         * The maximum number of page buttons to display.
         */
        this.numberOfPages = 5;
        /**
         * The SVG icon to use to display the Previous button.
         *
         * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
         * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
         * - Use a stringified SVG to display it directly.
         */
        this.previousButtonIcon = ArrowLeftIcon;
        /**
         * The SVG icon to use to display the Next button.
         *
         * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
         * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
         * - Use a stringified SVG to display it directly.
         */
        this.nextButtonIcon = ArrowRightIcon;
        this.radioGroupName = randomID('atomic-commerce-pager-');
    }
    initialize() {
        this.validateProps();
        if (this.bindings.interfaceElement.type === 'product-listing') {
            this.listingOrSearch = buildProductListing(this.bindings.engine);
        }
        else {
            this.listingOrSearch = buildSearch(this.bindings.engine);
        }
        this.pager = this.listingOrSearch.pagination();
        createAppLoadedListener(this.bindings.store, (isAppLoaded) => {
            this.isAppLoaded = isAppLoaded;
        });
    }
    validateProps() {
        new Schema({
            numberOfPages: new NumberValue({ min: 0 }),
        }).validate({
            numberOfPages: this.numberOfPages,
        });
    }
    render() {
        const pagesRange = getCurrentPagesRange(this.pagerState.page, this.numberOfPages, this.pagerState.totalPages - 1);
        return html `${pagerGuard({
            props: {
                hasItems: this.pagerState.totalPages > 1,
                isAppLoaded: this.isAppLoaded,
            },
        })(html `${pagerNavigation({
            props: {
                i18n: this.bindings.i18n,
            },
        })(html `
        ${pagerPreviousButton({
            props: {
                icon: this.previousButtonIcon,
                disabled: this.pagerState.page === 0,
                i18n: this.bindings.i18n,
                onClick: () => {
                    this.pager.previousPage();
                    this.focusOnFirstResultAndScrollToTop();
                },
            },
        })}
        ${pagerPageButtons({
            props: {
                i18n: this.bindings.i18n,
            },
        })(html `${pagesRange.map((pageNumber) => pagerPageButton({
            props: {
                isSelected: pageNumber === this.pagerState.page,
                ariaLabel: this.bindings.i18n.t('page-number', {
                    pageNumber: pageNumber + 1,
                }),
                onChecked: () => {
                    this.pager.selectPage(pageNumber);
                    this.focusOnFirstResultAndScrollToTop();
                },
                page: pageNumber,
                groupName: this.radioGroupName,
                text: (pageNumber + 1).toLocaleString(this.bindings.i18n.language),
            },
        }))}`)}
        ${pagerNextButton({
            props: {
                icon: this.nextButtonIcon,
                disabled: this.pagerState.page + 1 >= this.pagerState.totalPages,
                i18n: this.bindings.i18n,
                onClick: () => {
                    this.pager.nextPage();
                    this.focusOnFirstResultAndScrollToTop();
                },
            },
        })}
      `)}`)}`;
    }
    async focusOnFirstResultAndScrollToTop() {
        await this.bindings.store.state.resultList?.focusOnFirstResultAfterNextSearch();
        this.dispatchEvent(new CustomEvent('atomic/scrollToTop'));
    }
};
__decorate([
    state()
], AtomicCommercePager.prototype, "bindings", void 0);
__decorate([
    state()
], AtomicCommercePager.prototype, "error", void 0);
__decorate([
    state()
], AtomicCommercePager.prototype, "isAppLoaded", void 0);
__decorate([
    bindStateToController('pager'),
    state()
], AtomicCommercePager.prototype, "pagerState", void 0);
__decorate([
    property({ reflect: true, attribute: 'number-of-pages', type: Number })
], AtomicCommercePager.prototype, "numberOfPages", void 0);
__decorate([
    property({ reflect: true, attribute: 'previous-button-icon', type: String })
], AtomicCommercePager.prototype, "previousButtonIcon", void 0);
__decorate([
    property({ reflect: true, attribute: 'next-button-icon', type: String })
], AtomicCommercePager.prototype, "nextButtonIcon", void 0);
__decorate([
    bindingGuard(),
    errorGuard()
], AtomicCommercePager.prototype, "render", null);
AtomicCommercePager = __decorate([
    customElement('atomic-commerce-pager'),
    bindings(),
    withTailwindStyles
], AtomicCommercePager);
export { AtomicCommercePager };
