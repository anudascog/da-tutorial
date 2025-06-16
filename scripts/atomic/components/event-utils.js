function buildCustomEvent(name, detail) {
    return new CustomEvent(name, {
        detail,
        // Event will bubble up the DOM until it is caught
        bubbles: true,
        // Allows to verify if event is caught (cancelled). If it's not caught, it won't be initialized.
        cancelable: true,
        // Allows to compose Atomic components inside one another, event will go across DOM/Shadow DOM
        composed: true,
    });
}
function listenOnce(element, type, listener, options) {
    const _listener = (evt) => {
        element.removeEventListener(type, _listener, options);
        typeof listener === 'object'
            ? listener.handleEvent.call(element, evt)
            : listener.call(element, evt);
    };
    element.addEventListener(type, _listener, options);
}

export { buildCustomEvent as b, listenOnce as l };

//# sourceMappingURL=event-utils.js.map