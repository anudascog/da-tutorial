import { ResultTemplate, ResultTemplateCondition } from '@coveo/headless';
import { ResultTemplateCommon } from '../../../common/result-templates/result-template-common';
/**
 * The `atomic-result-children-template` component determines the format of the child results, depending on the conditions that are defined for each template. A `template` element must be the child of an `atomic-result-children-template`, and an `atomic-result-children` must be the parent of each `atomic-result-children-template`.
 *
 * Note: Any `<script>` tags defined inside of a `<template>` element will not be executed when results are being rendered.
 * @MapProp name: mustMatch;attr: must-match;docs: The field and values that define which result items the condition must be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`;type: Record<string, string[]> ;default: {}
 * @MapProp name: mustNotMatch;attr: must-not-match;docs: The field and values that define which result items the condition must not be applied to. For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage";type: Record<string, string[]> ;default: {}
 */
export declare class AtomicResultChildrenTemplate {
    host: HTMLDivElement;
    error: Error;
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
    resultTemplateCommon: ResultTemplateCommon;
    constructor();
    connectedCallback(): void;
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    getTemplate(): Promise<ResultTemplate<DocumentFragment> | null>;
    componentWillLoad(): void;
    render(): any;
}
