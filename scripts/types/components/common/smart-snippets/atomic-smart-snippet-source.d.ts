import { Result } from '@coveo/headless';
import { EventEmitter } from '../../../stencil-public-runtime';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { ResultContextEvent } from '../../search/result-template-components/result-template-decorators';
import { AnyBindings } from '../interface/bindings';
/**
 * @part source-url
 * @part source-title
 * @internal
 */
export declare class AtomicSmartSnippetSource implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    source: Result;
    anchorAttributes?: Attr[];
    selectSource: EventEmitter;
    beginDelayedSelectSource: EventEmitter;
    cancelPendingSelectSource: EventEmitter;
    error: Error;
    resolveResult(event: ResultContextEvent<Result>): void;
    render(): any;
}
