import { LitElement } from 'lit';
type Constructor<T = {}> = new (...args: any[]) => T;
export declare const ChildrenUpdateCompleteMixin: <T extends Constructor<LitElement>>(superClass: T) => T;
export {};
