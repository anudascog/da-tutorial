import { html } from 'lit';
export const renderSortLabel = ({ props: { i18n, id }, }) => {
    return html `<label
    class="m-2 cursor-pointer text-sm font-bold"
    part="label"
    for=${id}
  >
    ${i18n.t('with-colon', {
        text: i18n.t('sort-by'),
    })}
  </label> `;
};
