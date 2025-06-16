import { InitializeEvent } from "../../../utils/initialization-utils";
import { LogLevel } from '@coveo/headless';
import { ComponentInterface } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { AnyBindings, AnyEngineType } from './bindings';
export interface StencilBaseAtomicInterface<EngineType extends AnyEngineType> extends ComponentInterface {
    analytics: boolean;
    i18n: i18n;
    engine?: EngineType;
    languageAssetsPath: string;
    iconAssetsPath: string;
    logLevel?: LogLevel;
    language?: string;
    host: HTMLElement;
    bindings: AnyBindings;
    error?: Error;
    updateIconAssetsPath(): void;
    registerFieldsToInclude?: () => void;
}
export declare const mismatchedInterfaceAndEnginePropError: (interfaceKind: "search" | "recommendation", configurationName: "query pipeline" | "search hub") => string;
export declare class CommonAtomicInterfaceHelper<Engine extends AnyEngineType> {
    private atomicInterface;
    private i18nPromise;
    private hangingComponentsInitialization;
    constructor(atomicInterface: StencilBaseAtomicInterface<Engine>, globalVariableName: string);
    onComponentInitializing(event: InitializeEvent): void;
    onInitialization(initEngine: () => void): Promise<void>;
    onAnalyticsChange(): void;
    onLanguageChange(): Promise<void>;
    engineIsCreated(engine?: Engine): engine is Engine;
    private get interfaceTagname();
    private initComponents;
    private get language();
}
