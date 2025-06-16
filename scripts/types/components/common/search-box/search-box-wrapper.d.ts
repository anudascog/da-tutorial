import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
interface Props {
    disabled: boolean;
    onFocusout?: (event: FocusEvent) => void;
}
export declare const renderSearchBoxWrapper: FunctionalComponentWithChildren<Props>;
export {};
