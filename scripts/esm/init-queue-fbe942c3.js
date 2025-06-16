function getWindow() {
    return window;
}
function getInitQueueNamespace() {
    if (!getWindow().initQueueNamespace) {
        getWindow().initQueueNamespace = {
            eventQueueMap: new Map(),
            parentReadyMap: new Map(),
        };
    }
    return getWindow().initQueueNamespace;
}
function getEventQueueMap() {
    return getInitQueueNamespace().eventQueueMap;
}
function getParentReadyMap() {
    return getInitQueueNamespace().parentReadyMap;
}
function markParentAsReady(parent) {
    const parentReadyMap = getParentReadyMap();
    parentReadyMap.set(parent, true);
    const eventQueueMap = getEventQueueMap();
    const eventQueue = eventQueueMap.get(parent) || [];
    eventQueue.reverse();
    while (eventQueue.length > 0) {
        const { event, element } = eventQueue.pop();
        element.dispatchEvent(event);
    }
    parent.dispatchEvent(new CustomEvent('atomic/parentReady', { bubbles: true }));
    eventQueueMap.delete(parent);
}
function isParentReady(parent) {
    const parentReadyMap = getParentReadyMap();
    return parentReadyMap.get(parent) || false;
}
function queueEventForParent(parent, event, element) {
    const eventQueueMap = getEventQueueMap();
    if (!eventQueueMap.has(parent)) {
        eventQueueMap.set(parent, []);
    }
    eventQueueMap.get(parent).push({ event, element });
}
function enqueueOrDispatchInitializationEvent(parent, event, element) {
    if (isParentReady(parent)) {
        element.dispatchEvent(event);
    }
    else {
        queueEventForParent(parent, event, element);
    }
}

export { enqueueOrDispatchInitializationEvent as e, isParentReady as i, markParentAsReady as m };

//# sourceMappingURL=init-queue-fbe942c3.js.map