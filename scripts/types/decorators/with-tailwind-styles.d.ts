import { CSSResultGroup } from 'lit';
export declare function withTailwindStyles<T extends {
    styles?: CSSResultGroup | CSSStyleSheet | undefined;
    new (...args: any[]): {};
}>(constructor: T): T;
