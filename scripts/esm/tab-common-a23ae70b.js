import { b as buildCustomEvent } from './event-utils-8de63ec3.js';

const tabLoadedEventName = 'atomic/tabRendered';
const dispatchTabLoaded = (element) => {
    const event = buildCustomEvent(tabLoadedEventName, {});
    element.dispatchEvent(event);
};

export { dispatchTabLoaded as d };

//# sourceMappingURL=tab-common-a23ae70b.js.map