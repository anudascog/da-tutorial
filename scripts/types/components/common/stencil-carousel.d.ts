import { FunctionalComponent } from '../../stencil-public-runtime';
import { JSXBase } from '../../stencil-public-runtime';
import { AnyBindings } from './interface/bindings.js';
export interface CarouselProps {
    bindings: AnyBindings;
    previousPage(): void;
    nextPage(): void;
    numberOfPages: number;
    currentPage: number;
}
export declare const Carousel: FunctionalComponent<CarouselProps & JSXBase.HTMLAttributes<HTMLHeadingElement>>;
