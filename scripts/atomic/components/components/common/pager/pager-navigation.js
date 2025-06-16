import { html } from 'lit';
export const pagerNavigation = ({ props }) => (children) => {
    return html `<nav aria-label=${props.i18n.t('pagination')}>
      <div part="buttons" role="toolbar" class="flex flex-wrap gap-2">
        ${children}
      </div>
    </nav>`;
};
