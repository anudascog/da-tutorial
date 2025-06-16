import { h } from './index-3f35faca.js';
import { B as Button } from './stencil-button-45a5cdb4.js';

const IconButton = (props) => {
    return (h("div", { class: "relative", part: `${props.partPrefix}-container` },
        h(Button, { ...props, class: "relative h-[2.6rem] w-[2.6rem] p-3", part: `${props.partPrefix}-button`, ref: props.buttonRef },
            h("atomic-icon", { icon: props.icon, class: "h-4 w-4 shrink-0", part: `${props.partPrefix}-icon` })),
        props.badge && (h("span", { part: `${props.partPrefix}-badge`, class: "bg-primary text-on-primary absolute -top-2 -right-2 block h-4 w-4 rounded-full text-center text-xs leading-4" }, props.badge))));
};

export { IconButton as I };

//# sourceMappingURL=iconButton-50f7ed11.js.map