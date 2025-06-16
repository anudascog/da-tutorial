'use strict';

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

exports.getSummary = getSummary;

//# sourceMappingURL=utils-ca9c9aed.js.map