import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { M as MapProp } from './props-utils-525cbc5b.js';
import { R as ResultTemplateCommon, a as makeDefinedConditions, m as makeMatchConditions } from './result-template-common-a80a0903.js';
import '@coveo/bueno';
import './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import '@coveo/headless';
import './table-element-utils-49d22ec6.js';
import './sections-332d182a.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicInsightResultChildrenTemplate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * A function that must return true on results for the result template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to results whose `title` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(result) => /singapore/i.test(result.title)];`
         */
        this.conditions = [];
        /**
         * The field and values that define which result items the condition must be applied to.
         *
         * For example, a template with the following attribute only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"`
         */
        this.mustMatch = {};
        /**
         * The field and values that define which result items the condition must not be applied to.
         *
         * For example, a template with the following attribute only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage"`
         */
        this.mustNotMatch = {};
        this.error = undefined;
        this.conditions = [];
        this.ifDefined = undefined;
        this.ifNotDefined = undefined;
        this.mustMatch = {};
        this.mustNotMatch = {};
    }
    connectedCallback() {
        this.resultTemplateCommon = new ResultTemplateCommon({
            host: this.host,
            setError: (err) => {
                this.error = err;
            },
            validParents: ['atomic-insight-result-children'],
        });
    }
    componentWillLoad() {
        this.conditions = makeDefinedConditions(this.ifDefined, this.ifNotDefined);
        this.resultTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    /**
     * Gets the appropriate result template based on conditions applied.
     */
    async getTemplate() {
        return this.resultTemplateCommon.getTemplate(this.conditions, this.error);
    }
    render() {
        return this.resultTemplateCommon.renderIfError(this.error);
    }
    get host() { return getElement(this); }
};
__decorate([
    MapProp({ splitValues: true })
], AtomicInsightResultChildrenTemplate.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicInsightResultChildrenTemplate.prototype, "mustNotMatch", void 0);

export { AtomicInsightResultChildrenTemplate as atomic_insight_result_children_template };

//# sourceMappingURL=atomic-insight-result-children-template.entry.js.map