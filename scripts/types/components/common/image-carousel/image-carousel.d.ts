import { FunctionalComponent } from '../../../stencil-public-runtime';
import { JSXBase } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
export interface CarouselProps {
    bindings: AnyBindings;
    previousImage(): void;
    nextImage(): void;
    navigateToImage(index: number): void;
    numberOfImages: number;
    currentImage: number;
}
export declare const ImageCarousel: FunctionalComponent<CarouselProps & JSXBase.HTMLAttributes<HTMLHeadingElement>>;
