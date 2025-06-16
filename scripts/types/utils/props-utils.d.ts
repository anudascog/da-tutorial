import { ComponentInterface } from '../stencil-public-runtime';
import { ReactiveElement } from 'lit';
interface MapPropOptions {
    attributePrefix?: string;
    splitValues?: boolean;
}
export declare function mapProperty<Element extends ReactiveElement>(options?: MapPropOptions): <Instance extends Element & Record<string, unknown>, K extends keyof Instance>(proto: ReactiveElement, propertyKey: K) => void;
/**
 * @deprecated Use the `mapProperty` decorator instead.
 */
export declare function MapProp(opts?: MapPropOptions): (component: ComponentInterface, variableName: string) => void;
export declare function ArrayProp(): (component: ComponentInterface, variableName: string) => void;
export declare function mapAttributesToProp(prefix: string, mapVariable: Record<string, string | string[]>, attributes: {
    name: string;
    value: string;
}[], splitValues: boolean): void;
export {};
