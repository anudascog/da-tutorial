import { n as popperGenerator, o as eventListeners, q as popperOffsets, u as computeStyles, x as applyStyles } from './createPopper.js';

var defaultModifiers = [eventListeners, popperOffsets, computeStyles, applyStyles];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

export { createPopper as c };

//# sourceMappingURL=popper-lite.js.map