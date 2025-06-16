import { h } from '@stencil/core/internal/client';

const SortOption = ({ value, selected, i18n, label, }) => {
    return (h("option", { value: value, selected: selected }, i18n.t(label)));
};

export { SortOption as S };

//# sourceMappingURL=stencil-option.js.map