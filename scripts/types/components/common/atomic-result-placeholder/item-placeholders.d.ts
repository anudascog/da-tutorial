import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from "../../../components";
import { FunctionalComponent } from "../../../utils/functional-component-utils";
export interface ItemPlaceholdersProps {
    density: ItemDisplayDensity;
    display: ItemDisplayLayout;
    imageSize: ItemDisplayImageSize;
    numberOfPlaceholders: number;
}
export declare const renderItemPlaceholders: FunctionalComponent<ItemPlaceholdersProps>;
