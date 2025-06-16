import { Section } from './sections';
/**
 * The `atomic-layout-section` lets you identify various sections for the related `atomic-layout` component.
 */
export declare class AtomicLayoutSection {
    /**
     * The name of the layout section.
     */
    section: Section;
    /**
     * For column sections, the minimum horizontal space it should take.
     * E.g. '300px'
     */
    minWidth?: string;
    /**
     * For column sections, the maximum horizontal space it should take.
     * E.g. '300px'
     */
    maxWidth?: string;
}
