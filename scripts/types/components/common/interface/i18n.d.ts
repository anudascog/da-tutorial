import { HttpBackendOptions } from 'i18next-http-backend';
import { AnyEngineType } from './bindings';
import { BaseAtomicInterface } from './interface-common';
export declare const i18nTranslationNamespace = "translation";
export declare function i18nBackendOptions(atomicInterface: BaseAtomicInterface<AnyEngineType>): HttpBackendOptions;
export declare function init18n(atomicInterface: BaseAtomicInterface<AnyEngineType>): Promise<import("i18next").TFunction<"translation", undefined>>;
declare module 'i18next' {
    interface CustomTypeOptions {
        resources: Record<string, Record<string, string>>;
    }
}
