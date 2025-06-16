import { renderSortOption } from '../../common/sort/option';
export const renderCommerceSortOption = ({ props }) => {
    const { sort } = props;
    const label = getLabel(sort);
    return renderSortOption({ props: { ...props, label, value: label } });
};
export function getLabel(sort) {
    if (sort.by === 'relevance') {
        return 'relevance';
    }
    else {
        return sort.fields
            .map((sortByField) => {
            return sortByField.displayName || sortByField.name;
        })
            .join(' ');
    }
}
export function getSortByLabel(label, availableSorts) {
    const sortByLabel = {};
    availableSorts.forEach((availableSort) => {
        sortByLabel[getLabel(availableSort)] = availableSort;
    });
    return sortByLabel[label];
}
