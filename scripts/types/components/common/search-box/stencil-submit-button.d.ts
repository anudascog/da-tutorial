import { FunctionalComponent } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
import { StencilButtonProps } from '../stencil-button';
interface Props extends Partial<StencilButtonProps> {
    bindings: AnyBindings;
}
export declare const SubmitButton: FunctionalComponent<Props>;
export {};
