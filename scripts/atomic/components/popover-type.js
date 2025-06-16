import { b as buildCustomEvent } from './event-utils.js';

const popoverClass = 'popover-nested';
function initializePopover(host, childFacet) {
    host.dispatchEvent(buildCustomEvent('atomic/initializePopover', childFacet));
}

export { initializePopover as i, popoverClass as p };

//# sourceMappingURL=popover-type.js.map