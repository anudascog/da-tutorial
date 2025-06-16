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
export function watch(propName, options) {
    const resolvedOptions = {
        waitUntilFirstUpdate: true,
        ...options,
    };
    return (target, decoratedFnName) => {
        // @ts-expect-error - update is a protected property
        const { update } = target;
        // @ts-expect-error - update is a protected property
        target.update = function (changedProps) {
            if (changedProps.has(propName)) {
                const oldValue = changedProps.get(propName);
                const newValue = this[propName];
                if (oldValue !== newValue) {
                    if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                        this[decoratedFnName](oldValue, newValue);
                    }
                }
            }
            update.call(this, changedProps);
        };
    };
}
