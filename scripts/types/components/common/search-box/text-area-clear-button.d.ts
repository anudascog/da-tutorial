import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import { Ref } from 'lit/directives/ref.js';
import { ButtonProps } from '../button';
interface Props extends Partial<ButtonProps> {
    i18n: i18n;
    textAreaRef: Ref<HTMLTextAreaElement>;
}
export declare const renderTextAreaClearButton: FunctionalComponent<Props>;
export {};
