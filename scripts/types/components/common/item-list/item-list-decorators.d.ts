import { ComponentInterface } from '../../../stencil-public-runtime';
type FoldedItemListContextEventHandler = (foldedItemList: unknown) => void;
export type FoldedItemListContextEvent = CustomEvent<FoldedItemListContextEventHandler>;
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
export declare function FoldedItemListContext(): (component: ComponentInterface, foldedList: string) => void;
type FoldedItemListStateContextEventHandler = (foldedItemList: unknown) => void;
export type FoldedItemListStateContextEvent = CustomEvent<FoldedItemListStateContextEventHandler>;
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
export declare function FoldedItemListStateContext(): (component: ComponentInterface, foldedListState: string) => void;
export {};
