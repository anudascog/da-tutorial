import { InitializableComponent } from '../../../../utils/initialization-utils';
import { ChildTemplatesContextEvent } from '../../../common/item-list/item-decorators';
import { ItemTemplateProvider } from '../../../common/item-list/item-template-provider';
import { ItemDisplayImageSize } from '../../../common/layout/display-options';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-children` component is responsible for displaying child results by applying one or more child result templates.
 * Includes two slots, "before-children" and "after-children", which allow for rendering content before and after the list of children,
 * only when children exist.
 * @part children-root - The wrapper for the message when there are child results
 * @part no-result-root - The wrapper for the message when there are no results.
 * @part show-hide-button - The button that allows to collapse or show all child results.
 * @slot before-children - Slot that allows rendering content before the list of children, only when children exist.
 * @slot after-children - Slot that allows rendering content after the list of children, only when children exist.
 */
export declare class AtomicResultChildren implements InitializableComponent {
    bindings: Bindings;
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
    private loadedFullCollection;
    private renderCollection;
    private renderFoldedResult;
    render(): any;
}
