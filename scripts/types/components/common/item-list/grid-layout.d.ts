import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
export interface GridLayoutProps {
    item: {
        clickUri: string;
        title: string;
    };
    selectorForItem: string;
    setRef: (element?: Element) => void;
}
export declare const renderGridLayout: FunctionalComponentWithChildren<GridLayoutProps>;
