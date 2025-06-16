import { UserAction as IUserAction } from '@coveo/headless/insight';
import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
interface UserAction {
    action: IUserAction;
    bindings: InsightBindings;
}
export declare const UserAction: FunctionalComponent<UserAction>;
export {};
