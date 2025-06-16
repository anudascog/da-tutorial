import { r as registerInstance, h, F as Fragment, H as Host } from './index-3f35faca.js';
import { i as isMacOS } from './device-utils-265d1d2c.js';

const AtomicSuggestionRenderer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.i18n = undefined;
        this.id = undefined;
        this.suggestion = undefined;
        this.isSelected = undefined;
        this.side = undefined;
        this.index = undefined;
        this.lastIndex = undefined;
        this.isDoubleList = undefined;
        this.onClick = undefined;
        this.onMouseOver = undefined;
    }
    get parts() {
        let part = 'suggestion';
        if (this.isSelected) {
            part += ' active-suggestion';
        }
        if (this.suggestion.query) {
            part += ' suggestion-with-query';
        }
        if (this.suggestion.part) {
            part += ` ${this.suggestion.part}`;
        }
        return part;
    }
    get classes() {
        return `flex px-4 min-h-10 items-center text-left text-neutral-dark cursor-pointer ${this.isSelected ? 'bg-neutral-light' : ''}`;
    }
    get content() {
        return this.isHTMLElement(this.suggestion.content) ? (h(Fragment, null)) : (this.suggestion.content);
    }
    ariaLabel(isButton) {
        const contentLabel = this.suggestion.ariaLabel ??
            this.suggestion.query ??
            this.i18n.t('no-title');
        const labelWithType = isMacOS() && isButton
            ? this.i18n.t('search-suggestion-button', {
                label: contentLabel,
                interpolation: { escapeValue: false },
            })
            : contentLabel;
        const position = this.index + 1;
        const count = this.lastIndex + 1;
        if (!this.isDoubleList) {
            return this.i18n.t('search-suggestion-single-list', {
                label: labelWithType,
                position,
                count,
                interpolation: { escapeValue: false },
            });
        }
        return this.i18n.t('search-suggestion-double-list', {
            label: labelWithType,
            position,
            count,
            side: this.i18n.t(this.side === 'left' ? 'left' : 'right'),
            interpolation: { escapeValue: false },
        });
    }
    ensureContentForRenderedSuggestion(element) {
        if (this.isHTMLElement(this.suggestion.content)) {
            element.replaceChildren(this.suggestion.content);
        }
    }
    isHTMLElement(el) {
        return el instanceof HTMLElement;
    }
    render() {
        const isButton = !!(this.suggestion.onSelect || this.suggestion.query);
        return (h(Host, { key: 'edd2cf04b3f9cc20da54b9d97c723b58e5dce629', class: "contents" }, isButton ? (h("button", { id: this.id, key: this.suggestion.key, part: this.parts, class: this.classes, onMouseDown: (e) => e.preventDefault(), onClick: (e) => this.onClick?.(e), onMouseOver: (e) => this.onMouseOver?.(e), "data-query": this.suggestion.query, "aria-label": this.ariaLabel(isButton), ref: (el) => {
                if (!el) {
                    return;
                }
                this.ensureContentForRenderedSuggestion(el);
            } }, this.content)) : (h("span", { id: this.id, key: this.suggestion.key, part: this.parts, class: this.classes, "aria-label": this.ariaLabel(isButton), ref: (el) => {
                if (!el) {
                    return;
                }
                this.ensureContentForRenderedSuggestion(el);
            } }, this.content))));
    }
};

export { AtomicSuggestionRenderer as atomic_suggestion_renderer };

//# sourceMappingURL=atomic-suggestion-renderer.entry.js.map