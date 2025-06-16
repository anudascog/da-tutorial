import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface RefineToggleButtonProps {
    i18n: i18n;
    onClick: () => void;
    setRef: (button: HTMLButtonElement) => void;
}
export declare const RefineToggleButton: FunctionalComponent<RefineToggleButtonProps>;
export {};
