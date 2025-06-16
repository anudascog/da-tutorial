import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface QueryErrorDescriptionProps {
    errorType?: string;
    i18n: i18n;
    url: string;
    organizationId: string;
}
export declare const QueryErrorDescription: FunctionalComponent<QueryErrorDescriptionProps>;
export {};
