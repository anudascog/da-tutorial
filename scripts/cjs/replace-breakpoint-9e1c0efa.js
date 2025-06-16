'use strict';

const domUtils = require('./dom-utils-d4790328.js');

const DEFAULT_MOBILE_BREAKPOINT = '1024px';
function replaceMediaQuery(style, mobileBreakpoint) {
    const regex = new RegExp(`\\(min-width: ${DEFAULT_MOBILE_BREAKPOINT}\\)|\\(width >= ${DEFAULT_MOBILE_BREAKPOINT}\\)`, 'g');
    return style.replace(regex, `(width >= ${mobileBreakpoint})`);
}
function replaceStyleSheet(element, mobileBreakpoint) {
    const stylesheets = element.shadowRoot?.adoptedStyleSheets;
    if (!stylesheets || !stylesheets.length) {
        return;
    }
    const stylesheet = stylesheets[0];
    const style = Object.values(stylesheet.cssRules)
        .map((rule) => rule.cssText)
        .join('');
    stylesheet.replaceSync(replaceMediaQuery(style, mobileBreakpoint));
}
function replateStyleContent(element, breakpoint) {
    const styleTag = element.shadowRoot?.querySelector('style');
    if (!styleTag) {
        return;
    }
    styleTag.textContent = replaceMediaQuery(styleTag.textContent, breakpoint);
}
const layouts = ['atomic-search-layout', 'atomic-insight-layout'];
function updateBreakpoints(element) {
    const layout = domUtils.closest(element, layouts.join(', '));
    if (!layout?.mobileBreakpoint) {
        return;
    }
    if (layout.mobileBreakpoint === DEFAULT_MOBILE_BREAKPOINT) {
        return;
    }
    replaceStyleSheet(element, layout.mobileBreakpoint);
    replateStyleContent(element, layout.mobileBreakpoint);
}

exports.DEFAULT_MOBILE_BREAKPOINT = DEFAULT_MOBILE_BREAKPOINT;
exports.updateBreakpoints = updateBreakpoints;

//# sourceMappingURL=replace-breakpoint-9e1c0efa.js.map