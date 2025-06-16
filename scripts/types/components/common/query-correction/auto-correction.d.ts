import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface AutoCorrectionProps {
    i18n: i18n;
    originalQuery: string;
    correctedTo: string;
}
export declare const AutoCorrection: FunctionalComponent<AutoCorrectionProps>;
export {};
