import { html, noChange, nothing } from 'lit';
const placeholder = () => html `
  <div
    part="placeholder"
    aria-hidden="true"
    class="bg-neutral my-2 h-6 w-44 animate-pulse rounded"
  ></div>
`;
export const sortGuard = ({ firstSearchExecuted, hasError, hasResults, isLoading }, sortTemplate) => {
    if (hasError) {
        return nothing;
    }
    if (!firstSearchExecuted) {
        return placeholder();
    }
    if (isLoading) {
        return noChange;
    }
    if (!hasResults) {
        return nothing;
    }
    return sortTemplate();
};
