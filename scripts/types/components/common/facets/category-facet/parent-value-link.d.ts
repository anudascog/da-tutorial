import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { CategoryFacetValueLinkProps } from './value-link';
interface CategoryFacetParentValueLinkProps extends Omit<CategoryFacetValueLinkProps, 'isParent' | 'isSelected'> {
}
export declare const CategoryFacetParentValueLink: FunctionalComponent<CategoryFacetParentValueLinkProps>;
export {};
