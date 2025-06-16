import { Product } from '@coveo/headless/commerce';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
export declare function parseValue(product: Product, field: string): number | null;
export declare function getStringValueFromProductOrNull(product: Product, field: string): string | null;
export declare function buildStringTemplateFromProduct(template: string, product: Product, bindings: CommerceBindings): string;
