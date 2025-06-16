'use strict';

const index = require('./index-757bc886.js');
const stencilSuggestionManager = require('./stencil-suggestion-manager-485f4acd.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const SubmitButton = ({ bindings, onClick, ...defaultButtonProps }) => (index.h("div", { part: "submit-button-wrapper", class: "mr-2 flex items-center justify-center py-2" },
    index.h(stencilButton.Button, { style: "text-primary", class: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full", part: "submit-button", ariaLabel: bindings.i18n.t('search'), onClick: () => {
            onClick?.();
        }, ...defaultButtonProps },
        index.h("atomic-icon", { part: "submit-icon", icon: stencilSuggestionManager.SearchSlimIcon, class: "h-4 w-4" }))));

exports.SubmitButton = SubmitButton;

//# sourceMappingURL=stencil-submit-button-5f9bbeb4.js.map