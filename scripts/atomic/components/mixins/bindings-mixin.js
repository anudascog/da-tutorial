import { fetchBindings } from '../utils/initialization-lit-stencil-common-utils';
function initializeBindings(instance) {
    return new Promise((resolve, reject) => {
        instance.initialized = true;
        fetchBindings(instance)
            .then((bindings) => {
            instance.bindings = bindings;
            const updateLanguage = () => instance.requestUpdate();
            instance.bindings.i18n.on('languageChanged', updateLanguage);
            const unsubscribeLanguage = () => instance.bindings?.i18n.off('languageChanged', updateLanguage);
            resolve(unsubscribeLanguage);
            instance.initialize?.();
        })
            .catch((error) => {
            instance.error = error;
            reject(error);
        });
    });
}
/**
 * The `BindingController` is a Lit reactive controller that fetches bindings
 * and adds them to the host class. It ensures that the bindings are initialized
 * when the host element is connected to the DOM and cleaned up when the host
 * element is disconnected.
 *
 * To fetch the bindings, the host must extend the `InitializeBindingsMixin` mixin.
 * If the host class does not extend the mixin, the host class must instantiate the this controller in the Constructor
 * @example
 * ```ts
 * constructor() {
 *  super();
 *  new BindingController(this);
 * }
 * ```
 *
 */
export class BindingController {
    constructor(host) {
        this.unsubscribeLanguage = () => { };
        (this.host = host).addController(this);
    }
    hostConnected() {
        initializeBindings(this.host)
            .then((unsubscribeLanguage) => {
            this.unsubscribeLanguage = unsubscribeLanguage;
        })
            .catch((error) => {
            this.host = error;
        });
    }
    hostDisconnected() {
        this.unsubscribeLanguage();
    }
}
/**
 * Mixin that initializes bindings for a Lit component.
 * It ensures that the bindings are initialized when the host element is instantiated
 * by creating an instance of the `BindingController`.
 *
 * @param superClass - The LitElement class to extend.
 * @returns A class that extends the superclass with bindings initialization.
 *
 * @example
 * ```ts
 * @customElement('my-element')
 * class MyElement extends InitializeBindingsMixin(LitElement) implements InitializableComponent<AnyBindings> {
 *   public bindings?: AnyBindings;
 * }
 * ```
 */
export const InitializeBindingsMixin = (superClass) => {
    class BindingControllerMixinClass extends superClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
            this.initBindings();
        }
        initBindings() {
            new BindingController(this);
        }
    }
    return BindingControllerMixinClass;
};
