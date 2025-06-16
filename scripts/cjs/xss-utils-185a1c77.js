'use strict';

function filterProtocol(uri) {
    const isAbsolute = /^(https?|ftp|file|mailto|tel|sip):/i.test(uri);
    const isRelative = /^\//.test(uri);
    return isAbsolute || isRelative ? uri : '';
}

exports.filterProtocol = filterProtocol;

//# sourceMappingURL=xss-utils-185a1c77.js.map