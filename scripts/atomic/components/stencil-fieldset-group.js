import { h } from '@stencil/core/internal/client';

const FieldsetGroup = ({ label }, children) => (h("fieldset", { class: "contents" },
    h("legend", { class: "sr-only" }, label),
    children));

export { FieldsetGroup as F };

//# sourceMappingURL=stencil-fieldset-group.js.map