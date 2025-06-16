import type { LitElement } from 'lit';
type UpdateHandler<T> = (prev?: T, next?: T) => void;
type NonUndefined<A> = A extends undefined ? never : A;
type UpdateHandlerFunctionKeys<T extends object, P extends keyof T> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends UpdateHandler<T[P]> ? K : never;
}[keyof T];
type PrivateProps = `_${string}`;
type ProtectedProps = `#${string}`;
type PublicProperties<T> = {
    [K in keyof T]: K extends PrivateProps | ProtectedProps | keyof LitElement ? never : T[K] extends Function ? never : K;
}[keyof T];
interface WatchOptions {
    /**
     * If true, will only start watching after the initial update/render
     */
    waitUntilFirstUpdate?: boolean;
}
/**
 * A decorator that observes changes to a specified property (e.g. @property or @state) and invokes the decorated method when the property changes.
 *
 * It allows you to specify a property to watch, and when that property changes, the decorated method is called with the old and new values of the property.
 *
 * The decorated method is called before the component updates. To wait for the update to complete, use `await this.updateComplete`
 * within the handler method. To start watching after the initial update/render, use `{ waitUntilFirstUpdate: true }` or check `this.hasUpdated`.
 *
 * Usage:
 *
 * @watch('propName')
 * handlePropChange(oldValue, newValue) {
 *   ...
 * }
 * This decorator was adapted from the Shoelace library.:
 * https://github.com/shoelace-style/shoelace/blob/next/src/internal/watch.ts
 */
export declare function watch<Component extends LitElement, Prop extends PublicProperties<Component>>(propName: Prop, options?: WatchOptions): (target: Component, decoratedFnName: UpdateHandlerFunctionKeys<Component, Prop>) => void;
export {};
