import { FoldedResult, Result } from '@coveo/headless';
import { Product } from '@coveo/headless/commerce';
import { Result as InsightResult } from '@coveo/headless/insight';
export type AnyItem = FoldedResult | AnyUnfoldedItem | Product;
export type AnyUnfoldedItem = Result | InsightResult;
export declare function extractUnfoldedItem(anyResult: AnyItem): AnyUnfoldedItem;
