function findSection(element, section) {
    return element.querySelector(sectionSelector(section));
}
function sectionSelector(section) {
    return `atomic-layout-section[section="${section}"]`;
}

export { findSection as f, sectionSelector as s };

//# sourceMappingURL=sections.js.map