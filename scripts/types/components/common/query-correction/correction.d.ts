import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface CorrectionProps {
    i18n: i18n;
    onClick: () => void;
    correctedQuery: string;
}
export declare const Correction: FunctionalComponent<CorrectionProps>;
export {};
