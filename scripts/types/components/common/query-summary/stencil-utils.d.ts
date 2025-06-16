import { i18n } from 'i18next';
interface i18nKeyProps {
    first: number;
    last: number;
    total: number;
    query: string;
    isLoading: boolean;
    i18n: i18n;
}
export declare const getQuerySummaryI18nParameters: (props: i18nKeyProps) => {
    i18nKey: string;
    highlights: {
        first: any;
        last: any;
        total: any;
        query: any;
    };
    ariaLiveMessage: string;
};
export declare const getProductQuerySummaryI18nParameters: (props: i18nKeyProps) => {
    i18nKey: string;
    highlights: {
        first: any;
        last: any;
        total: any;
        query: any;
    };
    ariaLiveMessage: string;
};
export {};
