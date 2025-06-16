interface RippleOptions {
    color: string;
    /**
     * When the ripple's parent is not the event's origin
     */
    parent?: Element;
}
export declare function createRipple(event: MouseEvent, options: RippleOptions): void;
export {};
