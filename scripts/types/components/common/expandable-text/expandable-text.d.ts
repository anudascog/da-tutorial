import { FunctionalComponent } from '../../../stencil-public-runtime';
export type TruncateAfter = 'none' | '1' | '2' | '3' | '4';
interface ExpandableTextProps {
    isExpanded: boolean;
    isTruncated: boolean;
    isCollapsible?: boolean;
    truncateAfter: TruncateAfter;
    onToggleExpand: (e: MouseEvent | undefined) => void;
    showMoreLabel: string;
    showLessLabel: string;
}
export declare const ExpandableText: FunctionalComponent<ExpandableTextProps>;
export {};
