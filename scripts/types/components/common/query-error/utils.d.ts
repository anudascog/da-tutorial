import { i18n } from 'i18next';
export declare const getErrorTitleFromErrorType: (i18n: i18n, organizationId: string, errorType?: string) => string;
export declare const getErrorDescriptionFromErrorType: (i18n: i18n, organizationId: string, url: string, errorType?: string) => string;
export declare const getAriaMessageFromErrorType: (i18n: i18n, organizationId: string, platformUrl: string, errorType?: string) => string;
