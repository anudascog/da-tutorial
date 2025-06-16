import { directive, Directive } from 'lit/directive.js';
import { classMap } from 'lit/directives/class-map.js';
export const tw = (rec) => rec;
class MultiClassMapDirective extends Directive {
    /**
     * A Lit directive that dynamically applies CSS classes to an element.
     *
     * This directive extends the functionality of the Lit [`classMap`](https://lit.dev/docs/templates/directives/#classmap)
     * by allowing multiple space-separated class names in a single key.
     *
     * ### Behavior:
     * - If a key contains multiple classes (e.g., `'foo bar'`), all classes in the key are applied if the value is `true`.
     * - If a class appears in multiple keys, the `true` value takes precedence over `false`.
     *
     * ### Example:
     * ```typescript
     * const classMap = {
     *   'foo bar': true,
     *   'bar fiz': false,
     * };
     *
     * html`<div class=${multiClassMap(classMap)}></div>`;
     * ```
     * **Output:**
     * ```html
     * <div class="foo bar"></div>
     * ```
     *
     * ### Notes:
     * - Avoid defining multiple keys with overlapping class names, as it can lead to unintended behavior.
     * - Limit the classes to a reasonable number to prevent performance issues.
     * - The directive ensures that the final class list is deduplicated and respects precedence rules.
     */
    render(classInfo) {
        const processedClassMap = {};
        for (const [key, value] of Object.entries(classInfo)) {
            if (value) {
                key.split(/\s+/).forEach((cls) => {
                    processedClassMap[cls] = true;
                });
            }
        }
        return classMap(processedClassMap);
    }
}
export function multiClassMap(record) {
    return directive(MultiClassMapDirective)(record);
}
