import { setCoveoGlobal } from "../../../global/environment.js";
import Backend from 'i18next-http-backend';
import { html } from 'lit';
import { loadDayjsLocale } from '../../../utils/dayjs-locales.js';
import '../atomic-component-error/atomic-component-error.js';
import { init18n } from './i18n.js';
import { i18nBackendOptions, i18nTranslationNamespace } from './i18n.js';
export const mismatchedInterfaceAndEnginePropError = (interfaceKind, configurationName) => `A ${configurationName} is configured on the ${interfaceKind} interface element, but the ${interfaceKind} interface was initialized with an engine. You should only configure the ${configurationName} in the target engine.`;
export class CommonAtomicInterfaceHelper {
    constructor(atomicInterface, globalVariableName) {
        this.atomicInterface = atomicInterface;
        this.hangingComponentsInitialization = [];
        setCoveoGlobal(globalVariableName);
        if ('connectedCallback' in atomicInterface && 'render' in atomicInterface) {
            const { connectedCallback: originalConnectedCallback, render: originalRender, } = atomicInterface;
            atomicInterface.connectedCallback = () => {
                this.i18nPromise = init18n(atomicInterface);
                if (typeof originalConnectedCallback === 'function') {
                    return originalConnectedCallback.call(atomicInterface);
                }
                return;
            };
            atomicInterface.render = () => {
                if (atomicInterface.error) {
                    return html `<atomic-component-error
            .element=${atomicInterface}
            .error=${atomicInterface.error}
          ></atomic-component-error>`;
                }
                return typeof originalRender === 'function'
                    ? originalRender.call(atomicInterface)
                    : null;
            };
        }
        else {
            this.i18nPromise = init18n(atomicInterface);
        }
    }
    onComponentInitializing(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.atomicInterface.engine) {
            event.detail(this.atomicInterface.bindings);
            return;
        }
        this.hangingComponentsInitialization.push(event);
    }
    async onInitialization(initEngine) {
        if (this.atomicInterface.engine) {
            this.atomicInterface.engine.logger.warn(`The ${this.interfaceTagname} component "initialize" has already been called.`, this.atomicInterface);
            return;
        }
        this.atomicInterface.updateIconAssetsPath();
        initEngine();
        if (this.atomicInterface.registerFieldsToInclude) {
            this.atomicInterface.registerFieldsToInclude();
        }
        loadDayjsLocale(this.language);
        await this.i18nPromise;
        this.initComponents();
    }
    onAnalyticsChange() {
        const { engine, analytics } = this.atomicInterface;
        if (!this.engineIsCreated(engine)) {
            return;
        }
        if (!analytics) {
            engine.disableAnalytics();
            return;
        }
        engine.enableAnalytics();
    }
    onLanguageChange() {
        const { i18n, language } = this.atomicInterface;
        loadDayjsLocale(this.language);
        new Backend(i18n.services, i18nBackendOptions(this.atomicInterface)).read(this.language.split('-')[0], i18nTranslationNamespace, (_, data) => {
            i18n.addResourceBundle(this.language.split('-')[0], i18nTranslationNamespace, data, true, false);
            i18n.changeLanguage(language);
        });
    }
    engineIsCreated(engine) {
        if (!engine) {
            console.error(`You have to call "initialize" on the ${this.interfaceTagname} component before modifying the props or calling other public methods.`, this.atomicInterface);
            return false;
        }
        return true;
    }
    get interfaceTagname() {
        return this.atomicInterface.tagName.toLowerCase();
    }
    initComponents() {
        this.hangingComponentsInitialization.forEach((event) => event.detail(this.atomicInterface.bindings));
    }
    get language() {
        return this.atomicInterface.language || 'en';
    }
}
