import { b as buildCustomEvent } from './event-utils.js';

const tabLoadedEventName = 'atomic/tabRendered';
const dispatchTabLoaded = (element) => {
    const event = buildCustomEvent(tabLoadedEventName, {});
    element.dispatchEvent(event);
};

export { dispatchTabLoaded as d };

//# sourceMappingURL=tab-common.js.map