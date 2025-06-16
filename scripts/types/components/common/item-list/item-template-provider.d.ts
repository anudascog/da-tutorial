import { Result, Template } from '@coveo/headless';
import { AnyBindings } from '../interface/bindings';
import { ItemTarget } from '../layout/display-options';
import { TemplateProvider, TemplateProviderProps } from '../template-provider/template-provider';
export declare class ItemTemplateProvider extends TemplateProvider<Result> {
    private gridCellLinkTarget?;
    constructor(props: TemplateProviderProps<Result> & {
        bindings: AnyBindings;
    }, gridCellLinkTarget?: ItemTarget | undefined);
    protected makeDefaultTemplate(): Template<Result, DocumentFragment, DocumentFragment>;
}
