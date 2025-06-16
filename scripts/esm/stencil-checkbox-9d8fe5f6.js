import { h } from './index-3f35faca.js';

const Tick = `<svg viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 5L4.6 7.99999L11 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the Checkbox function from the checkbox.ts file
 */
const StencilCheckbox = (props) => {
    const partName = props.part ?? 'checkbox';
    const classNames = [
        'w-4 h-4 grid place-items-center rounded focus-visible:outline-none hover:border-primary-light focus-visible:border-primary-light',
    ];
    const parts = [partName];
    if (props.checked) {
        classNames.push('selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light');
        parts.push(`${partName}-checked`);
    }
    else {
        classNames.push('border border-neutral-dark');
    }
    if (props.class) {
        classNames.push(props.class);
    }
    const attributes = {
        key: props.key,
        id: props.id,
        class: classNames.join(' '),
        part: parts.join(' '),
        'aria-checked': props.checked.toString(),
        'aria-label': props.ariaLabel ?? props.text,
        value: props.text,
        ref: props.ref,
    };
    return (h("button", { ...attributes, role: "checkbox", onClick: () => props.onToggle?.(!props.checked), onMouseDown: (e) => props.onMouseDown?.(e) },
        h("atomic-icon", { style: { stroke: 'white' }, class: `w-3/5 ${props.checked ? 'block' : 'hidden'}`, icon: Tick, part: props.iconPart })));
};

export { StencilCheckbox as S, Tick as T };

//# sourceMappingURL=stencil-checkbox-9d8fe5f6.js.map