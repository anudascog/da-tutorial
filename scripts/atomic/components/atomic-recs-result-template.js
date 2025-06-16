import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { M as MapProp } from './props-utils.js';
import { R as ResultTemplateCommon, a as makeDefinedConditions, m as makeMatchConditions } from './result-template-common.js';

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
const AtomicRecsResultTemplate$1 = /*@__PURE__*/ proxyCustomElement(class AtomicRecsResultTemplate extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.matchConditions = [];
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
            validParents: ['atomic-recs-list', 'atomic-ipx-recs-list'],
            allowEmpty: true,
        });
    }
    componentWillLoad() {
        this.conditions = makeDefinedConditions(this.ifDefined, this.ifNotDefined);
        this.resultTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    /**
     * Gets the appropriate result template based on the conditions applied.
     */
    async getTemplate() {
        return this.resultTemplateCommon.getTemplate(this.conditions, this.error);
    }
    render() {
        return this.resultTemplateCommon.renderIfError(this.error);
    }
    get host() { return this; }
}, [1, "atomic-recs-result-template", {
        "conditions": [16],
        "ifDefined": [513, "if-defined"],
        "ifNotDefined": [513, "if-not-defined"],
        "mustMatch": [16],
        "mustNotMatch": [16],
        "error": [32],
        "getTemplate": [64]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicRecsResultTemplate$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicRecsResultTemplate$1.prototype, "mustNotMatch", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-recs-result-template"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-recs-result-template":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicRecsResultTemplate$1);
            }
            break;
    } });
}

const AtomicRecsResultTemplate = AtomicRecsResultTemplate$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicRecsResultTemplate, defineCustomElement };

//# sourceMappingURL=atomic-recs-result-template.js.map