import { h } from './index-3f35faca.js';

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the heading function instead.
 */
const Heading = ({ level, ...htmlProps }, children) => {
    const HeadingTag = level > 0 && level <= 6 ? `h${level}` : 'div';
    return h(HeadingTag, { ...htmlProps }, children);
};

export { Heading as H };

//# sourceMappingURL=stencil-heading-2b28a9b9.js.map