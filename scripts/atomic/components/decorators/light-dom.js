export const injectStylesForNoShadowDOM = (Base) => {
    return class extends Base {
        createRenderRoot() {
            return this;
        }
        connectedCallback() {
            super.connectedCallback();
            this.injectStyles();
        }
        injectStyles() {
            const parent = this.getRootNode();
            const styleSheet = Base.styles?.styleSheet;
            const isDocumentOrShadowRoot = parent instanceof Document || parent instanceof ShadowRoot;
            if (styleSheet &&
                isDocumentOrShadowRoot &&
                !parent.adoptedStyleSheets.includes(styleSheet)) {
                parent.adoptedStyleSheets.push(styleSheet);
            }
        }
    };
};
