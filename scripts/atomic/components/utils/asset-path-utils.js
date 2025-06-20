import { getResourceUrl } from './resource-url';
export function getAssetPath(path) {
    const resourceUrl = getResourceUrl();
    const baseUrl = resourceUrl !== undefined
        ? new URL('./', resourceUrl).href
        : new URL('./', window.document.baseURI).href;
    const assetUrl = new URL(path, baseUrl);
    return assetUrl.origin !== window.location.origin
        ? assetUrl.href
        : assetUrl.pathname;
}
export function parseAssetURL(url, assetPath = './assets') {
    const [, protocol, remainder] = url.match(/^([a-z]+):\/\/(.*?)(\.svg)?$/) || [];
    if (!protocol) {
        if (url.startsWith('./') || url.startsWith('../')) {
            return url;
        }
        return null;
    }
    if (protocol === 'http' || protocol === 'https') {
        return url;
    }
    if (protocol === 'assets') {
        return getAssetPath(`${assetPath}/${remainder}.svg`);
    }
    return null;
}
