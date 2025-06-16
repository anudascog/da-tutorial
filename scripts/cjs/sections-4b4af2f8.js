'use strict';

function findSection(element, section) {
    return element.querySelector(sectionSelector(section));
}
function sectionSelector(section) {
    return `atomic-layout-section[section="${section}"]`;
}

exports.findSection = findSection;
exports.sectionSelector = sectionSelector;

//# sourceMappingURL=sections-4b4af2f8.js.map