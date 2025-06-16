import { ResultTemplate, ResultTemplateCondition } from '@coveo/headless';
import { ResultTemplateCommon } from '../../../common/result-templates/result-template-common';
/**
 * @internal
 */
export declare class AtomicInsightResultChildrenTemplate {
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
    resultTemplateCommon: ResultTemplateCommon;
    constructor();
    connectedCallback(): void;
    componentWillLoad(): void;
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    getTemplate(): Promise<ResultTemplate<DocumentFragment> | null>;
    render(): any;
}
