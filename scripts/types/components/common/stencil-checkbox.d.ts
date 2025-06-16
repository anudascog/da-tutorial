import { FunctionalComponent } from '../../stencil-public-runtime';
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the CheckboxProps interface from the checkbox.ts file
 */
export interface StencilCheckboxProps {
    checked: boolean;
    onToggle(checked: boolean): void;
    key?: string | number;
    id?: string;
    class?: string;
    text?: string;
    part?: string;
    iconPart?: string;
    ariaLabel?: string;
    ariaCurrent?: string;
    ref?(element?: HTMLElement): void;
    onMouseDown?(evt: MouseEvent): void;
}
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the Checkbox function from the checkbox.ts file
 */
export declare const StencilCheckbox: FunctionalComponent<StencilCheckboxProps>;
