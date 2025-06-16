import { FunctionalComponentGuard } from "../../../utils/functional-component-utils";
interface PagerGuardProps {
    hasError?: boolean;
    isAppLoaded: boolean;
    hasItems: boolean;
}
export declare const pagerGuard: FunctionalComponentGuard<PagerGuardProps>;
export {};
