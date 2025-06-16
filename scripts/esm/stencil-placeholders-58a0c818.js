import { h } from './index-3f35faca.js';

// The Lit equivalent of this file is item-placeholders.ts. The Lit version doesn't include the placeholder guard.
const ResultsPlaceholdersGuard = (props) => {
    if (!props.displayPlaceholders) {
        return;
    }
    switch (props.display) {
        case 'table':
            return h(TableDisplayResultsPlaceholder, { ...props });
        default:
            return h(ResultsPlaceholder, { ...props });
    }
};
const ResultsPlaceholder = (props) => {
    return Array.from({ length: props.numberOfPlaceholders }, (_, i) => (h("atomic-result-placeholder", { key: `placeholder-${i}`, density: props.density, display: props.display || 'list', imageSize: props.imageSize })));
};
const TableDisplayResultsPlaceholder = (props) => {
    return (h("atomic-result-table-placeholder", { density: props.density, imageSize: props.imageSize, rows: props.numberOfPlaceholders }));
};

export { ResultsPlaceholdersGuard as R, ResultsPlaceholder as a };

//# sourceMappingURL=stencil-placeholders-58a0c818.js.map