import { FunctionalComponent } from '../../../stencil-public-runtime';
interface CarouselIndicatorProps {
    numberOfImages: number;
    currentImage: number;
    navigateToImage: (index: number) => void;
    maxImagesBeforeAndAfter?: number;
}
declare const CarouselIndicator: FunctionalComponent<CarouselIndicatorProps>;
export default CarouselIndicator;
