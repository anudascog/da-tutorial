import { h } from '@stencil/core/internal/client';
import { M as MinusIcon, P as PlusIcon } from './plus.js';
import { B as Button } from './stencil-button.js';

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
    return (h(Button, { style: "text-primary", class: buttonClass, title: label, onClick: onToggleExpand },
        h("atomic-icon", { icon: isExpanded ? MinusIcon : PlusIcon, class: "mx-1 w-2 align-baseline" }),
        label));
};
const ExpandableText = ({ isExpanded, isTruncated, truncateAfter, onToggleExpand, showMoreLabel, showLessLabel, isCollapsible = false, }, children) => {
    return (h("div", { class: "flex flex-col items-start" },
        h("div", { part: "expandable-text", class: `expandable-text ${!isExpanded ? getLineClampClass(truncateAfter) : ''} min-lines-${truncateAfter}` }, children),
        renderShowHideButton(isExpanded, isTruncated, isCollapsible, onToggleExpand, showMoreLabel, showLessLabel)));
};

export { ExpandableText as E };

//# sourceMappingURL=expandable-text.js.map