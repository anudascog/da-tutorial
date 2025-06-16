import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface ShowButtonProps {
    i18n: i18n;
    isCollapsed: boolean;
    onClick: () => void;
}
export declare const ShowButton: FunctionalComponent<ShowButtonProps>;
export {};
