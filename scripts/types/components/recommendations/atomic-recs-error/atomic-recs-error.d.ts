import { RecommendationList, RecommendationListState } from '@coveo/headless/recommendation';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { RecsBindings } from '../atomic-recs-interface/atomic-recs-interface';
/**
 * The `atomic-recs-error` component handles fatal errors when performing a recommendations request on the index or Search API. When the error is known, it displays a link to relevant documentation link for debugging purposes. When the error is unknown, it displays a small text area with the JSON content of the error.
 *
 * @part icon - The svg related to the error.
 * @part title - The title of the error.
 * @part description - A description of the error.
 * @part doc-link - A link to the relevant documentation.
 * @part more-info-btn - A button to request additional error information.
 * @part error-info - Additional error information.
 */
export declare class AtomicRecsError implements InitializableComponent<RecsBindings> {
    bindings: RecsBindings;
    recommendationList: RecommendationList;
    recommendationListState: RecommendationListState;
    error: Error;
    showMoreInfo: boolean;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
