import { displayIf } from "../../../directives/display-if";
import { html } from 'lit';
export const pagerGuard = ({ props }) => (children) => {
    const condition = !props.hasError && props.isAppLoaded && props.hasItems;
    return displayIf(condition, () => html `${children}`);
};
