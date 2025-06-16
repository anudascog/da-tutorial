export function findSection(element, section) {
    return element.querySelector(sectionSelector(section));
}
export function sectionSelector(section) {
    return `atomic-layout-section[section="${section}"]`;
}
