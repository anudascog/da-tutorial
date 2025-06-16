import { ItemRenderingFunction } from "../../../components";
import { FunctionalComponent, FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
import { TemplateResult } from 'lit';
import { AnyItem } from '../interface/item';
interface TableColumnsProps {
    firstItem: AnyItem;
    itemRenderingFunction?: ItemRenderingFunction;
    templateContentForFirstItem: DocumentFragment;
}
export interface TableLayoutProps extends TableColumnsProps {
    host: HTMLElement;
    listClasses: string;
    logger: Pick<Console, 'error'>;
}
export interface TableDataProps extends TableColumnsProps {
    key: string;
    renderItem: (content: Element) => TemplateResult;
}
export interface TableRowProps {
    key: string;
    rowIndex: number;
    setRef: (element?: Element) => void;
}
export declare const renderTableLayout: FunctionalComponentWithChildren<TableLayoutProps>;
export declare const renderTableRow: FunctionalComponentWithChildren<TableRowProps>;
export declare const renderTableData: FunctionalComponent<TableDataProps>;
export {};
