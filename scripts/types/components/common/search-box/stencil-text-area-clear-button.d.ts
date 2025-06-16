import { FunctionalComponent } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
import { StencilButtonProps } from '../stencil-button';
interface Props extends Partial<StencilButtonProps> {
    bindings: AnyBindings;
    inputRef: HTMLInputElement | HTMLTextAreaElement | null;
}
export declare const TextAreaClearButton: FunctionalComponent<Props>;
export {};
