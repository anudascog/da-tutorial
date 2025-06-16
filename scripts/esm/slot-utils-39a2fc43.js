function getNamedSlotFromHost(host, slotName) {
    const children = Array.from(host.children);
    const targetSlot = children.filter((child) => child.getAttribute('slot') === slotName);
    if (!targetSlot.length) {
        return;
    }
    if (targetSlot.length > 1) {
        console.warn(`Element should only have 1 slot named "${slotName}".`, host);
    }
    return targetSlot[0];
}
function getDefaultSlotFromHost(host) {
    const children = Array.from(host.children);
    const defaultSlot = children.filter((child) => !child.hasAttribute('slot') || child.getAttribute('slot') === '');
    if (!defaultSlot.length) {
        return;
    }
    if (defaultSlot.length > 1) {
        console.warn('Element should only have 1 default slot.', host);
    }
    return defaultSlot[0];
}

export { getDefaultSlotFromHost as a, getNamedSlotFromHost as g };

//# sourceMappingURL=slot-utils-39a2fc43.js.map