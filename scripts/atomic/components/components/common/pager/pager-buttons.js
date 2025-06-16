import "../atomic-icon/atomic-icon";
import { html } from 'lit';
import { renderButton } from '../button';
import { radioButton } from '../radio-button';
export const pagerPreviousButton = ({ props }) => {
    return renderButton({
        props: {
            ...props,
            ariaLabel: props.i18n.t('previous'),
            style: 'outline-primary',
            part: 'previous-button',
            class: 'flex min-h-10 min-w-10 items-center justify-center p-1',
        },
    })(html `<atomic-icon
      icon=${props.icon}
      part="previous-button-icon"
      class="w-5 align-middle"
    ></atomic-icon>`);
};
export const pagerNextButton = ({ props }) => {
    return renderButton({
        props: {
            ...props,
            ariaLabel: props.i18n.t('next'),
            style: 'outline-primary',
            part: 'next-button',
            class: 'flex min-h-10 min-w-10 items-center justify-center p-1',
        },
    })(html `<atomic-icon
      icon=${props.icon}
      part="next-button-icon"
      class="w-5 align-middle"
    ></atomic-icon>`);
};
export const pagerPageButton = ({ props, }) => {
    return radioButton({
        props: {
            ...props,
            selectWhenFocused: false,
            key: props.page,
            style: 'outline-neutral',
            checked: props.isSelected,
            ariaCurrent: props.isSelected ? 'page' : 'false',
            class: 'btn-page focus-visible:bg-neutral-light min-h-10 min-w-10 p-1',
            part: `page-button${props.isSelected ? ' active-page-button' : ''}`,
        },
    });
};
export const pagerPageButtons = ({ props }) => (children) => {
    return html ` <div
      part="page-buttons"
      role="radiogroup"
      aria-label=${props.i18n.t('pagination')}
      class="contents"
    >
      ${children}
    </div>`;
};
