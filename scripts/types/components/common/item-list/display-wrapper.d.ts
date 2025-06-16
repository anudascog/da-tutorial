import { ItemDisplayLayout } from "../../../components";
import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
export interface DisplayWrapperProps {
    display: ItemDisplayLayout;
    listClasses: string;
}
export declare const renderDisplayWrapper: FunctionalComponentWithChildren<DisplayWrapperProps>;
