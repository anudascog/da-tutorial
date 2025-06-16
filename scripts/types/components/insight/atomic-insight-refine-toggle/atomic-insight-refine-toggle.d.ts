import { BreadcrumbManager as InsightBreadcrumbManager, SearchStatus as InsightSearchStatus } from '@coveo/headless/insight';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightRefineToggle {
    bindings: InsightBindings;
    host: HTMLElement;
    error: Error;
    private breadcrumbManagerState;
    private searchStatusState;
    breadcrumbManager: InsightBreadcrumbManager;
    searchStatus: InsightSearchStatus;
    private modalRef?;
    private buttonRef?;
    private get numberOfBreadcrumbs();
    initialize(): void;
    private enableModal;
    private loadModal;
    render(): any;
}
