type GenericCondition<AnyFacetValueRequest> = {
    parentFacetId: string;
    condition(parentValues: AnyFacetValueRequest[]): boolean;
};
interface SimpleFacetValue {
    value: string;
    state: string;
}
interface CategoryFacetValue extends SimpleFacetValue {
    children: SimpleFacetValue[];
}
export declare function parseDependsOn<FacetValue extends SimpleFacetValue | CategoryFacetValue>(dependsOn: Record<string, string>): GenericCondition<FacetValue>[];
export {};
