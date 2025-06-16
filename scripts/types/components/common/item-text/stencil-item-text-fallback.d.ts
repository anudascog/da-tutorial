import { FunctionalComponent, VNode } from '../../../stencil-public-runtime';
export interface ItemTextProps<T> {
    logger: Pick<Console, 'error'>;
    host: HTMLElement;
    defaultValue: string | undefined;
    field: string;
    item: T;
    getProperty: (result: T, property: string) => unknown;
}
export declare const ItemTextFallback: <T>({ field, host, logger, defaultValue, item, getProperty }: ItemTextProps<T>, children: VNode[]) => FunctionalComponent<ItemTextProps<T>> | null;
