declare const allTags: Set<"atomic-product-section-actions" | "atomic-product-section-badges" | "atomic-product-section-bottom-metadata" | "atomic-product-section-children" | "atomic-product-section-description" | "atomic-product-section-emphasized" | "atomic-product-section-metadata" | "atomic-product-section-name" | "atomic-product-section-visual" | "atomic-result-section-actions" | "atomic-result-section-badges" | "atomic-result-section-bottom-metadata" | "atomic-result-section-children" | "atomic-result-section-emphasized" | "atomic-result-section-excerpt" | "atomic-result-section-title" | "atomic-result-section-title-metadata" | "atomic-result-section-visual">;
type SetValueType<T> = T extends Set<infer U> ? U : never;
export type ItemSectionTagName = SetValueType<typeof allTags>;
export declare function isResultSectionNode(element: Node): boolean;
export declare function containsSections(content: string | NodeList | HTMLCollection): boolean;
export {};
