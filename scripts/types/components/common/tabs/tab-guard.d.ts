import { FunctionalComponent } from '../../../stencil-public-runtime';
interface TabGuardProps {
    tabsIncluded: string | string[];
    tabsExcluded: string | string[];
    activeTab: string;
}
export declare const TabGuard: FunctionalComponent<TabGuardProps>;
export {};
