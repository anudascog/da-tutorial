import { FunctionalComponent, VNode } from '../../../stencil-public-runtime';
import { AnyItem } from '../interface/item.js';
import { ItemRenderingFunction } from './stencil-item-list-common.js';
interface TableColumnsProps {
    templateContentForFirstItem: DocumentFragment;
    firstItem: AnyItem;
    itemRenderingFunction?: ItemRenderingFunction;
}
export interface DisplayTableProps extends TableColumnsProps {
    logger: Pick<Console, 'error'>;
    host: HTMLElement;
    listClasses: string;
}
export interface TableDataProps extends TableColumnsProps {
    key: string;
}
export interface DisplayTableRowProps {
    key: string;
    rowIndex: number;
    setRef: (element?: HTMLElement) => void;
}
export declare const DisplayTable: FunctionalComponent<DisplayTableProps>;
export declare const DisplayTableRow: FunctionalComponent<DisplayTableRowProps>;
export declare const DisplayTableData: FunctionalComponent<TableDataProps & {
    renderItem: (content: HTMLAtomicTableElementElement) => VNode;
}>;
export {};
