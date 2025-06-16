import { ResultTemplate, ResultTemplateCondition } from '@coveo/headless';
/**
 * A [result template](https://docs.coveo.com/en/atomic/latest/usage/displaying-results#defining-a-result-template) determines the format of the query results, depending on the conditions that are defined for each template.
 *
 * @slot default - Mandatory. A `template` element that defines the structure of the result item.
 * @slot link - A `template` element that contains a single `atomic-result-link` component.
 *
 * **Note:** Any `<script>` tags that are defined inside a `<template>` element will not be executed when the results are being rendered.
 * @MapProp name: mustMatch;attr: must-match;docs: The field and values that define which result items the condition must be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`;type: Record<string, string[]> ;default: {}
 * @MapProp name: mustNotMatch;attr: must-not-match;docs: The field and values that define which result items the condition must not be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage";type: Record<string, string[]> ;default: {}
 */
export declare class AtomicResultTemplate {
    private resultTemplateCommon;
    error: Error;
    host: HTMLDivElement;
    /**
     * A function that must return true on results for the result template to apply.
     * Set programmatically before initialization, not via attribute.
     *
     * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
     * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
     */
    conditions: ResultTemplateCondition[];
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
    constructor();
    connectedCallback(): void;
    componentWillLoad(): void;
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    getTemplate(): Promise<ResultTemplate<DocumentFragment> | null>;
    render(): any;
}
