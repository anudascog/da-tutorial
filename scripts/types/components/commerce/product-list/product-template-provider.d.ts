import { Product, Template } from '@coveo/headless/commerce';
import { ItemTarget } from '../../common/layout/display-options';
import { TemplateProvider, TemplateProviderProps } from '../../common/template-provider/template-provider';
export declare class ProductTemplateProvider extends TemplateProvider<Product> {
    private gridCellLinkTarget?;
    constructor(props: TemplateProviderProps<Product>, gridCellLinkTarget?: ItemTarget | undefined);
    protected makeDefaultTemplate(): Template<Product, DocumentFragment, DocumentFragment>;
}
