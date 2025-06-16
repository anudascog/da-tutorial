import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
export interface ItemTextProps<T> {
    logger: Pick<Console, 'error'>;
    host: HTMLElement;
    defaultValue: string | undefined;
    field: string;
    item: T;
    getProperty: (result: T, property: string) => unknown;
}
export declare const renderItemTextFallback: FunctionalComponentWithChildren<ItemTextProps<unknown>>;
