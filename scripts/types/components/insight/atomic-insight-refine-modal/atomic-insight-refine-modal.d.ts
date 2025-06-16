import { QuerySummary as InsightQuerySummary, QuerySummaryState as InsightQuerySummaryState, BreadcrumbManagerState as InsightBreadcrumbManagerState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightRefineModal implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    host: HTMLElement;
    querySummaryState: InsightQuerySummaryState;
    breadcrumbManagerState: InsightBreadcrumbManagerState;
    error: Error;
    interfaceDimensions?: DOMRect;
    openButton?: HTMLElement;
    isOpen: boolean;
    querySummary: InsightQuerySummary;
    private breadcrumbManager;
    watchEnabled(isOpen: boolean): void;
    private onAnimationFrame;
    private dimensionChanged;
    updateDimensions(): void;
    initialize(): void;
    private renderHeader;
    private renderBody;
    render(): any;
    componentDidLoad(): void;
}
