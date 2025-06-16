import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ItemTarget } from '../layout/display-options';
interface ItemLinkEventProps {
    onSelect: () => void;
    onBeginDelayedSelect: () => void;
    onCancelPendingSelect: () => void;
    stopPropagation?: boolean;
}
export interface ItemLinkProps extends ItemLinkEventProps {
    href: string;
    className?: string;
    part?: string;
    title?: string;
    ref?: (elm?: HTMLAnchorElement) => void;
    stopPropagation?: boolean;
    attributes?: Attr[];
    tabIndex?: number;
    ariaHidden?: boolean;
    target?: ItemTarget;
    rel?: string;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare const bindAnalyticsToLink: (link: HTMLAnchorElement, { onSelect, onBeginDelayedSelect, onCancelPendingSelect, stopPropagation, }: ItemLinkEventProps) => void;
export declare const LinkWithItemAnalytics: FunctionalComponent<ItemLinkProps>;
export {};
