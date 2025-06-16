function getFieldCaptionNamespace(field) {
    return `caption-${field}`;
}
function getFieldCaptions(field, i18n) {
    return (i18n.getResourceBundle(i18n.language, getFieldCaptionNamespace(field)) || {});
}
function getFieldValueCaption(field, facetValue, i18n) {
    return i18n.t(facetValue, {
        ns: getFieldCaptionNamespace(field),
    });
}

export { getFieldCaptions as a, getFieldValueCaption as g };

//# sourceMappingURL=field-utils.js.map