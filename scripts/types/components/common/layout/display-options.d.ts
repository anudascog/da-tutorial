export type ItemDisplayBasicLayout = 'list' | 'grid';
export type ItemDisplayLayout = ItemDisplayBasicLayout | 'table';
export type ItemDisplayDensity = 'comfortable' | 'normal' | 'compact';
export type ItemDisplayImageSize = 'large' | 'small' | 'icon' | 'none';
export type ItemTarget = '_self' | '_blank' | '_parent' | '_top';
export declare function getItemListDisplayClasses(display: ItemDisplayLayout, density: ItemDisplayDensity, image: ItemDisplayImageSize, isLoading: boolean, isAppLoading: boolean): string;
export declare function getItemDisplayClasses(display: ItemDisplayLayout, density: ItemDisplayDensity, image: ItemDisplayImageSize): string[];
export declare class ItemLayout {
    private children;
    private density;
    private imageSize;
    private display;
    constructor(children: HTMLCollection, display: ItemDisplayLayout, density: ItemDisplayDensity, imageSize: ItemDisplayImageSize);
    private getImageSizeFromSections;
    private getSection;
    getClasses(HTMLContent?: string): string[];
}
