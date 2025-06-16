import { CommerceEngine, CommerceEngineConfiguration, Context, LogLevel, ProductListing, ProductListingSummaryState, Search, SearchSummaryState, Summary, UrlManager } from '@coveo/headless/commerce';
import { i18n } from 'i18next';
import { CSSResultGroup, LitElement } from 'lit';
import { AdoptedStylesBindings, CommonBindings } from '../../common/interface/bindings';
import { BaseAtomicInterface } from '../../common/interface/interface-common';
import { CommerceStore } from '../atomic-commerce-interface/store';
export type CommerceInitializationOptions = CommerceEngineConfiguration;
export type CommerceBindings = CommonBindings<CommerceEngine, CommerceStore, AtomicCommerceInterface> & AdoptedStylesBindings;
declare const AtomicCommerceInterface_base: typeof LitElement;
/**
 * @alpha
 * The `atomic-commerce-interface` component is the parent to all other atomic commerce components in a commerce page
 * (except for `atomic-commerce-recommendation-list`, which must have
 * `atomic-commerce-recommendation-interface` as a parent). It handles the headless commerce engine and localization
 * configurations.
 *
 * @slot default - The default slot where you can add child components to the search box.
 */
export declare class AtomicCommerceInterface extends AtomicCommerceInterface_base implements BaseAtomicInterface<CommerceEngine> {
    urlManager: UrlManager;
    searchOrListing: Search | ProductListing;
    summary: Summary<SearchSummaryState | ProductListingSummaryState>;
    context: Context;
    private unsubscribeUrlManager?;
    private unsubscribeSummary?;
    private initialized;
    store: CommerceStore;
    private commonInterfaceHelper;
    error?: Error;
    static styles: CSSResultGroup;
    /**
     * The type of the interface.
     * - 'search': Indicates that the interface is used for Search.
     * - 'product-listing': Indicates that the interface is used for Product listing.
     */
    type: 'search' | 'product-listing';
    /**
     * Whether analytics should be enabled.
     */
    analytics: boolean;
    /**
     * The severity level of the messages to log in the console.
     */
    logLevel?: LogLevel;
    /**
     * The commerce interface i18next instance.
     */
    i18n: i18n;
    /**
     * The commerce interface language.
     *
     * Will default to the value set in the Headless engine context if not provided.
     */
    language?: string;
    /**
     * The commerce interface headless engine.
     */
    engine?: CommerceEngine;
    /**
     * Whether the state should be reflected in the URL parameters.
     */
    reflectStateInUrl: boolean;
    /**
     * The CSS selector for the container where the interface will scroll back to.
     */
    scrollContainer: string;
    /**
     * The language assets path. By default, this will be a relative URL pointing to `./lang`.
     *
     * Example: "/mypublicpath/languages"
     *
     */
    languageAssetsPath: string;
    /**
     * The icon assets path. By default, this will be a relative URL pointing to `./assets`.
     *
     * Example: "/mypublicpath/icons"
     *
     */
    iconAssetsPath: string;
    private i18Initialized;
    constructor();
    connectedCallback(): void;
    toggleAnalytics(): void;
    updateLanguage(): void;
    updateIconAssetsPath(): void;
    disconnectedCallback(): void;
    private handleInitialization;
    scrollToTop(): void;
    /**
     * Initializes the connection with the headless commerce engine using the specified options.
     */
    initialize(options: CommerceInitializationOptions): Promise<void>;
    /**
     * Initializes the connection with a preconfigured [headless commerce engine](https://docs.coveo.com/en/headless/latest/reference/commerce/), as opposed to the `initialize` method, which internally creates a new commerce engine instance.
     * This bypasses the properties set on the component, such as analytics and language.
     */
    initializeWithEngine(engine: CommerceEngine): Promise<void>;
    /**
     *
     * Executes the first request after initializing connection to the headless commerce engine.
     */
    executeFirstRequest(): Promise<void>;
    bindings: CommerceBindings;
    private internalInitialization;
    private getBindings;
    private initEngine;
    private get fragment();
    private initAriaLive;
    private initUrlManager;
    private initRequestStatus;
    private initSummary;
    private initContext;
    private initLanguage;
    private updateHash;
    private onHashChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-commerce-interface': AtomicCommerceInterface;
    }
}
export {};
