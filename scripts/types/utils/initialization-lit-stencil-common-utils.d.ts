import type { AnyBindings } from '../components/common/interface/bindings';
export declare function fetchBindings<SpecificBindings extends AnyBindings>(element: Element): Promise<SpecificBindings>;
export type InitializeEventHandler = (bindings: AnyBindings) => void;
export declare class MissingInterfaceParentError extends Error {
    constructor(elementName: string);
}
export declare const initializableElements: string[];
export declare const initializeEventName = "atomic/initializeComponent";
