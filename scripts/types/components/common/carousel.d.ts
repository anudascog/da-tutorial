import { FunctionalComponentWithChildren } from "../../utils/functional-component-utils";
import './atomic-icon/atomic-icon';
import { AnyBindings } from './interface/bindings';
export interface CarouselProps {
    bindings: AnyBindings;
    previousPage(): void;
    nextPage(): void;
    numberOfPages: number;
    currentPage: number;
    ariaLabel: string;
}
export declare const renderCarousel: FunctionalComponentWithChildren<CarouselProps>;
