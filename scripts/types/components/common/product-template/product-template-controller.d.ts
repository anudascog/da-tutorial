import { ProductTemplate, ProductTemplateCondition } from '@coveo/headless/commerce';
import { ReactiveController, ReactiveControllerHost } from 'lit';
export type TemplateContent = DocumentFragment;
type ProductTemplateHost = ReactiveControllerHost & HTMLElement & {
    error: Error;
};
export declare class ProductTemplateController implements ReactiveController {
    private host;
    private validParents;
    private allowEmpty;
    matchConditions: ProductTemplateCondition[];
    private gridCellLinkTarget?;
    private static readonly ERRORS;
    private static readonly WARNINGS;
    constructor(host: ProductTemplateHost, validParents: string[], allowEmpty?: boolean);
    hostConnected(): void;
    setError(error: Error): void;
    validateTemplate(): void;
    getTemplate(conditions: ProductTemplateCondition[]): ProductTemplate<TemplateContent> | null;
    getDefaultLinkTemplateElement(): HTMLTemplateElement;
    getLinkTemplateElement(host: HTMLElement): HTMLTemplateElement;
    private get parentElement();
    private get template();
    private parentAttr;
}
export {};
