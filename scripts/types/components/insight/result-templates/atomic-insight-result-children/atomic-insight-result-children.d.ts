import { InitializableComponent } from '../../../../utils/initialization-utils';
import { ChildTemplatesContextEvent } from '../../../common/item-list/item-decorators';
import { ItemTemplateProvider } from '../../../common/item-list/item-template-provider';
import { ItemDisplayImageSize } from '../../../common/layout/display-options';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicResultChildren implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    itemTemplateProvider?: ItemTemplateProvider;
    private foldedResultList;
    private result;
    private displayConfig;
    private initialChildren;
    host: HTMLDivElement;
    error: Error;
    private resultTemplateRegistered;
    private templateHasError;
    private foldedResultListState;
    private showInitialChildren;
    /**
     * Whether to inherit templates defined in a parent atomic-result-children. Only works for the second level of child nesting.
     */
    inheritTemplates: boolean;
    /**
     * The expected size of the image displayed in the children results.
     */
    imageSize?: ItemDisplayImageSize;
    /**
     * The non-localized copy for an empty result state. An empty string will result in the component being hidden.
     */
    noResultText: string;
    resolveChildTemplates(event: ChildTemplatesContextEvent): void;
    initialize(): void;
    private renderChild;
    componentWillRender(): void;
    private get collection();
    private loadFullCollection;
    private toggleShowInitialChildren;
    private renderCollection;
    private renderFoldedResult;
    render(): any;
}
