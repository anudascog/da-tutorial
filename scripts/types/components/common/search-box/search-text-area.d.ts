import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import { Ref } from 'lit/directives/ref.js';
interface Props {
    textAreaRef: Ref<HTMLTextAreaElement>;
    loading: boolean;
    i18n: i18n;
    value: string;
    ariaLabel: string;
    title: string;
    onClear(): void;
    popup: {
        id: string;
        activeDescendant: string;
        expanded: boolean;
        hasSuggestions: boolean;
    };
    onInput: (e: Event) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onChange?: (e: Event) => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
}
export declare const renderSearchBoxTextArea: FunctionalComponent<Props>;
export {};
