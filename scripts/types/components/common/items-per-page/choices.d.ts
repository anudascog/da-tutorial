import { FunctionalComponent } from '../../../stencil-public-runtime';
interface ChoicesProps {
    label: string;
    groupName: string;
    pageSize: number;
    choices: number[];
    lang: string;
    scrollToTopEvent: () => {};
    setItemSize: (size: number) => void;
    focusOnFirstResultAfterNextSearch: () => Promise<void> | undefined;
    focusOnNextNewResult: () => void | undefined;
}
export declare const Choices: FunctionalComponent<ChoicesProps>;
export {};
