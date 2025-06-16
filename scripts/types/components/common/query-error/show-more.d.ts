import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { QueryErrorLink } from './link';
interface QueryErrorShowMoreProps {
    onShowMore: () => void;
    i18n: i18n;
    link?: typeof QueryErrorLink;
}
export declare const QueryErrorShowMore: FunctionalComponent<QueryErrorShowMoreProps>;
export {};
