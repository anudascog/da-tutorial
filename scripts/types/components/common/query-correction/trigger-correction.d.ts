import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface TriggerCorrectionProps {
    i18n: i18n;
    correctedQuery: string;
    originalQuery: string;
    onClick: () => void;
}
export declare const TriggerCorrection: FunctionalComponent<TriggerCorrectionProps>;
export {};
