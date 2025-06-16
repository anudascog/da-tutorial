import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface RatingProps {
    i18n: i18n;
    numberOfTotalIcons: number;
    numberOfActiveIcons: number;
    icon: string;
    iconSize?: number;
}
export declare const Rating: FunctionalComponent<RatingProps>;
export declare const computeNumberOfStars: (value: unknown, field: string) => number | null;
export {};
