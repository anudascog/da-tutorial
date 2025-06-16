import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { FormatFacetValueRange } from './formatter';
interface NumericFacetValueLinkProps extends FormatFacetValueRange {
    onClick: () => void;
    logger: Pick<Console, 'error'>;
    displayValuesAs: 'checkbox' | 'link';
}
export declare const NumericFacetValueLink: FunctionalComponent<NumericFacetValueLinkProps>;
export {};
