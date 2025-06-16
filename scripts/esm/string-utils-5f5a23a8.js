function regexEncode(value) {
    return value.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
function encodeForDomAttribute(str) {
    return str
        .split('')
        .map((ch) => (ch.match(/(\d|\w)+/g) ? ch : ch.charCodeAt(0)))
        .join('');
}

export { encodeForDomAttribute as e, regexEncode as r };

//# sourceMappingURL=string-utils-5f5a23a8.js.map