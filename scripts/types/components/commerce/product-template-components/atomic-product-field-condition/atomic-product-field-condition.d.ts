/**
 * The `atomic-product-field-condition` component takes a list of conditions that, if fulfilled, apply the template in which it's defined.
 * The condition properties can be based on any top-level product property of the `product` object, not restricted to fields (e.g., `ec_name`).
 * @alpha
 */
export declare class AtomicProductFieldCondition {
    host: HTMLElement;
    /**
     * Verifies whether the specified fields are defined.
     */
    ifDefined?: string;
    /**
     * Verifies whether the specified fields are not defined.
     */
    ifNotDefined?: string;
    /**
     * Verifies whether the specified fields match the specified values.
     * @type {Record<string, string[]>}
     */
    mustMatch: Record<string, string[]>;
    /**
     * Verifies whether the specified fields do not match the specified values.
     * @type {Record<string, string[]>}
     */
    mustNotMatch: Record<string, string[]>;
    private conditions;
    private shouldBeRemoved;
    private product;
    componentWillLoad(): void;
    render(): any;
    componentDidLoad(): void;
}
