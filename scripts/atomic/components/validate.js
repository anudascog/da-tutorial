import { h } from '@stencil/core/internal/client';
import { R as RadioButton } from './stencil-radio-button.js';

const Choices = ({ label, groupName, pageSize, choices, lang, scrollToTopEvent, setItemSize, focusOnFirstResultAfterNextSearch, focusOnNextNewResult, }) => {
    const focusOnProperResultDependingOnChoice = (choice) => {
        if (choice < pageSize) {
            focusOnFirstResultAfterNextSearch()?.then(() => scrollToTopEvent());
        }
        else if (choice > pageSize) {
            focusOnNextNewResult();
        }
    };
    return (h("div", { part: "buttons", role: "radiogroup", "aria-label": label, class: "flex flex-wrap gap-2" }, choices.map((choice) => {
        const isSelected = pageSize === choice;
        const parts = ['button'];
        if (isSelected) {
            parts.push('active-button');
        }
        const text = choice.toLocaleString(lang);
        return (h(RadioButton, { key: 'choice', groupName: groupName, style: "outline-neutral", checked: isSelected, ariaLabel: text, onChecked: () => {
                focusOnProperResultDependingOnChoice(choice);
                setItemSize(choice);
            }, class: "btn-page focus-visible:bg-neutral-light", part: parts.join(' '), text: text, selectWhenFocused: false }));
    })));
};

class ChoiceIsNaNError extends Error {
    constructor(choice) {
        super(`The choice value "${choice}" from the "choicesDisplayed" option is not a number.`);
        this.name = 'ChoiceIsNaNError';
    }
}
class InitialChoiceNotInChoicesError extends Error {
    constructor(initialChoice, choices) {
        super(`The initial choice value "${initialChoice}" is not included in the choices ${choices}.`);
        this.name = 'InitialChoiceNotInChoicesError';
    }
}

const Label = (_, children) => {
    return (h("span", { part: "label", class: "text-on-background mr-3 self-start text-lg leading-10", "aria-hidden": "true" }, children));
};

function convertChoicesToNumbers(choices) {
    return choices.split(',').map((choice) => {
        const parsedChoice = parseInt(choice);
        if (isNaN(parsedChoice)) {
            throw new ChoiceIsNaNError(choice);
        }
        return parsedChoice;
    });
}
function validateInitialChoice(initialChoice, choices) {
    if (!choices.includes(initialChoice)) {
        throw new InitialChoiceNotInChoicesError(initialChoice, choices);
    }
    return initialChoice;
}

export { ChoiceIsNaNError as C, InitialChoiceNotInChoicesError as I, Label as L, Choices as a, convertChoicesToNumbers as c, validateInitialChoice as v };

//# sourceMappingURL=validate.js.map