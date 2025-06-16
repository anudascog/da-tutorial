'use strict';

const index = require('./index-757bc886.js');
const tableElementUtils = require('./table-element-utils-4865b735.js');

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
    return Array.from(contentOfRenderingFunction.querySelectorAll(tableElementUtils.tableElementTagName));
};
const getFieldTableColumnsFromHTMLTemplate = (props) => Array.from(props.templateContentForFirstItem.querySelectorAll(tableElementUtils.tableElementTagName));
const DisplayTable = (props, children) => {
    const fieldColumns = getFieldTableColumns(props);
    if (!fieldColumns.length) {
        props.logger.error('atomic-table-element elements missing in the template to display columns.', props.host);
    }
    return (index.h("table", { class: `list-root ${props.listClasses}`, part: "result-table" },
        index.h("thead", { part: "result-table-heading" },
            index.h("tr", { part: "result-table-heading-row" }, fieldColumns.map((column) => (index.h("th", { part: "result-table-heading-cell" },
                index.h("atomic-text", { value: column.getAttribute('label') })))))),
        index.h("tbody", { part: "result-table-body" }, ...children)));
};
const DisplayTableRow = ({ key, rowIndex, setRef }, children) => {
    return (index.h("tr", { key: key, part: 'result-table-row ' +
            (rowIndex % 2 === 1 ? 'result-table-row-even' : 'result-table-row-odd'), ref: (element) => setRef(element) }, ...children));
};
const DisplayTableData = (props) => {
    const fieldColumns = getFieldTableColumns(props);
    return fieldColumns.map((column) => {
        const key = column.getAttribute('label') + props.key;
        return (index.h("td", { key: key, part: "result-table-cell" }, props.renderItem(column)));
    });
};

exports.DisplayTable = DisplayTable;
exports.DisplayTableData = DisplayTableData;
exports.DisplayTableRow = DisplayTableRow;

//# sourceMappingURL=stencil-display-table-4aaea579.js.map