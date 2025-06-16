/**
 * The `atomic-sort-expression` component defines a sort expression. This component must be inside an `atomic-sort-dropdown` component.
 */
export declare class AtomicSortExpression {
    host: HTMLElement;
    /**
     * The non-localized label to display for this expression.
     */
    label: string;
    /**
     * One or more sort criteria that the end user can select or toggle between.
     *
     * The available sort criteria are:
     *
     * * `relevancy`
     * * `date ascending`/`date descending`
     * * `qre`
     * * `<FIELD> ascending`/`<FIELD> descending`, where you replace `<FIELD>` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).
     *
     * You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"`).
     */
    expression: string;
    /**
     * The tabs on which the sort expression can be displayed. This property should not be used at the same time as `tabs-excluded`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-sort-expression tabs-included='["tabIDA", "tabIDB"]'></atomic-sort-expression snippet>
     * ```
     * If you don't set this property, the sort expression can be displayed on any tab. Otherwise, the sort expression can only be displayed on the specified tabs.
     */
    tabsIncluded: string[] | string;
    /**
     * The tabs on which the sort expression must not be displayed. This property should not be used at the same time as `tabs-included`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-sort-expression tabs-excluded='["tabIDA", "tabIDB"]'></atomic-sort-expression>
     * ```
     * If you don't set this property, the sort expression can be displayed on any tab. Otherwise, the sort expression won't be displayed on any of the specified tabs.
     */
    tabsExcluded: string[] | string;
    render(): any;
}
