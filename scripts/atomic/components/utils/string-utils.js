export function regexEncode(value) {
    return value.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
export function encodeForDomAttribute(str) {
    return str
        .split('')
        .map((ch) => (ch.match(/(\d|\w)+/g) ? ch : ch.charCodeAt(0)))
        .join('');
}
