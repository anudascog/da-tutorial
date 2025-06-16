'use strict';

function regexEncode(value) {
    return value.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
function encodeForDomAttribute(str) {
    return str
        .split('')
        .map((ch) => (ch.match(/(\d|\w)+/g) ? ch : ch.charCodeAt(0)))
        .join('');
}

exports.encodeForDomAttribute = encodeForDomAttribute;
exports.regexEncode = regexEncode;

//# sourceMappingURL=string-utils-bdf08f8c.js.map