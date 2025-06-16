import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import { ButtonProps } from '../button';
interface Props extends Partial<ButtonProps> {
    i18n: i18n;
}
export declare const renderSubmitButton: FunctionalComponent<Props>;
export {};
