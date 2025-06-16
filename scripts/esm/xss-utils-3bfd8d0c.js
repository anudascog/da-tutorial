function filterProtocol(uri) {
    const isAbsolute = /^(https?|ftp|file|mailto|tel|sip):/i.test(uri);
    const isRelative = /^\//.test(uri);
    return isAbsolute || isRelative ? uri : '';
}

export { filterProtocol as f };

//# sourceMappingURL=xss-utils-3bfd8d0c.js.map