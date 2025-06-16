import { h } from '@stencil/core/internal/client';
import { f as filterProtocol } from './xss-utils.js';

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
    return (h("a", { class: className, part: part, href: filterProtocol(href), target: target, title: title, rel: rel, ref: (el) => {
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

export { LinkWithItemAnalytics as L, bindAnalyticsToLink as b };

//# sourceMappingURL=item-link.js.map