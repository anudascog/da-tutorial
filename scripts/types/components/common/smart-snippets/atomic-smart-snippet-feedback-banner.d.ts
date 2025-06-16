import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface SmartSnippetFeedbackBannerProps {
    i18n: i18n;
    id: string;
    liked: boolean;
    disliked: boolean;
    feedbackSent: boolean;
    onLike(): void;
    onDislike(): void;
    onPressExplainWhy(): void;
    explainWhyRef?(element?: HTMLButtonElement): void;
}
export declare const SmartSnippetFeedbackBanner: FunctionalComponent<SmartSnippetFeedbackBannerProps>;
export {};
