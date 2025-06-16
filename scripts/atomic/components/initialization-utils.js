import { h, Host, getElement, forceUpdate } from '@stencil/core/internal/client';
import { c as closest } from './dom-utils.js';
import { b as buildCustomEvent } from './event-utils.js';
import { e as enqueueOrDispatchInitializationEvent } from './init-queue.js';
import { M as MissingInterfaceParentError, i as initializeEventName, a as initializableElements } from './initialization-lit-stencil-common-utils.js';

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the displayIf directive instead
 */
const Hidden = () => (h(Host, { class: "atomic-hidden" }));

/**
 * Retrieves `Bindings` or `CommerceBindings` on a configured parent interface.
 * @param event - The element on which to dispatch the event, which must be the child of a configured Atomic container element.
 * @returns A promise that resolves upon initialization of the parent container element, and rejects otherwise.
 * @deprecated should only be used for Stencil components. For Lit components, use `initializeBindings` from @/src/decorators/initialize-bindings.
 */
function initializeBindings(element) {
    return new Promise((resolve, reject) => {
        const event = buildCustomEvent(initializeEventName, (bindings) => resolve(bindings));
        const parent = closest(element, initializableElements.join(', '));
        if (!parent) {
            reject(new MissingInterfaceParentError(element.nodeName.toLowerCase()));
            return;
        }
        enqueueOrDispatchInitializationEvent(parent, event, element);
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
function InitializeBindings({ forceUpdate: forceUpdate$1, } = {}) {
    return (component, bindingsProperty) => {
        const { componentWillLoad, render, componentDidRender, componentDidLoad, disconnectedCallback, } = component;
        let unsubscribeLanguage = () => { };
        if (bindingsProperty !== 'bindings') {
            return console.error(`The InitializeBindings decorator should be used on a property called "bindings", and not "${bindingsProperty}"`, component);
        }
        component.componentWillLoad = function () {
            const element = getElement(this);
            element.setAttribute(renderedAttribute, 'false');
            element.setAttribute(loadedAttribute, 'false');
            const event = buildCustomEvent(initializeEventName, (bindings) => {
                this.bindings = bindings;
                const updateLanguage = () => forceUpdate(this);
                this.bindings.i18n.on('languageChanged', updateLanguage);
                unsubscribeLanguage = () => this.bindings.i18n.off('languageChanged', updateLanguage);
                try {
                    // When no controller is initialized, updating a property with a State() decorator, there will be no re-render.
                    // In this case, we have to manually trigger it.
                    if (this.initialize) {
                        this.initialize();
                        if (forceUpdate$1) {
                            forceUpdate(this);
                        }
                    }
                    else {
                        forceUpdate(this);
                    }
                }
                catch (e) {
                    this.error = e;
                }
            });
            const parent = closest(element, initializableElements.join(', '));
            if (!parent) {
                this.error = new MissingInterfaceParentError(element.nodeName.toLowerCase());
                return;
            }
            enqueueOrDispatchInitializationEvent(parent, event, element);
            return componentWillLoad && componentWillLoad.call(this);
        };
        component.render = function () {
            if (this.error) {
                return (h("atomic-component-error", { element: getElement(this), error: this.error }));
            }
            if (!this.bindings) {
                return h(Hidden, null);
            }
            getElement(this).setAttribute(renderedAttribute, 'true');
            return render && render.call(this);
        };
        component.disconnectedCallback = function () {
            const element = getElement(this);
            element.setAttribute(renderedAttribute, 'false');
            element.setAttribute(loadedAttribute, 'false');
            unsubscribeLanguage();
            disconnectedCallback && disconnectedCallback.call(this);
        };
        component.componentDidRender = function () {
            const element = getElement(this);
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
            !getElement(this).isConnected && this.unsubscribeController?.();
            disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}

export { BindStateToController as B, Hidden as H, InitializeBindings as I, initializeBindings as i };

//# sourceMappingURL=initialization-utils.js.map