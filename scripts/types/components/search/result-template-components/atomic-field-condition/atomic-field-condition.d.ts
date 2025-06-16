/**
 * The `atomic-field-condition` component takes a list of conditions that, if fulfilled, apply the template in which it's defined.
 * The condition properties can be based on any top-level result property of the `result` object, not restricted to fields (e.g., `isRecommendation`).
 *
 * @slot default - The content to display if the conditions are met.
 *
 * @MapProp name: mustMatch;attr: must-match;docs: The field and values that define which result items the condition must be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`;type: Record<string, string[]> ;default: {}
 * @MapProp name: mustNotMatch;attr: must-not-match;docs: The field and values that define which result items the condition must not be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage";type: Record<string, string[]> ;default: {}
 */
export declare class AtomicFieldCondition {
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
    private result;
    componentWillLoad(): void;
    render(): any;
    componentDidLoad(): void;
}
