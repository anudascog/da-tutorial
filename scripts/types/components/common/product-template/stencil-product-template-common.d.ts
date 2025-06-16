import { ProductTemplate, ProductTemplateCondition } from '@coveo/headless/commerce';
export { makeMatchConditions } from './product-template-common';
export type TemplateContent = DocumentFragment;
interface ProductTemplateCommonProps {
    allowEmpty?: boolean;
    host: HTMLDivElement;
    validParents: string[];
    setError: (error: Error) => void;
}
type TemplateNodeType = 'section' | 'metadata' | 'table-column-definition' | 'other';
export declare function getTemplateNodeType(node: Node): TemplateNodeType;
/**
 * @deprecated Use `ProductTemplateController` Reactive controller instead.
 */
export declare class ProductTemplateCommon {
    private host;
    matchConditions: ProductTemplateCondition[];
    private gridCellLinkTarget?;
    constructor({ host, setError, validParents, allowEmpty, }: ProductTemplateCommonProps);
    validateTemplate(host: HTMLDivElement, setError: (error: Error) => void, validParents: string[], allowEmpty?: boolean): void;
    getTemplate(conditions: ProductTemplateCondition[], error: Error): ProductTemplate<TemplateContent> | null;
    renderIfError(error: Error): any;
    getDefaultLinkTemplateElement(): HTMLTemplateElement;
    getLinkTemplateElement(host: HTMLElement): HTMLTemplateElement;
}
export declare function makeDefinedConditions(ifDefined?: string, ifNotDefined?: string): ProductTemplateCondition[];
