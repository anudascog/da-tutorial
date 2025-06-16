'use strict';

const bueno = require('@coveo/bueno');
const index = require('./index-757bc886.js');

function possiblyWarnOnBadFieldType(field, itemValueRaw, host, logger) {
    if (bueno.isArray(itemValueRaw)) {
        logger.error(`${host.nodeName.toLowerCase()} cannot be used with multi value field "${field}" with values "${itemValueRaw}".`, host);
    }
}

const ItemTextFallback = ({ field, host, logger, defaultValue, item, getProperty }, children) => {
    const raw = getProperty(item, field);
    possiblyWarnOnBadFieldType(field, raw, host, logger);
    if (bueno.isUndefined(defaultValue)) {
        host.remove();
        return null;
    }
    else {
        return index.h(index.Fragment, null, children);
    }
};

function renderWithHighlights(value, highlights, highlightString) {
    const openingDelimiter = '_openingDelimiter_';
    const closingDelimiter = '_closingDelimiter_';
    const highlightedValue = highlightString({
        content: value,
        openingDelimiter,
        closingDelimiter,
        highlights,
    });
    return highlightedValue
        .replace(new RegExp(openingDelimiter, 'g'), '<b>')
        .replace(new RegExp(closingDelimiter, 'g'), '</b>');
}

const ItemTextHighlighted = ({ highlightKeywords, highlightString, onError, textValue }) => {
    try {
        const highlightedValue = renderWithHighlights(textValue, highlightKeywords, highlightString);
        // deepcode ignore ReactSetInnerHtml: This is not React code
        return index.h(index.Host, { innerHTML: highlightedValue });
    }
    catch (error) {
        onError(error);
    }
};

exports.ItemTextFallback = ItemTextFallback;
exports.ItemTextHighlighted = ItemTextHighlighted;

//# sourceMappingURL=stencil-item-text-highlighted-91fd0fe8.js.map