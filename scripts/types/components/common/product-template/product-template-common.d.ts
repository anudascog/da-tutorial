import { ProductTemplateCondition } from '@coveo/headless/commerce';
type TemplateNodeType = 'section' | 'metadata' | 'table-column-definition' | 'other';
export declare function getTemplateNodeType(node: Node): TemplateNodeType;
export declare function makeMatchConditions(mustMatch: Record<string, string[]>, mustNotMatch: Record<string, string[]>): ProductTemplateCondition[];
export declare function makeDefinedConditions(ifDefined?: string, ifNotDefined?: string): ProductTemplateCondition[];
export {};
