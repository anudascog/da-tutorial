import { html } from 'lit';
const ArrowBottomIcon = "<svg viewBox=\"0 0 12.6 7.2\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.421 7.04c-.3 0-.5-.1-.7-.3l-4.6-4.6-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l5.2-5.2c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3\" transform=\"matrix(-1 0 0 -1 12.366 7.086)\"/></svg>";
import '../atomic-icon/atomic-icon';
export const renderSortSelect = ({ props: { i18n, id, onSelect } }) => (children) => {
    return html `
      <div class="relative" part="select-parent">
        <select
          id=${id}
          class="btn-outline-neutral h-10 flex-grow cursor-pointer appearance-none pr-24 pl-3"
          part="select"
          aria-label=${i18n.t('sort-by')}
          @change=${onSelect}
        >
          ${children}
        </select>
        <div
          part="select-separator"
          class="border-neutral pointer-events-none absolute top-px right-0 bottom-px flex w-10 items-center justify-center border-l"
        >
          <atomic-icon class="w-3" icon=${ArrowBottomIcon}></atomic-icon>
        </div>
      </div>
    `;
};
