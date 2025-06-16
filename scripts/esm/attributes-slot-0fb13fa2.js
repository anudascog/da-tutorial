import { g as getNamedSlotFromHost } from './slot-utils-39a2fc43.js';

function getAttributesFromLinkSlot(host, slotName) {
    const attributesSlot = getNamedSlotFromHost(host, slotName);
    if (!attributesSlot) {
        return;
    }
    if (attributesSlot.nodeName !== 'A') {
        console.warn(`Slot named "${slotName}" should be an "a" tag`, attributesSlot);
        return;
    }
    return Array.from(attributesSlot.attributes).filter(({ nodeName }) => {
        if (nodeName === 'slot') {
            return false;
        }
        if (nodeName === 'href') {
            console.warn('The "href" attribute set on the "attributes" slot element will be ignored.');
            return false;
        }
        return true;
    });
}

export { getAttributesFromLinkSlot as g };

//# sourceMappingURL=attributes-slot-0fb13fa2.js.map