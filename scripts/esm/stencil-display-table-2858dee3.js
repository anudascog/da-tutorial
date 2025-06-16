import { h } from './index-3f35faca.js';
import { t as tableElementTagName } from './table-element-utils-49d22ec6.js';

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

export { DisplayTableRow as D, DisplayTableData as a, DisplayTable as b };

//# sourceMappingURL=stencil-display-table-2858dee3.js.map