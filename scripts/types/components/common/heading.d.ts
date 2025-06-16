import { FunctionalComponentWithChildren } from "../../utils/functional-component-utils";
export interface HeadingProps {
    /**
     * The heading level.
     *
     * A value outside of the range of 1 to 6 will render a div instead of a heading.
     */
    level: number;
    /**
     * Additional classes to add to the heading.
     */
    class?: string;
    /**
     * Additional parts to add to the heading.
     */
    part?: string;
}
export declare const renderHeading: FunctionalComponentWithChildren<HeadingProps>;
