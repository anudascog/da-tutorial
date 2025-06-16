import { ResultTemplate, ResultTemplateCondition } from '@coveo/headless';
export type TemplateContent = DocumentFragment;
interface ResultTemplateCommonProps {
    allowEmpty?: boolean;
    host: HTMLDivElement;
    validParents: string[];
    setError: (error: Error) => void;
}
type TemplateNodeType = 'section' | 'metadata' | 'table-column-definition' | 'other';
export declare function getTemplateNodeType(node: Node): TemplateNodeType;
export declare class ResultTemplateCommon {
    private host;
    matchConditions: ResultTemplateCondition[];
    private gridCellLinkTarget;
    constructor({ host, setError, validParents, allowEmpty, }: ResultTemplateCommonProps);
    validateTemplate(host: HTMLDivElement, setError: (error: Error) => void, validParents: string[], allowEmpty?: boolean): void;
    getTemplate(conditions: ResultTemplateCondition[], error: Error): ResultTemplate<TemplateContent> | null;
    renderIfError(error: Error): any;
    getDefaultLinkTemplateElement(): HTMLTemplateElement;
    getLinkTemplateElement(host: HTMLElement): HTMLTemplateElement;
}
export declare function makeMatchConditions(mustMatch: Record<string, string[]>, mustNotMatch: Record<string, string[]>): ResultTemplateCondition[];
export declare function makeDefinedConditions(ifDefined?: string, ifNotDefined?: string): ResultTemplateCondition[];
export {};
