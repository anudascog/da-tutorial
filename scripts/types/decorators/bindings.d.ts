import { ReactiveElement } from 'lit';
import { AnyBindings } from '../components';
import { InitializableComponent } from './types';
/**
 * A decorator that will initialize the component with the bindings provided by the bindings context.
 * It ensures that the component is initialized only once and that the language is updated when the language changes.
 *
 * @example
 * ```ts
 * import {bindings} from './decorators/bindings';
 * import {InitializableComponent} from './decorators/types';
 *
 * @customElement('test-element')
 * @bindings()
 * export class TestElement extends LitElement implements InitializableComponent<Bindings> {
 *
 *    @state() public bindings: Bindings = {} as Bindings;
 *    @state() public error!: Error;
 *
 *    public initialized = false;
 *
 *    public render() {
 *     return html``;
 *    }
 * }
 * ```
 */
export declare function bindings(): (target: {
    prototype: ReactiveElement & InitializableComponent<AnyBindings>;
}) => void;
