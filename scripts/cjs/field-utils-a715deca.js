'use strict';

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

exports.getFieldCaptions = getFieldCaptions;
exports.getFieldValueCaption = getFieldValueCaption;

//# sourceMappingURL=field-utils-a715deca.js.map