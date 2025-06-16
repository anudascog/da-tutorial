import { isArray, isUndefined } from '@coveo/bueno';
import { h, Fragment, Host } from '@stencil/core/internal/client';

function possiblyWarnOnBadFieldType(field, itemValueRaw, host, logger) {
    if (isArray(itemValueRaw)) {
        logger.error(`${host.nodeName.toLowerCase()} cannot be used with multi value field "${field}" with values "${itemValueRaw}".`, host);
    }
}

const ItemTextFallback = ({ field, host, logger, defaultValue, item, getProperty }, children) => {
    const raw = getProperty(item, field);
    possiblyWarnOnBadFieldType(field, raw, host, logger);
    if (isUndefined(defaultValue)) {
        host.remove();
        return null;
    }
    else {
        return h(Fragment, null, children);
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
        return h(Host, { innerHTML: highlightedValue });
    }
    catch (error) {
        onError(error);
    }
};

export { ItemTextFallback as I, ItemTextHighlighted as a };

//# sourceMappingURL=stencil-item-text-highlighted.js.map