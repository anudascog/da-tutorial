'use strict';

const index = require('./index-757bc886.js');

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the heading function instead.
 */
const Heading = ({ level, ...htmlProps }, children) => {
    const HeadingTag = level > 0 && level <= 6 ? `h${level}` : 'div';
    return index.h(HeadingTag, { ...htmlProps }, children);
};

exports.Heading = Heading;

//# sourceMappingURL=stencil-heading-2faee1f7.js.map