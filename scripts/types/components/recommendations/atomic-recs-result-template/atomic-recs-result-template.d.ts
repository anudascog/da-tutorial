import { ResultTemplateCondition as RecsResultTemplateCondition, ResultTemplate as RecsResultTemplate } from '@coveo/headless/recommendation';
/**
 * A [result template](https://docs.coveo.com/en/atomic/latest/usage/displaying-results#defining-a-result-template) determines the format of the query results, depending on the conditions that are defined for each template.
 *
 * A `template` element must be the child of an `atomic-recs-result-template`, and an `atomic-recs-list` must be the parent of each `atomic-recs-result-template`.
 *
 * **Note:** Any `<script>` tags that are defined inside a `<template>` element will not be executed when the results are being rendered.
 * @MapProp name: mustMatch;attr: must-match;docs: The field and values that define which result items the condition must be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`;type: Record<string, string[]> ;default: {}
 * @MapProp name: mustNotMatch;attr: must-not-match;docs: The field and values that define which result items the condition must not be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage";type: Record<string, string[]> ;default: {}
 */
export declare class AtomicRecsResultTemplate {
    private resultTemplateCommon;
    error: Error;
    host: HTMLDivElement;
    matchConditions: RecsResultTemplateCondition[];
    /**
     * A function that must return true on results for the result template to apply.
     * Set programmatically before initialization, not via attribute.
     *
     * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
     * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
     */
    conditions: RecsResultTemplateCondition[];
    /**
     * The field that, when defined on a result item, would allow the template to be applied.
     *
     * For example, a template with the following attribute only applies to result items whose `filetype` and `sourcetype` fields are defined: `if-defined="filetype,sourcetype"`
     */
    ifDefined?: string;
    /**
     * The field that, when defined on a result item, would prevent the template from being applied.
     *
     * For example, a template with the following attribute only applies to result items whose `filetype` and `sourcetype` fields are NOT defined: `if-not-defined="filetype,sourcetype"`
     */
    ifNotDefined?: string;
    /**
     * The field and values that define which result items the condition must be applied to.
     *
     * For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`
     */
    mustMatch: Record<string, string[]>;
    /**
     * The field and values that define which result items the condition must not be applied to.
     *
     * For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage"`
     */
    mustNotMatch: Record<string, string[]>;
    constructor();
    connectedCallback(): void;
    componentWillLoad(): void;
    /**
     * Gets the appropriate result template based on the conditions applied.
     */
    getTemplate(): Promise<RecsResultTemplate<DocumentFragment> | null>;
    render(): any;
}
