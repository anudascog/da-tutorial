import { noChange, nothing, TemplateResult } from 'lit';
interface SortGuardProps {
    firstSearchExecuted: boolean;
    hasResults: boolean;
    hasError: boolean;
    isLoading: boolean;
}
export declare const sortGuard: ({ firstSearchExecuted, hasError, hasResults, isLoading }: SortGuardProps, sortTemplate: () => TemplateResult) => typeof nothing | typeof noChange | TemplateResult;
export {};
