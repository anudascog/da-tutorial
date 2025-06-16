import type { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';
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
export declare class BindingController implements ReactiveController {
    host: ReactiveControllerHost;
    private unsubscribeLanguage;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
}
type Constructor<T = {}> = new (...args: any[]) => T;
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
export declare const InitializeBindingsMixin: <T extends Constructor<LitElement>>(superClass: T) => T;
export {};
