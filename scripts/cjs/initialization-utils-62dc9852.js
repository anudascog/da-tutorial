'use strict';

const index = require('./index-757bc886.js');
const domUtils = require('./dom-utils-d4790328.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');
const initQueue = require('./init-queue-a18aa323.js');
const initializationLitStencilCommonUtils = require('./initialization-lit-stencil-common-utils-24279cfa.js');

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the displayIf directive instead
 */
const Hidden = () => (index.h(index.Host, { class: "atomic-hidden" }));

/**
 * Retrieves `Bindings` or `CommerceBindings` on a configured parent interface.
 * @param event - The element on which to dispatch the event, which must be the child of a configured Atomic container element.
 * @returns A promise that resolves upon initialization of the parent container element, and rejects otherwise.
 * @deprecated should only be used for Stencil components. For Lit components, use `initializeBindings` from @/src/decorators/initialize-bindings.
 */
function initializeBindings(element) {
    return new Promise((resolve, reject) => {
        const event = eventUtils.buildCustomEvent(initializationLitStencilCommonUtils.initializeEventName, (bindings) => resolve(bindings));
        const parent = domUtils.closest(element, initializationLitStencilCommonUtils.initializableElements.join(', '));
        if (!parent) {
            reject(new initializationLitStencilCommonUtils.MissingInterfaceParentError(element.nodeName.toLowerCase()));
            return;
        }
        initQueue.enqueueOrDispatchInitializationEvent(parent, event, element);
    });
}
const renderedAttribute = 'data-atomic-rendered';
const loadedAttribute = 'data-atomic-loaded';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used on a property named `bindings`.
 * This will automatically fetch the `Bindings` from the parent `atomic-search-interface` or `atomic-external` components.
 *
 * Once a component is bound, the `initialize` method is called.
 * In the event of an initialization error, the `error` property will be set and an `atomic-component-error` will be rendered.
 *
 * In order for a component using this decorator to render properly, it should have an internal state bound to one of the properties from `bindings`.
 * This is possible by using the `BindStateToController` decorator.
 *
 * @example
 * @InitializeBindings() public bindings!: Bindings;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 * @deprecated To be used for Stencil components. For Lit components, use `BindingController` Reactive Controller from @/mixins/bindings-mixin.ts.
 */
function InitializeBindings({ forceUpdate, } = {}) {
    return (component, bindingsProperty) => {
        const { componentWillLoad, render, componentDidRender, componentDidLoad, disconnectedCallback, } = component;
        let unsubscribeLanguage = () => { };
        if (bindingsProperty !== 'bindings') {
            return console.error(`The InitializeBindings decorator should be used on a property called "bindings", and not "${bindingsProperty}"`, component);
        }
        component.componentWillLoad = function () {
            const element = index.getElement(this);
            element.setAttribute(renderedAttribute, 'false');
            element.setAttribute(loadedAttribute, 'false');
            const event = eventUtils.buildCustomEvent(initializationLitStencilCommonUtils.initializeEventName, (bindings) => {
                this.bindings = bindings;
                const updateLanguage = () => index.forceUpdate(this);
                this.bindings.i18n.on('languageChanged', updateLanguage);
                unsubscribeLanguage = () => this.bindings.i18n.off('languageChanged', updateLanguage);
                try {
                    // When no controller is initialized, updating a property with a State() decorator, there will be no re-render.
                    // In this case, we have to manually trigger it.
                    if (this.initialize) {
                        this.initialize();
                        if (forceUpdate) {
                            index.forceUpdate(this);
                        }
                    }
                    else {
                        index.forceUpdate(this);
                    }
                }
                catch (e) {
                    this.error = e;
                }
            });
            const parent = domUtils.closest(element, initializationLitStencilCommonUtils.initializableElements.join(', '));
            if (!parent) {
                this.error = new initializationLitStencilCommonUtils.MissingInterfaceParentError(element.nodeName.toLowerCase());
                return;
            }
            initQueue.enqueueOrDispatchInitializationEvent(parent, event, element);
            return componentWillLoad && componentWillLoad.call(this);
        };
        component.render = function () {
            if (this.error) {
                return (index.h("atomic-component-error", { element: index.getElement(this), error: this.error }));
            }
            if (!this.bindings) {
                return index.h(Hidden, null);
            }
            index.getElement(this).setAttribute(renderedAttribute, 'true');
            return render && render.call(this);
        };
        component.disconnectedCallback = function () {
            const element = index.getElement(this);
            element.setAttribute(renderedAttribute, 'false');
            element.setAttribute(loadedAttribute, 'false');
            unsubscribeLanguage();
            disconnectedCallback && disconnectedCallback.call(this);
        };
        component.componentDidRender = function () {
            const element = index.getElement(this);
            if (element.getAttribute(renderedAttribute) === 'false') {
                return;
            }
            componentDidRender && componentDidRender.call(this);
            if (element.getAttribute(loadedAttribute) === 'false') {
                element.setAttribute(loadedAttribute, 'true');
                componentDidLoad && componentDidLoad.call(this);
            }
        };
        component.componentDidLoad = function () { };
    };
}
/**
 * A [StencilJS property decorator](https://stenciljs.com/) is used together with the [State decorator](https://stenciljs.com/docs/state#state-decorator).
 * This allows the Stencil component state property to automatically get updates from a [Coveo Headless controller](https://docs.coveo.com/en/headless/latest/usage/#use-headless-controllers).
 *
 * @example
 * @BindStateToController('pager') @State() private pagerState!: PagerState;
 *
 * For more information and examples, view the "Utilities" section of the readme.
 *
 * @param controllerProperty The controller property to subscribe to. The controller has to be created inside of the `initialize` method.
 * @param options The configurable `BindStateToController` options.
 *
 * @deprecated To be used for Stencil components. For Lit components. use `bindStateToController` from '../decorators/bind-state.ts'
 */
function BindStateToController(controllerProperty, options) {
    return (component, stateProperty) => {
        const { disconnectedCallback, initialize } = component;
        component.initialize = function () {
            initialize && initialize.call(this);
            if (!initialize) {
                return console.error(`ControllerState: The "initialize" method has to be defined and instantiate a controller for the property ${controllerProperty}`, component);
            }
            if (!this[controllerProperty]) {
                return;
            }
            if (options?.onUpdateCallbackMethod &&
                !this[options.onUpdateCallbackMethod]) {
                return console.error(`ControllerState: The onUpdateCallbackMethod property "${options.onUpdateCallbackMethod}" is not defined`, component);
            }
            this.unsubscribeController = this[controllerProperty].subscribe(() => {
                this[stateProperty] = this[controllerProperty].state;
                options?.onUpdateCallbackMethod &&
                    this[options.onUpdateCallbackMethod]();
            });
        };
        component.disconnectedCallback = function () {
            !index.getElement(this).isConnected && this.unsubscribeController?.();
            disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}

exports.BindStateToController = BindStateToController;
exports.Hidden = Hidden;
exports.InitializeBindings = InitializeBindings;
exports.initializeBindings = initializeBindings;

//# sourceMappingURL=initialization-utils-62dc9852.js.map