'use strict';

const utils = require('./utils-b6642872.js');

function hideEmptySection(element) {
    element.style.display = utils.containsVisualElement(element) ? '' : 'none';
}

exports.hideEmptySection = hideEmptySection;

//# sourceMappingURL=item-section-utils-66318831.js.map