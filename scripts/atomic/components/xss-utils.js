function filterProtocol(uri) {
    const isAbsolute = /^(https?|ftp|file|mailto|tel|sip):/i.test(uri);
    const isRelative = /^\//.test(uri);
    return isAbsolute || isRelative ? uri : '';
}

export { filterProtocol as f };

//# sourceMappingURL=xss-utils.js.map