'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');

const popoverClass = 'popover-nested';
function initializePopover(host, childFacet) {
    host.dispatchEvent(eventUtils.buildCustomEvent('atomic/initializePopover', childFacet));
}

exports.initializePopover = initializePopover;
exports.popoverClass = popoverClass;

//# sourceMappingURL=popover-type-b1385b27.js.map