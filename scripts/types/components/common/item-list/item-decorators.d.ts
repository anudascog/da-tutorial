import { ComponentInterface } from '../../../stencil-public-runtime';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../layout/display-options';
import { ItemTemplateProvider } from './item-template-provider';
export declare class MissingParentError extends Error {
    constructor(elementName: string, parentName: string);
}
export declare function ItemContext(opts?: {
    parentName: string;
    folded: boolean;
}): (component: ComponentInterface, itemVariable: string) => void;
export declare function InteractiveItemContext(): (component: ComponentInterface, interactiveItemVariable: string) => void;
type ItemContextEventHandler<T> = (item: T) => void;
export type ItemContextEvent<T> = CustomEvent<ItemContextEventHandler<T>>;
export type InteractiveItemContextEvent = CustomEvent<(interactiveItem: unknown) => void>;
export declare function itemContext<T>(element: Element, parentName: string): Promise<T>;
type ChildTemplatesContextEventHandler = (itemTemplateProvider?: ItemTemplateProvider) => void;
export type ChildTemplatesContextEvent = CustomEvent<ChildTemplatesContextEventHandler>;
export declare function ChildTemplatesContext(): (component: ComponentInterface, itemTemplateProviderProp: string) => void;
export type DisplayConfig = {
    density: ItemDisplayDensity;
    imageSize: ItemDisplayImageSize;
};
type ItemDisplayConfigContextEventHandler = (config: DisplayConfig) => void;
export type ItemDisplayConfigContextEvent = CustomEvent<ItemDisplayConfigContextEventHandler>;
export declare function ItemDisplayConfigContext(): (component: ComponentInterface, itemVariable: string) => void;
export {};
