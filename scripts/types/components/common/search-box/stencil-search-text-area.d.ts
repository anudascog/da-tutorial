import { FunctionalComponent } from '../../../stencil-public-runtime';
import { JSXBase } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
interface Props extends JSXBase.TextareaHTMLAttributes<HTMLTextAreaElement> {
    textAreaRef: HTMLTextAreaElement;
    loading: boolean;
    bindings: AnyBindings;
    value: string;
    ariaLabel: string;
    onClear(): void;
    popup?: {
        id: string;
        activeDescendant: string;
        expanded: boolean;
        hasSuggestions: boolean;
    };
}
export declare const SearchTextArea: FunctionalComponent<Props>;
export {};
