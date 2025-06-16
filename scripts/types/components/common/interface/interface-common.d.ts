import { LogLevel } from '@coveo/headless';
import { i18n } from 'i18next';
import '../atomic-component-error/atomic-component-error.js';
import { AnyBindings, AnyEngineType } from './bindings.js';
export type InitializeEventHandler = (bindings: AnyBindings) => void;
export type InitializeEvent = CustomEvent<InitializeEventHandler>;
export interface BaseAtomicInterface<EngineType extends AnyEngineType> {
    analytics: boolean;
    i18n: i18n;
    engine?: EngineType;
    languageAssetsPath: string;
    iconAssetsPath: string;
    logLevel?: LogLevel;
    language?: string;
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
    constructor(atomicInterface: BaseAtomicInterface<Engine> & HTMLElement, globalVariableName: string);
    onComponentInitializing(event: InitializeEvent): void;
    onInitialization(initEngine: () => void): Promise<void>;
    onAnalyticsChange(): void;
    onLanguageChange(): void;
    engineIsCreated(engine?: Engine): engine is Engine;
    private get interfaceTagname();
    private initComponents;
    private get language();
}
