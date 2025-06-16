'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const IconButton = (props) => {
    return (index.h("div", { class: "relative", part: `${props.partPrefix}-container` },
        index.h(stencilButton.Button, { ...props, class: "relative h-[2.6rem] w-[2.6rem] p-3", part: `${props.partPrefix}-button`, ref: props.buttonRef },
            index.h("atomic-icon", { icon: props.icon, class: "h-4 w-4 shrink-0", part: `${props.partPrefix}-icon` })),
        props.badge && (index.h("span", { part: `${props.partPrefix}-badge`, class: "bg-primary text-on-primary absolute -top-2 -right-2 block h-4 w-4 rounded-full text-center text-xs leading-4" }, props.badge))));
};

exports.IconButton = IconButton;

//# sourceMappingURL=iconButton-c1cd4b3f.js.map