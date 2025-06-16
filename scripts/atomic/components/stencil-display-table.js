import { h } from '@stencil/core/internal/client';
import { t as tableElementTagName } from './table-element-utils.js';

// The Lit equivalent of this file is table-layout.ts
const getFieldTableColumns = (props) => {
    if (props.itemRenderingFunction) {
        return getFieldTableColumnsFromRenderingFunction(props);
    }
    return getFieldTableColumnsFromHTMLTemplate(props);
};
const getFieldTableColumnsFromRenderingFunction = (props) => {
    const contentOfRenderingFunction = document.createElement('div');
    const contentOfRenderingFunctionAsString = props.itemRenderingFunction(props.firstItem, document.createElement('div'));
    contentOfRenderingFunction.innerHTML = contentOfRenderingFunctionAsString;
    return Array.from(contentOfRenderingFunction.querySelectorAll(tableElementTagName));
};
const getFieldTableColumnsFromHTMLTemplate = (props) => Array.from(props.templateContentForFirstItem.querySelectorAll(tableElementTagName));
const DisplayTable = (props, children) => {
    const fieldColumns = getFieldTableColumns(props);
    if (!fieldColumns.length) {
        props.logger.error('atomic-table-element elements missing in the template to display columns.', props.host);
    }
    return (h("table", { class: `list-root ${props.listClasses}`, part: "result-table" },
        h("thead", { part: "result-table-heading" },
            h("tr", { part: "result-table-heading-row" }, fieldColumns.map((column) => (h("th", { part: "result-table-heading-cell" },
                h("atomic-text", { value: column.getAttribute('label') })))))),
        h("tbody", { part: "result-table-body" }, ...children)));
};
const DisplayTableRow = ({ key, rowIndex, setRef }, children) => {
    return (h("tr", { key: key, part: 'result-table-row ' +
            (rowIndex % 2 === 1 ? 'result-table-row-even' : 'result-table-row-odd'), ref: (element) => setRef(element) }, ...children));
};
const DisplayTableData = (props) => {
    const fieldColumns = getFieldTableColumns(props);
    return fieldColumns.map((column) => {
        const key = column.getAttribute('label') + props.key;
        return (h("td", { key: key, part: "result-table-cell" }, props.renderItem(column)));
    });
};

export { DisplayTable as D, DisplayTableRow as a, DisplayTableData as b };

//# sourceMappingURL=stencil-display-table.js.map