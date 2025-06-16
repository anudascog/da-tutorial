import { FunctionalComponent } from '../../../stencil-public-runtime';
type FeedbackVariant = 'like' | 'dislike';
interface FeedbackButtonProps {
    title: string;
    variant: FeedbackVariant;
    active: boolean;
    onClick: () => void;
}
export declare const FeedbackButton: FunctionalComponent<FeedbackButtonProps>;
export {};
