import { h } from '@stencil/core/internal/client';
import { c as SearchSlimIcon } from './stencil-suggestion-manager.js';
import { B as Button } from './stencil-button.js';

const SubmitButton = ({ bindings, onClick, ...defaultButtonProps }) => (h("div", { part: "submit-button-wrapper", class: "mr-2 flex items-center justify-center py-2" },
    h(Button, { style: "text-primary", class: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full", part: "submit-button", ariaLabel: bindings.i18n.t('search'), onClick: () => {
            onClick?.();
        }, ...defaultButtonProps },
        h("atomic-icon", { part: "submit-icon", icon: SearchSlimIcon, class: "h-4 w-4" }))));

export { SubmitButton as S };

//# sourceMappingURL=stencil-submit-button.js.map