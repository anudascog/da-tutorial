import { h, forceUpdate } from '@stencil/core/internal/client';
import { B as Button } from './stencil-button.js';
import { isNullOrUndefined } from '@coveo/bueno';
import { D as DOMPurify } from './purify.js';
import { d as debounce } from './debounce-utils.js';
import { e as elementHasQuery, a as elementHasNoQuery } from './suggestions-common.js';

const SearchBoxWrapper = (props, children) => {
    const getClasses = () => {
        const baseClasses = 'flex bg-background w-full border border-neutral rounded-md focus-within:ring-3 absolute top-0 left-0';
        const focusClasses = props.disabled
            ? 'focus-within:border-disabled focus-within:ring-neutral'
            : 'focus-within:border-primary focus-within:ring-ring-primary';
        return [baseClasses, focusClasses].join(' ');
    };
    return (h("div", { part: "wrapper", class: getClasses(), onFocusout: props.onFocusout }, children));
};

const ClearSlim = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.00012L1.00012 14.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.999878 1L14.9999 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const TextAreaClearButton = ({ inputRef, bindings, onClick, ...defaultButtonProps }) => (h("div", { part: "clear-button-wrapper", class: "ml-2 flex items-center justify-center py-2" },
    h(Button, { style: "text-transparent", part: "clear-button", class: "text-neutral-dark flex h-8 w-8 shrink-0 items-center justify-center", onClick: () => {
            onClick?.();
            inputRef?.focus();
        }, ariaLabel: bindings.i18n.t('clear'), ...defaultButtonProps },
        h("atomic-icon", { part: "clear-icon", icon: ClearSlim, class: "h-4 w-4" }))));

function getPopupAttributes(props) {
    return {
        autocomplete: 'off',
        autocapitalize: 'off',
        autocorrect: 'off',
        ...(props.activeDescendant && {
            'aria-activedescendant': props.activeDescendant,
        }),
        'aria-autocomplete': 'both',
        'aria-haspopup': 'true',
        'aria-controls': props.id,
    };
}
function syncTextWithReplica(elem, value) {
    const parent = elem?.parentNode;
    if (!parent) {
        return;
    }
    if (elem.value === '\n') {
        return;
    }
    parent.dataset.replicatedValue = value ?? elem.value;
}
function resetReplicaText(elem) {
    const parent = elem?.parentNode;
    if (parent) {
        delete parent.dataset.replicatedValue;
    }
}
function collapseTextArea(elem) {
    const parent = elem?.parentNode;
    if (parent) {
        parent.classList.remove('expanded');
    }
}
function expandTextArea(elem) {
    const parent = elem?.parentNode;
    if (parent) {
        parent.classList.add('expanded');
    }
}
const SearchTextArea = ({ textAreaRef, loading, bindings, onInput, onFocus, onBlur, onChange, onKeyDown, onKeyUp, value, ariaLabel, onClear, popup, ...defaultInputProps }) => (h("div", { class: "flex grow overflow-hidden" },
    h("div", { part: "textarea-expander", class: "grid grow overflow-hidden" },
        h("textarea", { part: "textarea", "aria-label": ariaLabel, placeholder: bindings.i18n.t('search'), class: "placeholder-neutral-dark", rows: 1, onInput: (e) => {
                onInput?.(e);
                syncTextWithReplica(textAreaRef);
            }, onKeyDown: (e) => {
                syncTextWithReplica(textAreaRef);
                if (e.key === 'Enter') {
                    if (e.shiftKey) {
                        return;
                    }
                    e.preventDefault();
                }
                onKeyDown?.(e);
            }, onKeyUp: (e) => {
                onKeyUp?.(e);
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return;
                }
                syncTextWithReplica(textAreaRef);
            }, onBlur: (e) => {
                onBlur?.(e);
                collapseTextArea(textAreaRef);
                syncTextWithReplica(textAreaRef);
            }, onChange: (e) => {
                onChange?.(e);
                syncTextWithReplica(textAreaRef);
            }, onFocus: (e) => {
                onFocus?.(e);
                const target = e.target;
                syncTextWithReplica(textAreaRef ?? target);
                expandTextArea(textAreaRef ?? target);
            }, autocomplete: "off", ...(popup && getPopupAttributes(popup)), ...defaultInputProps, value: value })),
    loading && (h("div", { class: "searchbox-button-wrapper ml-2 flex items-center justify-center" },
        h("span", { part: "loading", class: "loading mr-2 grid h-5 w-5 animate-spin place-items-center rounded-full bg-linear-to-r" }))),
    !loading && value && (h(TextAreaClearButton, { inputRef: textAreaRef, bindings: bindings, onClick: () => {
            onClear();
            resetReplicaText(textAreaRef);
        } }))));

const SearchSlimIcon = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
<path d="M16 16L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

function promiseTimeout(prom, ms) {
    let id;
    const timeout = new Promise((_, reject) => {
        id = setTimeout(() => {
            reject(new Error('Promise timed out.'));
        }, ms);
    });
    return Promise.race([prom, timeout]).then(() => {
        clearTimeout(id);
    });
}

class SuggestionManager {
    constructor(ownerSearchBoxProps) {
        this.ownerSearchBoxProps = ownerSearchBoxProps;
        this.suggestions = [];
        this.leftSuggestionElements = [];
        this.rightSuggestionElements = [];
        this.leftPanel = undefined;
        this.rightPanel = undefined;
        this.activeDescendant = '';
        this.suggestedQuery = '';
        this.keyboardActiveDescendant = '';
        this.queryDataAttribute = 'data-query';
        this.suggestionEvents = [];
        this.previousActiveDescendantElement = null;
        this.leftSuggestions = [];
        this.rightSuggestions = [];
        this.triggerSuggestions = debounce(() => this.executeQuerySuggestion(), this.ownerSearchBoxProps.getSuggestionDelay());
    }
    get partialSuggestionBindings() {
        return {
            suggestedQuery: () => this.suggestedQuery,
            clearSuggestions: () => this.clearSuggestions(),
            triggerSuggestions: () => this.triggerSuggestions(),
            getSuggestions: () => this.suggestions,
            getSuggestionElements: () => this.allSuggestionElements,
        };
    }
    get activeDescendantElement() {
        if (!this.hasActiveDescendant) {
            return null;
        }
        return (this.leftPanel?.querySelector(`#${this.activeDescendant}`) ||
            this.rightPanel?.querySelector(`#${this.activeDescendant}`) ||
            null);
    }
    onSubmit() {
        this.clickOnActiveElement();
        this.clearSuggestions();
    }
    updateActiveDescendant(id = '') {
        this.activeDescendant = id;
        forceUpdate(this.ownerSearchBoxProps.getHost());
    }
    updateKeyboardActiveDescendant(id = '') {
        this.keyboardActiveDescendant = id;
    }
    clickOnActiveElement() {
        this.activeDescendantElement?.click();
        this.updateActiveDescendant();
    }
    isRightPanelInFocus() {
        if (isNullOrUndefined(this.panelInFocus) ||
            isNullOrUndefined(this.rightPanel)) {
            return false;
        }
        return this.panelInFocus === this.rightPanel;
    }
    initializeSuggestions(bindings) {
        this.suggestions = this.suggestionEvents.map((event) => event(bindings));
    }
    registerSuggestionsFromEvent(event, bindings) {
        event.preventDefault();
        event.stopPropagation();
        this.suggestionEvents.push(event.detail);
        this.suggestions.push(event.detail(bindings));
    }
    registerSuggestions(suggestions) {
        this.suggestions.push(suggestions);
    }
    get isDoubleList() {
        return Boolean(this.leftSuggestionElements.length && this.rightSuggestionElements.length);
    }
    focusPanel(side) {
        const panel = side === 'left' ? this.leftPanel : this.rightPanel;
        if (this.panelInFocus === panel) {
            return;
        }
        if (panel && panel.firstElementChild) {
            const panelHasActiveDescendant = this.previousActiveDescendantElement &&
                panel.contains(this.previousActiveDescendantElement);
            const newValue = panelHasActiveDescendant
                ? this.previousActiveDescendantElement
                : panel.firstElementChild;
            this.updateDescendants(newValue.id);
        }
    }
    clearSuggestions() {
        this.clearSuggestionElements();
        this.updateActiveDescendant();
    }
    focusNextValue() {
        if (!this.hasSuggestions || !this.nextOrFirstValue) {
            return;
        }
        this.focusValue(this.nextOrFirstValue);
    }
    focusValue(value) {
        this.updateKeyboardActiveDescendant(value.id);
        this.updateActiveDescendant(value.id);
        this.scrollActiveDescendantIntoView();
        this.updateQueryFromSuggestion();
    }
    onSuggestionMouseOver(item, side, id) {
        const thisPanel = side === 'left' ? this.leftPanel : this.rightPanel;
        // When hovering, always reset the keyboard active descendant
        this.updateKeyboardActiveDescendant();
        if (this.panelInFocus === thisPanel) {
            this.updateActiveDescendant(id);
        }
        else {
            this.updateDescendants(id);
        }
        if (item.query) {
            this.updateSuggestedQuery(item.query);
        }
    }
    onSuggestionClick(item, e) {
        if (item.query) {
            this.clearSuggestions();
            this.updateOwnerSearchboxQuery(item.query);
        }
        item.onSelect && item.onSelect(e);
    }
    get hasSuggestions() {
        return !!this.allSuggestionElements.length;
    }
    get allSuggestionElements() {
        return [...this.leftSuggestionElements, ...this.rightSuggestionElements];
    }
    focusPreviousValue() {
        if (this.firstValue === this.activeDescendantElement) {
            this.updateKeyboardActiveDescendant();
            this.updateActiveDescendant();
            return;
        }
        if (!this.hasSuggestions || !this.previousOrLastValue) {
            return;
        }
        this.focusValue(this.previousOrLastValue);
    }
    get hasActiveDescendant() {
        return this.activeDescendant !== '';
    }
    async executeQuerySuggestion() {
        this.updateActiveDescendant();
        const settled = await Promise.allSettled(this.suggestions.map((suggestion) => promiseTimeout(suggestion.onInput ? suggestion.onInput() : Promise.resolve(), this.ownerSearchBoxProps.getSuggestionTimeout())));
        const fulfilledSuggestions = [];
        settled.forEach((prom, j) => {
            if (prom.status === 'fulfilled') {
                fulfilledSuggestions.push(this.suggestions[j]);
            }
            else {
                this.ownerSearchBoxProps
                    .getLogger()
                    .warn('Some query suggestions are not being shown because the promise timed out.');
            }
        });
        const splitSuggestions = (side, isDefault = false) => fulfilledSuggestions
            .filter((suggestion) => suggestion.panel === side || (!suggestion.panel && isDefault))
            .sort(this.sortSuggestions);
        this.leftSuggestions = splitSuggestions('left', true);
        this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements();
        this.rightSuggestions = splitSuggestions('right');
        this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions);
        const defaultSuggestedQuery = this.allSuggestionElements.find(elementHasQuery)?.query || '';
        this.updateSuggestedQuery(defaultSuggestedQuery);
    }
    get lastValue() {
        return this.panelInFocus?.lastElementChild;
    }
    get previousOrLastValue() {
        if (!this.hasActiveDescendant) {
            return this.lastValue?.firstChild;
        }
        const parentOfActiveDescendant = this.activeDescendantElement?.parentElement;
        return (parentOfActiveDescendant?.previousElementSibling?.firstChild ||
            this.firstValue?.firstChild);
    }
    sortSuggestions(a, b) {
        return a.position - b.position;
    }
    get nextOrFirstValue() {
        if (!this.hasActiveDescendant) {
            return this.firstValue?.firstChild;
        }
        const parentOfActiveDescendant = this.activeDescendantElement?.parentElement;
        return (parentOfActiveDescendant?.nextElementSibling?.firstChild ||
            this.firstValue?.firstChild);
    }
    get firstValue() {
        return this.panelInFocus?.firstElementChild;
    }
    get panelInFocus() {
        if (this.leftPanel?.contains(this.activeDescendantElement)) {
            return this.leftPanel;
        }
        if (this.rightPanel?.contains(this.activeDescendantElement)) {
            return this.rightPanel;
        }
        return this.leftPanel || this.rightPanel;
    }
    scrollActiveDescendantIntoView() {
        this.activeDescendantElement?.scrollIntoView({
            block: 'nearest',
        });
    }
    updateQueryFromSuggestion() {
        const suggestedQuery = this.activeDescendantElement?.getAttribute(this.queryDataAttribute);
        this.updateOwnerSearchboxQuery(suggestedQuery || '');
    }
    updateOwnerSearchboxQuery(query) {
        if (query && this.ownerSearchBoxProps.getSearchBoxValue() !== query) {
            this.ownerSearchBoxProps.updateQuery(query);
            this.updateSuggestedQuery(query);
        }
    }
    async updateSuggestedQuery(suggestedQuery) {
        await Promise.allSettled(this.suggestions.map((suggestion) => promiseTimeout(suggestion.onSuggestedQueryChange
            ? suggestion.onSuggestedQueryChange(suggestedQuery)
            : Promise.resolve(), this.ownerSearchBoxProps.getSuggestionTimeout())));
        this.suggestedQuery = suggestedQuery;
        this.updateSuggestionElements(suggestedQuery);
        forceUpdate(this.ownerSearchBoxProps.getHost());
    }
    updateSuggestionElements(query) {
        if (!this.isPanelInFocus(this.leftPanel, query)) {
            this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements();
        }
        if (!this.isPanelInFocus(this.rightPanel, query)) {
            this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions);
        }
    }
    forceUpdate() {
        this.updateSuggestionElements(this.suggestedQuery);
        forceUpdate(this.ownerSearchBoxProps.getHost());
    }
    isPanelInFocus(panel, query) {
        if (!this.activeDescendantElement) {
            return false;
        }
        if (query) {
            const escaped = DOMPurify.sanitize(query);
            return !!panel?.querySelector(`[${this.queryDataAttribute}="${CSS.escape(escaped)}"]`);
        }
        return this.activeDescendantElement?.closest('ul') === panel;
    }
    getAndFilterLeftSuggestionElements() {
        const suggestionElements = this.getSuggestionElements(this.leftSuggestions);
        const filterOnDuplicate = new Set();
        const out = suggestionElements.filter((suggestionElement) => {
            if (isNullOrUndefined(suggestionElement.query)) {
                return true;
            }
            if (filterOnDuplicate.has(suggestionElement.query)) {
                return false;
            }
            else {
                filterOnDuplicate.add(suggestionElement.query);
                return true;
            }
        });
        return out;
    }
    getSuggestionElements(suggestions) {
        const elements = suggestions
            .map((suggestion) => suggestion.renderItems())
            .flat();
        const max = this.ownerSearchBoxProps.getNumberOfSuggestionsToDisplay() +
            elements.filter(elementHasNoQuery).length;
        return elements.slice(0, max);
    }
    updateDescendants(activeDescendant = '') {
        const newPrevDescendantElement = this.activeDescendantElement;
        this.previousActiveDescendantElement = newPrevDescendantElement;
        this.updateActiveDescendant(activeDescendant);
    }
    clearSuggestionElements() {
        this.leftSuggestionElements = [];
        this.rightSuggestionElements = [];
    }
}

export { SearchTextArea as S, SuggestionManager as a, SearchBoxWrapper as b, SearchSlimIcon as c };

//# sourceMappingURL=stencil-suggestion-manager.js.map