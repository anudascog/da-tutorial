import { buildInteractiveResult, ResultTemplatesHelpers } from '@coveo/headless';
import { r as readFromObject } from './object-utils.js';

/**
 * Binds the logging of document
 * @returns An unbind function for the events
 * @param engine A headless search engine instance.
 * @param result The result object
 * @param resultElement Parent result element
 * @param selector Optional. Css selector that selects all links to the document. Default: "a" tags with the clickUri as "href" parameter.
 */
function bindLogDocumentOpenOnResult(engine, result, resultElement, selector) {
    const interactiveResult = buildInteractiveResult(engine, {
        options: { result },
    });
    const eventsMap = {
        contextmenu: () => interactiveResult.select(),
        click: () => interactiveResult.select(),
        mouseup: () => interactiveResult.select(),
        mousedown: () => interactiveResult.select(),
        touchstart: () => interactiveResult.beginDelayedSelect(),
        touchend: () => interactiveResult.cancelPendingSelect(),
    };
    const elements = resultElement.querySelectorAll(selector || 'a');
    elements.forEach((element) => {
        Object.keys(eventsMap).forEach((key) => element.addEventListener(key, eventsMap[key]));
    });
    return () => {
        elements.forEach((element) => {
            Object.keys(eventsMap).forEach((key) => element.removeEventListener(key, eventsMap[key]));
        });
    };
}
function buildStringTemplateFromResult(template, result, bindings) {
    return template.replace(/\${(.*?)}/g, (value) => {
        const key = value.substring(2, value.length - 1);
        let newValue = readFromObject(result, key);
        if (!newValue && typeof window !== 'undefined') {
            newValue = readFromObject(window, key);
        }
        if (!newValue) {
            bindings.engine.logger.warn(`${key} used in the href template is undefined for this result: ${result.uniqueId} and could not be found in the window object.`);
            return '';
        }
        return newValue;
    });
}
function getStringValueFromResultOrNull(result, field) {
    const value = ResultTemplatesHelpers.getResultProperty(result, field);
    if (typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    return value;
}

export { buildStringTemplateFromResult as a, bindLogDocumentOpenOnResult as b, getStringValueFromResultOrNull as g };

//# sourceMappingURL=result-utils.js.map