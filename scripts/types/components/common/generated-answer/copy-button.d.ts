import { FunctionalComponent } from '../../../stencil-public-runtime';
interface CopyButtonProps {
    title: string;
    isCopied: boolean;
    error: boolean;
    onClick: () => void;
}
export declare const CopyButton: FunctionalComponent<CopyButtonProps>;
export {};
