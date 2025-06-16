'use strict';

const index = require('./index-757bc886.js');
const stringUtils = require('./string-utils-bdf08f8c.js');

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

var escapeHtml_1 = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}

/**
 * Meant to be used inside the `componentShouldUpdate` lifecycle method.
 * It prevents updating the facet between two matchless facet searches.
 * It also prevents updating the facet until the first search has loaded.
 */
function shouldUpdateFacetSearchComponent(nextFacetSearchState, prevFacetSearchState) {
    const hasQuery = nextFacetSearchState.query !== '';
    const stillNoValues = !nextFacetSearchState.values.length && !prevFacetSearchState.values.length;
    const hasFinishedLoading = !nextFacetSearchState.isLoading && prevFacetSearchState.isLoading;
    if (hasQuery && stillNoValues) {
        return hasFinishedLoading;
    }
    return true;
}
function shouldDisplaySearchResults(facetSearchState) {
    const hasQuery = facetSearchState.query !== '';
    const isLoading = facetSearchState.isLoading;
    const hasValues = !!facetSearchState.values.length;
    if (!hasQuery) {
        return false;
    }
    if (hasValues) {
        return true;
    }
    return !isLoading;
}
function highlightSearchResult(resultValue, searchQuery = '') {
    const sanitizedResult = escapeHtml_1(resultValue);
    if (searchQuery.trim() === '') {
        return sanitizedResult;
    }
    const regex = new RegExp(`(${stringUtils.regexEncode(escapeHtml_1(searchQuery))})`, 'i');
    return escapeHtml_1(resultValue).replace(regex, '<span part="search-highlight" class="font-bold">$1</span>');
}

const FacetValueLabelHighlight = (props) => {
    return (
    // deepcode ignore ReactSetInnerHtml: This is not React code
    index.h("span", { title: props.displayValue, part: "value-label", class: `value-label peer-hover:text-error truncate ${props.isSelected || !!props.isExcluded ? 'font-bold' : ''}`, innerHTML: highlightSearchResult(props.displayValue, props.searchQuery) }));
};

exports.FacetValueLabelHighlight = FacetValueLabelHighlight;
exports.escapeHtml_1 = escapeHtml_1;
exports.shouldDisplaySearchResults = shouldDisplaySearchResults;
exports.shouldUpdateFacetSearchComponent = shouldUpdateFacetSearchComponent;

//# sourceMappingURL=stencil-facet-value-label-highlight-c2421e8f.js.map