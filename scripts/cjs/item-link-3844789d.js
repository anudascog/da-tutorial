'use strict';

const index = require('./index-757bc886.js');
const xssUtils = require('./xss-utils-185a1c77.js');

const bindAnalyticsToLink = (link, { onSelect, onBeginDelayedSelect, onCancelPendingSelect, stopPropagation = true, }) => {
    const stopPropagationAndProcess = (e, process) => {
        stopPropagation && e.stopPropagation();
        process();
    };
    ['click', 'contextmenu', 'mousedown', 'mouseup'].forEach((eventName) => link.addEventListener(eventName, (e) => stopPropagationAndProcess(e, onSelect)));
    link.addEventListener('touchstart', (e) => stopPropagationAndProcess(e, onBeginDelayedSelect), { passive: true });
    link.addEventListener('touchend', (e) => stopPropagationAndProcess(e, onCancelPendingSelect), { passive: true });
};
const LinkWithItemAnalytics = ({ href, className, part, title, onSelect, onBeginDelayedSelect, onCancelPendingSelect, onMouseOver, onMouseLeave, onFocus, onBlur, ref, attributes, tabIndex, ariaHidden, rel, stopPropagation = true, target = '_self', }, children) => {
    return (index.h("a", { class: className, part: part, href: xssUtils.filterProtocol(href), target: target, title: title, rel: rel, ref: (el) => {
            if (ref) {
                ref(el);
            }
            if (!el) {
                return;
            }
            bindAnalyticsToLink(el, {
                onSelect,
                onBeginDelayedSelect,
                onCancelPendingSelect,
                stopPropagation,
            });
            if (attributes?.length) {
                [...attributes].forEach(({ nodeName, nodeValue }) => {
                    el.setAttribute(nodeName, nodeValue);
                });
            }
            if (ariaHidden) {
                el.setAttribute('aria-hidden', 'true');
            }
        }, tabIndex: tabIndex, onMouseOver: onMouseOver, onMouseLeave: onMouseLeave, onFocus: onFocus, onBlur: onBlur }, children));
};

exports.LinkWithItemAnalytics = LinkWithItemAnalytics;
exports.bindAnalyticsToLink = bindAnalyticsToLink;

//# sourceMappingURL=item-link-3844789d.js.map