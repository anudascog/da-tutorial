'use strict';

const index = require('./index-757bc886.js');
const plus = require('./plus-07843914.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const getLineClampClass = (truncateAfter) => {
    const lineClampMap = {
        none: 'line-clamp-none',
        1: 'line-clamp-1',
        2: 'line-clamp-2',
        3: 'line-clamp-3',
        4: 'line-clamp-4',
    };
    return lineClampMap[truncateAfter] || 'line-clamp-2';
};
const renderShowHideButton = (isExpanded, isTruncated, isCollapsible, onToggleExpand, showMoreLabel, showLessLabel) => {
    let buttonClass = 'expandable-text-button p-1 text-xs leading-[calc(1/.75)]';
    if (!isTruncated && !isExpanded) {
        buttonClass += ' invisible';
    }
    else if (!isCollapsible && !isTruncated && isExpanded) {
        buttonClass += ' hidden';
    }
    const label = isExpanded ? showLessLabel : showMoreLabel;
    return (index.h(stencilButton.Button, { style: "text-primary", class: buttonClass, title: label, onClick: onToggleExpand },
        index.h("atomic-icon", { icon: isExpanded ? plus.MinusIcon : plus.PlusIcon, class: "mx-1 w-2 align-baseline" }),
        label));
};
const ExpandableText = ({ isExpanded, isTruncated, truncateAfter, onToggleExpand, showMoreLabel, showLessLabel, isCollapsible = false, }, children) => {
    return (index.h("div", { class: "flex flex-col items-start" },
        index.h("div", { part: "expandable-text", class: `expandable-text ${!isExpanded ? getLineClampClass(truncateAfter) : ''} min-lines-${truncateAfter}` }, children),
        renderShowHideButton(isExpanded, isTruncated, isCollapsible, onToggleExpand, showMoreLabel, showLessLabel)));
};

exports.ExpandableText = ExpandableText;

//# sourceMappingURL=expandable-text-36fe9f8d.js.map