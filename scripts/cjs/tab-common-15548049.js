'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');

const tabLoadedEventName = 'atomic/tabRendered';
const dispatchTabLoaded = (element) => {
    const event = eventUtils.buildCustomEvent(tabLoadedEventName, {});
    element.dispatchEvent(event);
};

exports.dispatchTabLoaded = dispatchTabLoaded;

//# sourceMappingURL=tab-common-15548049.js.map