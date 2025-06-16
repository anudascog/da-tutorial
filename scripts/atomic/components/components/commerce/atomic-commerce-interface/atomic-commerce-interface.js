var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { watch } from "../../../decorators/watch";
import { withTailwindStyles } from "../../../decorators/with-tailwind-styles.js";
import { markParentAsReady } from "../../../utils/init-queue";
import { SafeStorage, StorageItems, } from "../../../utils/local-storage-utils";
import { buildCommerceEngine, buildContext, buildProductListing, buildSearch, loadQueryActions, } from '@coveo/headless/commerce';
import { provide } from '@lit/context';
import i18next from 'i18next';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ChildrenUpdateCompleteMixin } from '../../../mixins/children-update-complete-mixin';
import { CommonAtomicInterfaceHelper, } from '../../common/interface/interface-common';
import { bindingsContext } from '../../context/bindings-context';
import { createCommerceStore, } from '../atomic-commerce-interface/store';
import { errorSelector, firstSearchExecutedSelector, noProductsSelector, } from '../atomic-commerce-layout/commerce-layout';
import { getAnalyticsConfig } from './analytics-config';
import styles from './atomic-commerce-interface.tw.css';
const FirstRequestExecutedFlag = 'firstRequestExecuted';
/**
 * @alpha
 * The `atomic-commerce-interface` component is the parent to all other atomic commerce components in a commerce page
 * (except for `atomic-commerce-recommendation-list`, which must have
 * `atomic-commerce-recommendation-interface` as a parent). It handles the headless commerce engine and localization
 * configurations.
 *
 * @slot default - The default slot where you can add child components to the search box.
 */
let AtomicCommerceInterface = class AtomicCommerceInterface extends ChildrenUpdateCompleteMixin(LitElement) {
    constructor() {
        super();
        this.initialized = false;
        /**
         * The type of the interface.
         * - 'search': Indicates that the interface is used for Search.
         * - 'product-listing': Indicates that the interface is used for Product listing.
         */
        this.type = 'search';
        /**
         * Whether analytics should be enabled.
         */
        this.analytics = true;
        /**
         * Whether the state should be reflected in the URL parameters.
         */
        this.reflectStateInUrl = true;
        /**
         * The CSS selector for the container where the interface will scroll back to.
         */
        this.scrollContainer = 'atomic-commerce-interface';
        /**
         * The language assets path. By default, this will be a relative URL pointing to `./lang`.
         *
         * Example: "/mypublicpath/languages"
         *
         */
        this.languageAssetsPath = './lang';
        /**
         * The icon assets path. By default, this will be a relative URL pointing to `./assets`.
         *
         * Example: "/mypublicpath/icons"
         *
         */
        this.iconAssetsPath = './assets';
        this.handleInitialization = (event) => {
            this.commonInterfaceHelper.onComponentInitializing(event);
        };
        this.bindings = {};
        this.onHashChange = () => {
            this.urlManager.synchronize(this.fragment);
        };
        this.commonInterfaceHelper = new CommonAtomicInterfaceHelper(this, 'CoveoAtomic');
        this.store = createCommerceStore(this.type);
        const { promise, resolve } = Promise.withResolvers();
        this.i18Initialized = promise;
        this.i18n = i18next.createInstance(undefined, resolve);
    }
    connectedCallback() {
        super.connectedCallback();
        this.store.setLoadingFlag(FirstRequestExecutedFlag);
        this.addEventListener('atomic/initializeComponent', this.handleInitialization);
        this.addEventListener('atomic/scrollToTop', this.scrollToTop);
    }
    toggleAnalytics() {
        this.commonInterfaceHelper.onAnalyticsChange();
    }
    updateLanguage() {
        if (!this.commonInterfaceHelper.engineIsCreated(this.engine) ||
            !this.language ||
            !this.context) {
            return;
        }
        this.context.setLanguage(this.language);
        return this.commonInterfaceHelper.onLanguageChange();
    }
    updateIconAssetsPath() {
        this.store.state.iconAssetsPath = this.iconAssetsPath;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (typeof this.unsubscribeUrlManager === 'function') {
            this.unsubscribeUrlManager();
            this.unsubscribeUrlManager = undefined;
        }
        if (typeof this.unsubscribeSummary === 'function') {
            this.unsubscribeSummary();
            this.unsubscribeSummary = undefined;
        }
        window.removeEventListener('hashchange', this.onHashChange);
        this.removeEventListener('atomic/initializeComponent', this.handleInitialization);
        this.removeEventListener('atomic/scrollToTop', this.scrollToTop);
        const ariaLive = this.querySelector('atomic-aria-live');
        if (ariaLive) {
            ariaLive.remove();
        }
    }
    scrollToTop() {
        const scrollContainerElement = document.querySelector(this.scrollContainer);
        if (!scrollContainerElement) {
            this.bindings.engine.logger.warn(`Could not find the scroll container with the selector "${this.scrollContainer}". This will prevent UX interactions that require a scroll from working correctly. Please review the CSS selector in the scrollContainer option`);
            return;
        }
        scrollContainerElement.scrollIntoView({ behavior: 'smooth' });
    }
    /**
     * Initializes the connection with the headless commerce engine using the specified options.
     */
    initialize(options) {
        return this.internalInitialization(() => this.initEngine(options));
    }
    /**
     * Initializes the connection with a preconfigured [headless commerce engine](https://docs.coveo.com/en/headless/latest/reference/commerce/), as opposed to the `initialize` method, which internally creates a new commerce engine instance.
     * This bypasses the properties set on the component, such as analytics and language.
     */
    initializeWithEngine(engine) {
        return this.internalInitialization(() => (this.engine = engine));
    }
    /**
     *
     * Executes the first request after initializing connection to the headless commerce engine.
     */
    async executeFirstRequest() {
        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) {
            return;
        }
        if (!this.initialized) {
            console.error('You have to wait until the "initialize" promise is fulfilled before executing a request.', this);
            return;
        }
        if (this.type === 'search') {
            const safeStorage = new SafeStorage();
            const standaloneSearchBoxData = safeStorage.getParsedJSON(StorageItems.STANDALONE_SEARCH_BOX_DATA, null);
            if (!standaloneSearchBoxData) {
                this.searchOrListing.executeFirstSearch();
                return;
            }
            safeStorage.removeItem(StorageItems.STANDALONE_SEARCH_BOX_DATA);
            const { value } = standaloneSearchBoxData;
            this.engine.dispatch(loadQueryActions(this.engine).updateQuery({ query: value }));
            this.searchOrListing.executeFirstSearch();
        }
        else {
            this.searchOrListing.executeFirstRequest();
        }
    }
    async internalInitialization(initEngine) {
        await Promise.all([
            this.commonInterfaceHelper.onInitialization(initEngine),
            this.i18Initialized,
        ]);
        this.initAriaLive();
        this.initContext();
        this.updateLanguage();
        this.bindings = this.getBindings();
        markParentAsReady(this);
        this.initRequestStatus();
        this.initSummary();
        this.initLanguage();
        await this.getUpdateComplete();
        this.initUrlManager();
        this.initialized = true;
    }
    getBindings() {
        return {
            engine: this.engine,
            i18n: this.i18n,
            store: this.store,
            interfaceElement: this,
            addAdoptedStyleSheets: (stylesheet) => {
                const parent = this.getRootNode();
                const styleSheet = stylesheet;
                const isDocumentOrShadowRoot = parent instanceof Document || parent instanceof ShadowRoot;
                if (styleSheet &&
                    isDocumentOrShadowRoot &&
                    !parent.adoptedStyleSheets.includes(styleSheet)) {
                    parent.adoptedStyleSheets.push(styleSheet);
                }
            },
        };
    }
    initEngine(options) {
        const analyticsConfig = getAnalyticsConfig(options, this.analytics);
        try {
            this.engine = buildCommerceEngine({
                configuration: {
                    ...options,
                    analytics: analyticsConfig,
                },
                loggerOptions: {
                    level: this.logLevel,
                },
            });
        }
        catch (error) {
            this.error = error;
            throw error;
        }
    }
    get fragment() {
        return window.location.hash.slice(1);
    }
    initAriaLive() {
        if (Array.from(this.children).some((element) => element.tagName === 'ATOMIC-ARIA-LIVE')) {
            return;
        }
        const ariaLive = document.createElement('atomic-aria-live');
        this.prepend(ariaLive);
    }
    initUrlManager() {
        if (!this.reflectStateInUrl) {
            return;
        }
        this.urlManager = this.searchOrListing.urlManager({
            initialState: { fragment: this.fragment },
        });
        this.unsubscribeUrlManager = this.urlManager.subscribe(() => {
            this.updateHash();
        });
        window.addEventListener('hashchange', this.onHashChange);
    }
    initRequestStatus() {
        this.searchOrListing =
            this.type === 'product-listing'
                ? buildProductListing(this.engine)
                : buildSearch(this.engine);
    }
    initSummary() {
        this.summary = this.searchOrListing.summary();
        this.unsubscribeSummary = this.summary.subscribe(() => {
            const { firstRequestExecuted, hasProducts, hasError } = this.summary.state;
            const hasNoProductsAfterInitialQuery = firstRequestExecuted && !hasError && !hasProducts;
            this.classList.toggle(noProductsSelector, hasNoProductsAfterInitialQuery);
            this.classList.toggle(errorSelector, hasError);
            this.classList.toggle(firstSearchExecutedSelector, firstRequestExecuted);
            if (firstRequestExecuted) {
                this.store.unsetLoadingFlag(FirstRequestExecutedFlag);
            }
        });
    }
    initContext() {
        this.context = buildContext(this.engine);
    }
    initLanguage() {
        if (!this.language) {
            this.language = this.context.state.language;
        }
    }
    updateHash() {
        const newFragment = this.urlManager.state.fragment;
        if (!this.searchOrListing.state.isLoading) {
            history.replaceState(null, document.title, `#${newFragment}`);
            this.bindings.engine.logger.info(`History replaceState #${newFragment}`);
            return;
        }
        history.pushState(null, document.title, `#${newFragment}`);
        this.bindings.engine.logger.info(`History pushState #${newFragment}`);
    }
    render() {
        return html `<slot></slot>`;
    }
};
AtomicCommerceInterface.styles = [unsafeCSS(styles)];
__decorate([
    state()
], AtomicCommerceInterface.prototype, "error", void 0);
__decorate([
    property({ type: String, reflect: true })
], AtomicCommerceInterface.prototype, "type", void 0);
__decorate([
    property({
        type: Boolean,
        converter: {
            fromAttribute: (value) => value !== 'false',
        },
        reflect: true,
    })
], AtomicCommerceInterface.prototype, "analytics", void 0);
__decorate([
    property({ type: String, attribute: 'log-level', reflect: true })
], AtomicCommerceInterface.prototype, "logLevel", void 0);
__decorate([
    property({ type: Object })
], AtomicCommerceInterface.prototype, "i18n", void 0);
__decorate([
    property({ type: String, attribute: 'language', reflect: true })
], AtomicCommerceInterface.prototype, "language", void 0);
__decorate([
    property({ type: Object })
], AtomicCommerceInterface.prototype, "engine", void 0);
__decorate([
    property({
        type: Boolean,
        attribute: 'reflect-state-in-url',
        reflect: true,
        converter: {
            fromAttribute: (value) => value !== 'false',
        },
    })
], AtomicCommerceInterface.prototype, "reflectStateInUrl", void 0);
__decorate([
    property({ type: String, attribute: 'scroll-container', reflect: true })
], AtomicCommerceInterface.prototype, "scrollContainer", void 0);
__decorate([
    property({ type: String, attribute: 'language-assets-path', reflect: true })
], AtomicCommerceInterface.prototype, "languageAssetsPath", void 0);
__decorate([
    property({ type: String, attribute: 'icon-assets-path', reflect: true })
], AtomicCommerceInterface.prototype, "iconAssetsPath", void 0);
__decorate([
    watch('analytics')
], AtomicCommerceInterface.prototype, "toggleAnalytics", null);
__decorate([
    watch('language')
], AtomicCommerceInterface.prototype, "updateLanguage", null);
__decorate([
    watch('iconAssetsPath')
], AtomicCommerceInterface.prototype, "updateIconAssetsPath", null);
__decorate([
    state(),
    provide({ context: bindingsContext })
], AtomicCommerceInterface.prototype, "bindings", void 0);
AtomicCommerceInterface = __decorate([
    customElement('atomic-commerce-interface'),
    withTailwindStyles
], AtomicCommerceInterface);
export { AtomicCommerceInterface };
