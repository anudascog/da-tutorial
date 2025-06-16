import { TemplateResultType } from 'lit/directive-helpers.js';
import '../components/common/atomic-component-error/atomic-component-error';
import { LitElementWithError, RenderGuardDecorator } from './types';
/**
 * A decorator that guards the render method of a LitElement component against errors.
 *
 * It wraps the render method and checks for an `error` property on the component.
 * If an error is present, it logs the error to the console and renders an error message.
 * Otherwise, it calls the original render method.
 *
 * @example
 * ```typescript
 * @errorGuard()
 * render() {
 *   // ...
 * }
 * ```
 *
 * @returns A decorator function that wraps the render method with error handling logic.
 * @throws {Error} If the decorator is used on a method other than the render method.
 */
export declare function errorGuard<Component extends LitElementWithError, T extends TemplateResultType>(): RenderGuardDecorator<Component, T>;
