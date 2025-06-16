const getSummary = (i18n, query, hasResults, i18nKey) => {
    if (hasResults) {
        return '';
    }
    const labelFor = `${i18nKey}-for`;
    return query
        ? i18n.t(labelFor, {
            interpolation: { escapeValue: false },
            query,
        })
        : i18n.t(i18nKey);
};

export { getSummary as g };

//# sourceMappingURL=utils-bd51f737.js.map