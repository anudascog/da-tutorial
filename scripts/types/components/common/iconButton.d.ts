import { FunctionalComponent, VNode } from '../../stencil-public-runtime';
import { StencilButtonProps } from './stencil-button';
export interface IconButtonProps extends StencilButtonProps {
    badge?: VNode;
    buttonRef?: (el?: HTMLButtonElement) => void;
    icon: string;
    partPrefix: string;
}
export declare const IconButton: FunctionalComponent<IconButtonProps>;
