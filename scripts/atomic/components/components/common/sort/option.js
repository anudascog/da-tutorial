import { html } from 'lit';
export const renderSortOption = ({ props: { value, selected, i18n, label }, }) => {
    return html `
    <option value=${value} ?selected=${selected}>${i18n.t(label)}</option>
  `;
};
