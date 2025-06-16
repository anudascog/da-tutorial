export declare const tabLoadedEventName = "atomic/tabRendered";
export declare const dispatchTabLoaded: (element: HTMLElement) => void;
export interface TabCommon {
    active: boolean;
    label: string;
    select: () => void;
}
export type TabCommonElement = TabCommon & HTMLElement;
