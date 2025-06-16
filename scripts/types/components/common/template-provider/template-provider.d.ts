import type { Template, TemplatesManager } from '@coveo/headless';
export interface TemplateElement<ItemType> extends HTMLElement {
    getTemplate(): Promise<Template<ItemType, DocumentFragment> | null>;
}
export interface TemplateProviderProps<ItemType> {
    getResultTemplateRegistered(): boolean;
    setResultTemplateRegistered(value: boolean): void;
    getTemplateHasError(): boolean;
    setTemplateHasError(value: boolean): void;
    templateElements: TemplateElement<ItemType>[];
    includeDefaultTemplate: boolean;
}
export declare abstract class TemplateProvider<ItemType> {
    private props;
    private buildManager;
    private templateManager;
    protected abstract makeDefaultTemplate(): Template<ItemType, DocumentFragment, DocumentFragment>;
    constructor(props: TemplateProviderProps<ItemType>, buildManager: () => TemplatesManager<ItemType, DocumentFragment, DocumentFragment>);
    private registerResultTemplates;
    getTemplateContent(item: ItemType): DocumentFragment;
    getLinkTemplateContent(item: ItemType): DocumentFragment;
    getEmptyLinkTemplateContent(): DocumentFragment;
    get templatesRegistered(): boolean;
    get hasError(): boolean;
}
