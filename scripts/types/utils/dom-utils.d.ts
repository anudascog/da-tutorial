export declare function rectEquals(r1: DOMRect, r2: DOMRect): boolean;
export declare function parentNodeToString(node: ParentNode): string;
export declare function closest<K extends keyof HTMLElementTagNameMap>(element: Element | null, selector: K): HTMLElementTagNameMap[K] | null;
export declare function closest<K extends keyof SVGElementTagNameMap>(element: Element | null, selector: K): SVGElementTagNameMap[K] | null;
export declare function closest<E extends Element = Element>(element: Element | null, selector: string): E | null;
