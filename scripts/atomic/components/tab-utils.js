/**
 * Determines whether the component should be displayed on the current tab.
 *
 * @param tabsIncluded - An array of tab names that should include the facet.
 * @param tabsExcluded - An array of tab names that should exclude the facet.
 * @param activeTab - The name of the currently active tab.
 * @returns A boolean indicating whether the component should be displayed on the current tab.
 */
function shouldDisplayOnCurrentTab(includeTabs, excludeTabs, activeTab) {
    if (excludeTabs.includes(activeTab)) {
        return false;
    }
    if (includeTabs.length === 0 || includeTabs.includes(activeTab)) {
        return true;
    }
    return !activeTab;
}

export { shouldDisplayOnCurrentTab as s };

//# sourceMappingURL=tab-utils.js.map