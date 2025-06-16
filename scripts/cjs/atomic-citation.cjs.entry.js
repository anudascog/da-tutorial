'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const itemLink = require('./item-link-3844789d.js');
const stencilHeading = require('./stencil-heading-2faee1f7.js');
const createPopper$1 = require('./createPopper-6b5a50b4.js');
require('./xss-utils-185a1c77.js');

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return createPopper$1.mergePaddingObject(typeof padding !== 'number' ? padding : createPopper$1.expandToHashMap(padding, createPopper$1.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = createPopper$1.getBasePlacement(state.placement);
  var axis = createPopper$1.getMainAxisFromPlacement(basePlacement);
  var isVertical = [createPopper$1.left, createPopper$1.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = createPopper$1.getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? createPopper$1.top : createPopper$1.left;
  var maxProp = axis === 'y' ? createPopper$1.bottom : createPopper$1.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = createPopper$1.getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = createPopper$1.within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!createPopper$1.contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? createPopper$1.placements : _options$allowedAutoP;
  var variation = createPopper$1.getVariation(placement);
  var placements = variation ? flipVariations ? createPopper$1.variationPlacements : createPopper$1.variationPlacements.filter(function (placement) {
    return createPopper$1.getVariation(placement) === variation;
  }) : createPopper$1.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = createPopper$1.detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[createPopper$1.getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (createPopper$1.getBasePlacement(placement) === createPopper$1.auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = createPopper$1.getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(createPopper$1.getBasePlacement(placement) === createPopper$1.auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = createPopper$1.getBasePlacement(placement);

    var isStartVariation = createPopper$1.getVariation(placement) === createPopper$1.start;
    var isVertical = [createPopper$1.top, createPopper$1.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = createPopper$1.detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? createPopper$1.right : createPopper$1.left : isStartVariation ? createPopper$1.bottom : createPopper$1.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [createPopper$1.top, createPopper$1.right, createPopper$1.bottom, createPopper$1.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = createPopper$1.detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = createPopper$1.detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = createPopper$1.getBasePlacement(placement);
  var invertDistance = [createPopper$1.left, createPopper$1.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [createPopper$1.left, createPopper$1.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = createPopper$1.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

var defaultModifiers = [createPopper$1.eventListeners, createPopper$1.popperOffsets, createPopper$1.computeStyles, createPopper$1.applyStyles, offset$1, flip$1, createPopper$1.preventOverflow, arrow$1, hide$1];
var createPopper = /*#__PURE__*/createPopper$1.popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const atomicCitationCss = "/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */\n@layer properties;\n@layer theme, base, components, utilities;\n@layer theme;\n@layer base {\n  *, ::after, ::before, ::backdrop, ::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html, :host {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, var(--atomic-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"));\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b, strong {\n    font-weight: bolder;\n  }\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub, sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n  sup {\n    top: -0.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol, ul, menu {\n    list-style: none;\n  }\n  img, svg, video, canvas, audio, iframe, embed, object {\n    display: block;\n    vertical-align: middle;\n  }\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n  button, input, select, optgroup, textarea, ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentcolor;\n    }\n    @supports (color: color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]), ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .\\@container {\n    container-type: inline-size;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .collapse {\n    visibility: collapse;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .relative {\n    position: relative;\n  }\n  .static {\n    position: static;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .-top-2 {\n    top: calc(0.25rem * -2);\n  }\n  .-top-4 {\n    top: calc(0.25rem * -4);\n  }\n  .top-0 {\n    top: calc(0.25rem * 0);\n  }\n  .top-1\\/2 {\n    top: calc(1/2 * 100%);\n  }\n  .top-6 {\n    top: calc(0.25rem * 6);\n  }\n  .top-\\[4px\\] {\n    top: 4px;\n  }\n  .top-full {\n    top: 100%;\n  }\n  .top-px {\n    top: 1px;\n  }\n  .-right-2 {\n    right: calc(0.25rem * -2);\n  }\n  .right-0 {\n    right: calc(0.25rem * 0);\n  }\n  .right-2 {\n    right: calc(0.25rem * 2);\n  }\n  .right-6 {\n    right: calc(0.25rem * 6);\n  }\n  .right-12 {\n    right: calc(0.25rem * 12);\n  }\n  .right-20 {\n    right: calc(0.25rem * 20);\n  }\n  .right-px {\n    right: 1px;\n  }\n  .bottom-0 {\n    bottom: calc(0.25rem * 0);\n  }\n  .bottom-1 {\n    bottom: calc(0.25rem * 1);\n  }\n  .bottom-2 {\n    bottom: calc(0.25rem * 2);\n  }\n  .bottom-px {\n    bottom: 1px;\n  }\n  .left-0 {\n    left: calc(0.25rem * 0);\n  }\n  .left-1 {\n    left: calc(0.25rem * 1);\n  }\n  .left-2 {\n    left: calc(0.25rem * 2);\n  }\n  .left-\\[15px\\] {\n    left: 15px;\n  }\n  .isolate {\n    isolation: isolate;\n  }\n  .z-0 {\n    z-index: 0;\n  }\n  .z-1 {\n    z-index: 1;\n  }\n  .z-10 {\n    z-index: 10;\n  }\n  .z-100 {\n    z-index: 100;\n  }\n  .z-9998 {\n    z-index: 9998;\n  }\n  .z-9999 {\n    z-index: 9999;\n  }\n  .order-last {\n    order: 9999;\n  }\n  .col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .container {\n    width: 100%;\n  }\n  @media (width >= 1024px) {\n    .container {\n      max-width: 1024px;\n    }\n  }\n  @media (width >= 40rem) {\n    .container {\n      max-width: 40rem;\n    }\n  }\n  @media (width >= 48rem) {\n    .container {\n      max-width: 48rem;\n    }\n  }\n  @media (width >= 64rem) {\n    .container {\n      max-width: 64rem;\n    }\n  }\n  @media (width >= 80rem) {\n    .container {\n      max-width: 80rem;\n    }\n  }\n  @media (width >= 96rem) {\n    .container {\n      max-width: 96rem;\n    }\n  }\n  .m-0 {\n    margin: calc(0.25rem * 0);\n  }\n  .m-2 {\n    margin: calc(0.25rem * 2);\n  }\n  .mx-0\\.5 {\n    margin-inline: calc(0.25rem * 0.5);\n  }\n  .mx-1 {\n    margin-inline: calc(0.25rem * 1);\n  }\n  .mx-6 {\n    margin-inline: calc(0.25rem * 6);\n  }\n  .mx-16 {\n    margin-inline: calc(0.25rem * 16);\n  }\n  .mx-auto {\n    margin-inline: auto;\n  }\n  .my-2 {\n    margin-block: calc(0.25rem * 2);\n  }\n  .my-3 {\n    margin-block: calc(0.25rem * 3);\n  }\n  .my-4 {\n    margin-block: calc(0.25rem * 4);\n  }\n  .my-6 {\n    margin-block: calc(0.25rem * 6);\n  }\n  .my-auto {\n    margin-block: auto;\n  }\n  .mt-0 {\n    margin-top: calc(0.25rem * 0);\n  }\n  .mt-1 {\n    margin-top: calc(0.25rem * 1);\n  }\n  .mt-1\\.5 {\n    margin-top: calc(0.25rem * 1.5);\n  }\n  .mt-2 {\n    margin-top: calc(0.25rem * 2);\n  }\n  .mt-2\\.5 {\n    margin-top: calc(0.25rem * 2.5);\n  }\n  .mt-3 {\n    margin-top: calc(0.25rem * 3);\n  }\n  .mt-4 {\n    margin-top: calc(0.25rem * 4);\n  }\n  .mt-6 {\n    margin-top: calc(0.25rem * 6);\n  }\n  .mt-7 {\n    margin-top: calc(0.25rem * 7);\n  }\n  .mt-8 {\n    margin-top: calc(0.25rem * 8);\n  }\n  .mt-10 {\n    margin-top: calc(0.25rem * 10);\n  }\n  .mt-px {\n    margin-top: 1px;\n  }\n  .mr-0 {\n    margin-right: calc(0.25rem * 0);\n  }\n  .mr-0\\.5 {\n    margin-right: calc(0.25rem * 0.5);\n  }\n  .mr-1 {\n    margin-right: calc(0.25rem * 1);\n  }\n  .mr-1\\.5 {\n    margin-right: calc(0.25rem * 1.5);\n  }\n  .mr-2 {\n    margin-right: calc(0.25rem * 2);\n  }\n  .mr-3 {\n    margin-right: calc(0.25rem * 3);\n  }\n  .mr-6 {\n    margin-right: calc(0.25rem * 6);\n  }\n  .mb-0 {\n    margin-bottom: calc(0.25rem * 0);\n  }\n  .mb-1 {\n    margin-bottom: calc(0.25rem * 1);\n  }\n  .mb-2 {\n    margin-bottom: calc(0.25rem * 2);\n  }\n  .mb-3 {\n    margin-bottom: calc(0.25rem * 3);\n  }\n  .mb-4 {\n    margin-bottom: calc(0.25rem * 4);\n  }\n  .mb-6 {\n    margin-bottom: calc(0.25rem * 6);\n  }\n  .ml-0\\.5 {\n    margin-left: calc(0.25rem * 0.5);\n  }\n  .ml-1 {\n    margin-left: calc(0.25rem * 1);\n  }\n  .ml-2 {\n    margin-left: calc(0.25rem * 2);\n  }\n  .ml-4 {\n    margin-left: calc(0.25rem * 4);\n  }\n  .ml-6 {\n    margin-left: calc(0.25rem * 6);\n  }\n  .ml-auto {\n    margin-left: auto;\n  }\n  .box-border {\n    box-sizing: border-box;\n  }\n  .box-content {\n    box-sizing: content-box;\n  }\n  .line-clamp-1 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n  }\n  .line-clamp-2 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .line-clamp-3 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n  }\n  .line-clamp-4 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n  }\n  .line-clamp-none {\n    overflow: visible;\n    display: block;\n    -webkit-box-orient: horizontal;\n    -webkit-line-clamp: unset;\n  }\n  .block {\n    display: block;\n  }\n  .contents {\n    display: contents;\n  }\n  .flex {\n    display: flex;\n  }\n  .grid {\n    display: grid;\n  }\n  .hidden {\n    display: none;\n  }\n  .inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .table {\n    display: table;\n  }\n  .aspect-square {\n    aspect-ratio: 1 / 1;\n  }\n  .size-\\[27px\\] {\n    width: 27px;\n    height: 27px;\n  }\n  .h-1 {\n    height: calc(0.25rem * 1);\n  }\n  .h-2 {\n    height: calc(0.25rem * 2);\n  }\n  .h-2\\.5 {\n    height: calc(0.25rem * 2.5);\n  }\n  .h-3 {\n    height: calc(0.25rem * 3);\n  }\n  .h-4 {\n    height: calc(0.25rem * 4);\n  }\n  .h-5 {\n    height: calc(0.25rem * 5);\n  }\n  .h-5\\/6 {\n    height: calc(5/6 * 100%);\n  }\n  .h-6 {\n    height: calc(0.25rem * 6);\n  }\n  .h-7 {\n    height: calc(0.25rem * 7);\n  }\n  .h-8 {\n    height: calc(0.25rem * 8);\n  }\n  .h-9 {\n    height: calc(0.25rem * 9);\n  }\n  .h-10 {\n    height: calc(0.25rem * 10);\n  }\n  .h-12 {\n    height: calc(0.25rem * 12);\n  }\n  .h-\\[2\\.6rem\\] {\n    height: 2.6rem;\n  }\n  .h-\\[9px\\] {\n    height: 9px;\n  }\n  .h-full {\n    height: 100%;\n  }\n  .max-h-96 {\n    max-height: calc(0.25rem * 96);\n  }\n  .min-h-10 {\n    min-height: calc(0.25rem * 10);\n  }\n  .w-0\\.5 {\n    width: calc(0.25rem * 0.5);\n  }\n  .w-1 {\n    width: calc(0.25rem * 1);\n  }\n  .w-1\\/2 {\n    width: calc(1/2 * 100%);\n  }\n  .w-2 {\n    width: calc(0.25rem * 2);\n  }\n  .w-2\\.5 {\n    width: calc(0.25rem * 2.5);\n  }\n  .w-3 {\n    width: calc(0.25rem * 3);\n  }\n  .w-3\\.5 {\n    width: calc(0.25rem * 3.5);\n  }\n  .w-3\\/5 {\n    width: calc(3/5 * 100%);\n  }\n  .w-4 {\n    width: calc(0.25rem * 4);\n  }\n  .w-5 {\n    width: calc(0.25rem * 5);\n  }\n  .w-5\\/6 {\n    width: calc(5/6 * 100%);\n  }\n  .w-6 {\n    width: calc(0.25rem * 6);\n  }\n  .w-7 {\n    width: calc(0.25rem * 7);\n  }\n  .w-8 {\n    width: calc(0.25rem * 8);\n  }\n  .w-9 {\n    width: calc(0.25rem * 9);\n  }\n  .w-10 {\n    width: calc(0.25rem * 10);\n  }\n  .w-12 {\n    width: calc(0.25rem * 12);\n  }\n  .w-20 {\n    width: calc(0.25rem * 20);\n  }\n  .w-28 {\n    width: calc(0.25rem * 28);\n  }\n  .w-32 {\n    width: calc(0.25rem * 32);\n  }\n  .w-44 {\n    width: calc(0.25rem * 44);\n  }\n  .w-48 {\n    width: calc(0.25rem * 48);\n  }\n  .w-60 {\n    width: calc(0.25rem * 60);\n  }\n  .w-72 {\n    width: calc(0.25rem * 72);\n  }\n  .w-100 {\n    width: calc(0.25rem * 100);\n  }\n  .w-\\[2\\.6rem\\] {\n    width: 2.6rem;\n  }\n  .w-auto {\n    width: auto;\n  }\n  .w-fit {\n    width: fit-content;\n  }\n  .w-full {\n    width: 100%;\n  }\n  .w-max {\n    width: max-content;\n  }\n  .max-w-4\\/5 {\n    max-width: calc(4/5 * 100%);\n  }\n  .max-w-60 {\n    max-width: calc(0.25rem * 60);\n  }\n  .max-w-\\[30ch\\] {\n    max-width: 30ch;\n  }\n  .max-w-full {\n    max-width: 100%;\n  }\n  .max-w-lg {\n    max-width: 32rem;\n  }\n  .max-w-max {\n    max-width: max-content;\n  }\n  .min-w-0 {\n    min-width: calc(0.25rem * 0);\n  }\n  .min-w-10 {\n    min-width: calc(0.25rem * 10);\n  }\n  .min-w-20 {\n    min-width: calc(0.25rem * 20);\n  }\n  .min-w-24 {\n    min-width: calc(0.25rem * 24);\n  }\n  .min-w-full {\n    min-width: 100%;\n  }\n  .flex-1 {\n    flex: 1;\n  }\n  .flex-none {\n    flex: none;\n  }\n  .flex-shrink {\n    flex-shrink: 1;\n  }\n  .shrink-0 {\n    flex-shrink: 0;\n  }\n  .flex-grow {\n    flex-grow: 1;\n  }\n  .grow {\n    flex-grow: 1;\n  }\n  .basis-1\\/2 {\n    flex-basis: calc(1/2 * 100%);\n  }\n  .basis-8 {\n    flex-basis: calc(0.25rem * 8);\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .-translate-x-1\\/2 {\n    --tw-translate-x: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-1\\/2 {\n    --tw-translate-x: calc(1/2 * 100%);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1\\/2 {\n    --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .scale-75 {\n    --tw-scale-x: 75%;\n    --tw-scale-y: 75%;\n    --tw-scale-z: 75%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-100 {\n    --tw-scale-x: 100%;\n    --tw-scale-y: 100%;\n    --tw-scale-z: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .rotate-180 {\n    rotate: 180deg;\n  }\n  .transform {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .animate-pulse {\n    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  }\n  .animate-spin {\n    animation: spin 1s linear infinite;\n  }\n  .cursor-\\[inherit\\] {\n    cursor: inherit;\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .resize {\n    resize: both;\n  }\n  .resize-none {\n    resize: none;\n  }\n  .list-outside {\n    list-style-position: outside;\n  }\n  .list-decimal {\n    list-style-type: decimal;\n  }\n  .list-disc {\n    list-style-type: disc;\n  }\n  .list-none {\n    list-style-type: none;\n  }\n  .appearance-none {\n    appearance: none;\n  }\n  .grid-cols-\\[min-content_1fr\\] {\n    grid-template-columns: min-content 1fr;\n  }\n  .grid-cols-\\[min-content_auto\\] {\n    grid-template-columns: min-content auto;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .place-items-center {\n    place-items: center;\n  }\n  .content-center {\n    align-content: center;\n  }\n  .items-baseline {\n    align-items: baseline;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .gap-0\\.5 {\n    gap: calc(0.25rem * 0.5);\n  }\n  .gap-1 {\n    gap: calc(0.25rem * 1);\n  }\n  .gap-2 {\n    gap: calc(0.25rem * 2);\n  }\n  .gap-3 {\n    gap: calc(0.25rem * 3);\n  }\n  .gap-4 {\n    gap: calc(0.25rem * 4);\n  }\n  .gap-8 {\n    gap: calc(0.25rem * 8);\n  }\n  .gap-x-1\\.5 {\n    column-gap: calc(0.25rem * 1.5);\n  }\n  .gap-x-2 {\n    column-gap: calc(0.25rem * 2);\n  }\n  .gap-x-4 {\n    column-gap: calc(0.25rem * 4);\n  }\n  :where(.space-x-1\\.5 > :not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(0.25rem * 1.5) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(0.25rem * 1.5) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .gap-y-0\\.5 {\n    row-gap: calc(0.25rem * 0.5);\n  }\n  :where(.divide-y > :not(:last-child)) {\n    --tw-divide-y-reverse: 0;\n    border-bottom-style: var(--tw-border-style);\n    border-top-style: var(--tw-border-style);\n    border-top-width: calc(1px * var(--tw-divide-y-reverse));\n    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  }\n  :where(.divide-neutral > :not(:last-child)) {\n    border-color: var(--atomic-neutral);\n  }\n  .self-center {\n    align-self: center;\n  }\n  .self-start {\n    align-self: flex-start;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .overflow-auto {\n    overflow: auto;\n  }\n  .overflow-hidden {\n    overflow: hidden;\n  }\n  .overflow-x-auto {\n    overflow-x: auto;\n  }\n  .overflow-x-clip {\n    overflow-x: clip;\n  }\n  .overflow-x-scroll {\n    overflow-x: scroll;\n  }\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n  .overflow-y-visible {\n    overflow-y: visible;\n  }\n  .scroll-smooth {\n    scroll-behavior: smooth;\n  }\n  .rounded {\n    border-radius: var(--atomic-border-radius);\n  }\n  .rounded-full {\n    border-radius: calc(infinity * 1px);\n  }\n  .rounded-lg {\n    border-radius: var(--atomic-border-radius-lg);\n  }\n  .rounded-md {\n    border-radius: var(--atomic-border-radius-md);\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: var(--atomic-border-radius);\n  }\n  .rounded-xl {\n    border-radius: var(--atomic-border-radius-xl);\n  }\n  .rounded-tl-none {\n    border-top-left-radius: 0;\n  }\n  .rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-0 {\n    border-style: var(--tw-border-style);\n    border-width: 0px;\n  }\n  .border-t {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n  .border-r {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-l {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n  .border-solid {\n    --tw-border-style: solid;\n    border-style: solid;\n  }\n  .border-neutral {\n    border-color: var(--atomic-neutral);\n  }\n  .border-neutral-dark {\n    border-color: var(--atomic-neutral-dark);\n  }\n  .border-neutral-dim {\n    border-color: var(--atomic-neutral-dim);\n  }\n  .border-primary {\n    border-color: var(--atomic-primary);\n  }\n  .border-primary-light {\n    border-color: var(--atomic-primary-light);\n  }\n  .border-t-neutral {\n    border-top-color: var(--atomic-neutral);\n  }\n  .border-b-neutral {\n    border-bottom-color: var(--atomic-neutral);\n  }\n  .border-b-neutral-dim {\n    border-bottom-color: var(--atomic-neutral-dim);\n  }\n  .border-l-neutral {\n    border-left-color: var(--atomic-neutral);\n  }\n  .border-l-neutral-dim {\n    border-left-color: var(--atomic-neutral-dim);\n  }\n  .bg-\\[\\#F1F2FF\\] {\n    background-color: #F1F2FF;\n  }\n  .bg-background {\n    background-color: var(--atomic-background);\n  }\n  .bg-error {\n    background-color: var(--atomic-error);\n  }\n  .bg-neutral {\n    background-color: var(--atomic-neutral);\n  }\n  .bg-neutral-dark {\n    background-color: var(--atomic-neutral-dark);\n  }\n  .bg-neutral-light {\n    background-color: var(--atomic-neutral-light);\n  }\n  .bg-primary {\n    background-color: var(--atomic-primary);\n  }\n  .bg-primary-background {\n    background-color: var(--atomic-primary-background);\n  }\n  .bg-transparent {\n    background-color: transparent;\n  }\n  .bg-white {\n    background-color: #fff;\n  }\n  .bg-linear-to-l {\n    --tw-gradient-position: to left;\n  }\n  @supports (background-image: linear-gradient(in lab, red, red)) {\n    .bg-linear-to-l {\n      --tw-gradient-position: to left in oklab;\n    }\n  }\n  .bg-linear-to-l {\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-linear-to-r {\n    --tw-gradient-position: to right;\n  }\n  @supports (background-image: linear-gradient(in lab, red, red)) {\n    .bg-linear-to-r {\n      --tw-gradient-position: to right in oklab;\n    }\n  }\n  .bg-linear-to-r {\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .from-background\\/60 {\n    --tw-gradient-from: color-mix(in srgb, #ffffff 60%, transparent);\n  }\n  @supports (color: color-mix(in lab, red, red)) {\n    .from-background\\/60 {\n      --tw-gradient-from: color-mix(in oklab, var(--atomic-background) 60%, transparent);\n    }\n  }\n  .from-background\\/60 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .fill-current {\n    fill: currentcolor;\n  }\n  .stroke-\\[1\\.25\\] {\n    stroke-width: 1.25;\n  }\n  .p-0 {\n    padding: calc(0.25rem * 0);\n  }\n  .p-1 {\n    padding: calc(0.25rem * 1);\n  }\n  .p-2 {\n    padding: calc(0.25rem * 2);\n  }\n  .p-2\\.5 {\n    padding: calc(0.25rem * 2.5);\n  }\n  .p-3 {\n    padding: calc(0.25rem * 3);\n  }\n  .p-4 {\n    padding: calc(0.25rem * 4);\n  }\n  .p-6 {\n    padding: calc(0.25rem * 6);\n  }\n  .p-7 {\n    padding: calc(0.25rem * 7);\n  }\n  .p-8 {\n    padding: calc(0.25rem * 8);\n  }\n  .px-1 {\n    padding-inline: calc(0.25rem * 1);\n  }\n  .px-2 {\n    padding-inline: calc(0.25rem * 2);\n  }\n  .px-2\\.5 {\n    padding-inline: calc(0.25rem * 2.5);\n  }\n  .px-3 {\n    padding-inline: calc(0.25rem * 3);\n  }\n  .px-4 {\n    padding-inline: calc(0.25rem * 4);\n  }\n  .px-6 {\n    padding-inline: calc(0.25rem * 6);\n  }\n  .px-9 {\n    padding-inline: calc(0.25rem * 9);\n  }\n  .py-0\\.5 {\n    padding-block: calc(0.25rem * 0.5);\n  }\n  .py-1 {\n    padding-block: calc(0.25rem * 1);\n  }\n  .py-1\\.5 {\n    padding-block: calc(0.25rem * 1.5);\n  }\n  .py-2 {\n    padding-block: calc(0.25rem * 2);\n  }\n  .py-2\\.5 {\n    padding-block: calc(0.25rem * 2.5);\n  }\n  .py-3 {\n    padding-block: calc(0.25rem * 3);\n  }\n  .py-3\\.5 {\n    padding-block: calc(0.25rem * 3.5);\n  }\n  .py-4 {\n    padding-block: calc(0.25rem * 4);\n  }\n  .py-5 {\n    padding-block: calc(0.25rem * 5);\n  }\n  .pt-0\\.5 {\n    padding-top: calc(0.25rem * 0.5);\n  }\n  .pt-8 {\n    padding-top: calc(0.25rem * 8);\n  }\n  .pr-2 {\n    padding-right: calc(0.25rem * 2);\n  }\n  .pr-6 {\n    padding-right: calc(0.25rem * 6);\n  }\n  .pr-24 {\n    padding-right: calc(0.25rem * 24);\n  }\n  .pb-1 {\n    padding-bottom: calc(0.25rem * 1);\n  }\n  .pb-3 {\n    padding-bottom: calc(0.25rem * 3);\n  }\n  .pb-4 {\n    padding-bottom: calc(0.25rem * 4);\n  }\n  .pb-6 {\n    padding-bottom: calc(0.25rem * 6);\n  }\n  .pl-0 {\n    padding-left: calc(0.25rem * 0);\n  }\n  .pl-1 {\n    padding-left: calc(0.25rem * 1);\n  }\n  .pl-3 {\n    padding-left: calc(0.25rem * 3);\n  }\n  .pl-7 {\n    padding-left: calc(0.25rem * 7);\n  }\n  .pl-9 {\n    padding-left: calc(0.25rem * 9);\n  }\n  .pl-10 {\n    padding-left: calc(0.25rem * 10);\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-left {\n    text-align: left;\n  }\n  .align-baseline {\n    vertical-align: baseline;\n  }\n  .align-bottom {\n    vertical-align: bottom;\n  }\n  .align-middle {\n    vertical-align: middle;\n  }\n  .font-sans {\n    font-family: var(--atomic-font-family);\n  }\n  .text-2xl {\n    font-size: var(--atomic-text-2xl);\n    line-height: var(--tw-leading, calc(2 / 1.5));\n  }\n  .text-base {\n    font-size: var(--atomic-text-base);\n    line-height: var(--tw-leading, calc(1.5 / 1));\n  }\n  .text-lg {\n    font-size: var(--atomic-text-lg);\n    line-height: var(--tw-leading, calc(1.75 / 1.125));\n  }\n  .text-sm {\n    font-size: var(--atomic-text-sm);\n    line-height: var(--tw-leading, calc(1.25 / 0.875));\n  }\n  .text-xl {\n    font-size: var(--atomic-text-xl);\n    line-height: var(--tw-leading, calc(1.75 / 1.25));\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    line-height: var(--tw-leading, calc(1 / 0.75));\n  }\n  .text-xs\\/\\[1rem\\] {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n  .leading-4 {\n    --tw-leading: calc(0.25rem * 4);\n    line-height: calc(0.25rem * 4);\n  }\n  .leading-5 {\n    --tw-leading: calc(0.25rem * 5);\n    line-height: calc(0.25rem * 5);\n  }\n  .leading-6 {\n    --tw-leading: calc(0.25rem * 6);\n    line-height: calc(0.25rem * 6);\n  }\n  .leading-8 {\n    --tw-leading: calc(0.25rem * 8);\n    line-height: calc(0.25rem * 8);\n  }\n  .leading-10 {\n    --tw-leading: calc(0.25rem * 10);\n    line-height: calc(0.25rem * 10);\n  }\n  .leading-\\[calc\\(1\\/\\.75\\)\\] {\n    --tw-leading: calc(1 / .75);\n    line-height: calc(1 / .75);\n  }\n  .font-bold {\n    --tw-font-weight: var(--atomic-font-bold);\n    font-weight: var(--atomic-font-bold);\n  }\n  .font-light {\n    --tw-font-weight: 300;\n    font-weight: 300;\n  }\n  .font-medium {\n    --tw-font-weight: 500;\n    font-weight: 500;\n  }\n  .font-normal {\n    --tw-font-weight: var(--atomic-font-normal);\n    font-weight: var(--atomic-font-normal);\n  }\n  .font-semibold {\n    --tw-font-weight: 600;\n    font-weight: 600;\n  }\n  .break-words {\n    overflow-wrap: break-word;\n  }\n  .break-all {\n    word-break: break-all;\n  }\n  .break-keep {\n    word-break: keep-all;\n  }\n  .whitespace-normal {\n    white-space: normal;\n  }\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n  .whitespace-pre-wrap {\n    white-space: pre-wrap;\n  }\n  .text-\\[\\#54698D\\] {\n    color: #54698D;\n  }\n  .text-\\[inherit\\] {\n    color: inherit;\n  }\n  .text-black {\n    color: #000;\n  }\n  .text-error {\n    color: var(--atomic-error);\n  }\n  .text-inline-code {\n    color: var(--atomic-inline-code);\n  }\n  .text-neutral {\n    color: var(--atomic-neutral);\n  }\n  .text-neutral-dark {\n    color: var(--atomic-neutral-dark);\n  }\n  .text-on-background {\n    color: var(--atomic-on-background);\n  }\n  .text-on-primary {\n    color: var(--atomic-on-primary);\n  }\n  .text-primary {\n    color: var(--atomic-primary);\n  }\n  .text-primary-light {\n    color: var(--atomic-primary-light);\n  }\n  .text-success {\n    color: var(--atomic-success);\n  }\n  .text-transparent {\n    color: transparent;\n  }\n  .capitalize {\n    text-transform: capitalize;\n  }\n  .lowercase {\n    text-transform: lowercase;\n  }\n  .italic {\n    font-style: italic;\n  }\n  .line-through {\n    text-decoration-line: line-through;\n  }\n  .placeholder-neutral-dark::placeholder {\n    color: var(--atomic-neutral-dark);\n  }\n  .opacity-0 {\n    opacity: 0%;\n  }\n  .opacity-50 {\n    opacity: 50%;\n  }\n  .opacity-80 {\n    opacity: 80%;\n  }\n  .shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-inner-primary {\n    --tw-shadow: inset 0 0 0 1px var(--tw-shadow-color, var(--atomic-primary));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-lg {\n    --tw-shadow: 0px 2px 8px var(--tw-shadow-color, rgba(229, 232, 232, 0.75));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-t-lg {\n    --tw-shadow: 0px -2px 8px var(--tw-shadow-color, rgba(229, 232, 232, 0.75));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-1 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-3 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-primary {\n    --tw-ring-color: var(--atomic-primary);\n  }\n  .ring-primary-light {\n    --tw-ring-color: var(--atomic-primary-light);\n  }\n  .ring-ring-primary {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .outline-error {\n    outline-color: var(--atomic-error);\n  }\n  .outline-neutral {\n    outline-color: var(--atomic-neutral);\n  }\n  .outline-primary {\n    outline-color: var(--atomic-primary);\n  }\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));\n    transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));\n  }\n  .transition-\\[visibility\\] {\n    transition-property: visibility;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));\n    transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));\n  }\n  .transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));\n    transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));\n  }\n  .transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));\n    transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));\n  }\n  .duration-200 {\n    --tw-duration: 200ms;\n    transition-duration: 200ms;\n  }\n  .duration-300 {\n    --tw-duration: 300ms;\n    transition-duration: 300ms;\n  }\n  .ease-in-out {\n    --tw-ease: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  @media (hover: hover) {\n    .group-hover\\:visible:is(:where(.group):hover *) {\n      visibility: visible;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-error:is(:where(.group):hover *) {\n      color: var(--atomic-error);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-primary:is(:where(.group):hover *) {\n      color: var(--atomic-primary);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-primary-light:is(:where(.group):hover *) {\n      color: var(--atomic-primary-light);\n    }\n  }\n  .group-focus\\:text-primary:is(:where(.group):focus *) {\n    color: var(--atomic-primary);\n  }\n  .group-focus\\:text-primary-light:is(:where(.group):focus *) {\n    color: var(--atomic-primary-light);\n  }\n  .group-focus-visible\\:text-error:is(:where(.group):focus-visible *) {\n    color: var(--atomic-error);\n  }\n  .group-focus-visible\\:text-primary:is(:where(.group):focus-visible *) {\n    color: var(--atomic-primary);\n  }\n  @media (hover: hover) {\n    .peer-hover\\:text-error:is(:where(.peer):hover ~ *) {\n      color: var(--atomic-error);\n    }\n  }\n  .after\\:absolute::after {\n    content: var(--tw-content);\n    position: absolute;\n  }\n  .after\\:-bottom-0\\.5::after {\n    content: var(--tw-content);\n    bottom: calc(0.25rem * -0.5);\n  }\n  .after\\:block::after {\n    content: var(--tw-content);\n    display: block;\n  }\n  .after\\:h-1::after {\n    content: var(--tw-content);\n    height: calc(0.25rem * 1);\n  }\n  .after\\:w-full::after {\n    content: var(--tw-content);\n    width: 100%;\n  }\n  .after\\:rounded::after {\n    content: var(--tw-content);\n    border-radius: var(--atomic-border-radius);\n  }\n  .after\\:bg-primary::after {\n    content: var(--tw-content);\n    background-color: var(--atomic-primary);\n  }\n  .focus-within\\:border-disabled:focus-within {\n    border-color: var(--atomic-disabled);\n  }\n  .focus-within\\:border-primary:focus-within {\n    border-color: var(--atomic-primary);\n  }\n  .focus-within\\:ring-3:focus-within {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .focus-within\\:ring-neutral:focus-within {\n    --tw-ring-color: var(--atomic-neutral);\n  }\n  .focus-within\\:ring-ring-primary:focus-within {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  @media (hover: hover) {\n    .hover\\:border:hover {\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-error:hover {\n      border-color: var(--atomic-error);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-primary-light:hover {\n      border-color: var(--atomic-primary-light);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-error:hover {\n      background-color: var(--atomic-error);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-neutral-light:hover {\n      background-color: var(--atomic-neutral-light);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-primary-light:hover {\n      background-color: var(--atomic-primary-light);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-transparent:hover {\n      background-color: transparent;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:fill-white:hover {\n      fill: #fff;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-primary-light:hover {\n      color: var(--atomic-primary-light);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:underline:hover {\n      text-decoration-line: underline;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:opacity-100:hover {\n      opacity: 100%;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-sm:hover {\n      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus\\:opacity-100:focus {\n    opacity: 100%;\n  }\n  .focus\\:outline-hidden:focus {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  @media (forced-colors: active) {\n    .focus\\:outline-hidden:focus {\n      outline: 2px solid transparent;\n      outline-offset: 2px;\n    }\n  }\n  .focus-visible\\:border:focus-visible {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .focus-visible\\:border-error:focus-visible {\n    border-color: var(--atomic-error);\n  }\n  .focus-visible\\:border-primary:focus-visible {\n    border-color: var(--atomic-primary);\n  }\n  .focus-visible\\:border-primary-light:focus-visible {\n    border-color: var(--atomic-primary-light);\n  }\n  .focus-visible\\:bg-error:focus-visible {\n    background-color: var(--atomic-error);\n  }\n  .focus-visible\\:bg-neutral-light:focus-visible {\n    background-color: var(--atomic-neutral-light);\n  }\n  .focus-visible\\:bg-primary-light:focus-visible {\n    background-color: var(--atomic-primary-light);\n  }\n  .focus-visible\\:text-primary-light:focus-visible {\n    color: var(--atomic-primary-light);\n  }\n  .focus-visible\\:underline:focus-visible {\n    text-decoration-line: underline;\n  }\n  .focus-visible\\:ring-2:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .focus-visible\\:outline-none:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  @media (width >= 40rem) {\n    .sm\\:px-6 {\n      padding-inline: calc(0.25rem * 6);\n    }\n  }\n  .\\[part\\=\\\"breadcrumb-button\\\"\\]\\:visible:is(part=\"breadcrumb-button\") {\n    visibility: visible;\n  }\n}\n@layer theme, base, components, utilities;\n@layer components {\n  .input-primary {\n    border-radius: var(--atomic-border-radius);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n  }\n  @media (hover: hover) {\n    .input-primary:hover {\n      border-color: var(--atomic-primary-light);\n    }\n  }\n  .input-primary:focus-visible {\n    border-color: var(--atomic-primary);\n  }\n  .input-primary:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .input-primary:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .input-primary:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-radio {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  .btn-radio::before {\n    content: var(--tw-content);\n    --tw-content: attr(value);\n    content: var(--tw-content);\n  }\n  .btn-primary {\n    border-radius: var(--atomic-border-radius);\n    background-color: var(--atomic-primary);\n    color: var(--atomic-on-primary);\n  }\n  @media (hover: hover) {\n    .btn-primary:hover {\n      background-color: var(--atomic-primary-light);\n    }\n  }\n  .btn-primary:focus-visible {\n    background-color: var(--atomic-primary-light);\n  }\n  .btn-primary:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .btn-primary:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .btn-primary:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-primary:disabled {\n    cursor: not-allowed;\n  }\n  .btn-primary:disabled {\n    background-color: var(--atomic-disabled);\n  }\n  .btn-outline-primary {\n    border-radius: var(--atomic-border-radius);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n    color: var(--atomic-primary);\n  }\n  @media (hover: hover) {\n    .btn-outline-primary:hover {\n      border-color: var(--atomic-primary-light);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-primary:hover {\n      color: var(--atomic-primary-light);\n    }\n  }\n  .btn-outline-primary:focus-visible {\n    border-color: var(--atomic-primary);\n  }\n  .btn-outline-primary:focus-visible {\n    color: var(--atomic-primary);\n  }\n  .btn-outline-primary:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .btn-outline-primary:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .btn-outline-primary:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-outline-primary:disabled {\n    cursor: not-allowed;\n  }\n  .btn-outline-primary:disabled {\n    border-color: var(--atomic-neutral);\n  }\n  .btn-outline-primary:disabled {\n    color: var(--atomic-neutral);\n  }\n  .btn-text-primary {\n    border-radius: var(--atomic-border-radius);\n    background-color: var(--atomic-background);\n    color: var(--atomic-primary);\n  }\n  @media (hover: hover) {\n    .btn-text-primary:hover {\n      background-color: var(--atomic-neutral-light);\n    }\n  }\n  .btn-text-primary:focus-visible {\n    background-color: var(--atomic-neutral-light);\n  }\n  .btn-text-primary:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-outline-neutral {\n    border-radius: var(--atomic-border-radius);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-outline-neutral:hover {\n      border-color: var(--atomic-primary);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-neutral:hover {\n      color: var(--atomic-primary);\n    }\n  }\n  .btn-outline-neutral:focus-visible {\n    border-color: var(--atomic-primary);\n  }\n  .btn-outline-neutral:focus-visible {\n    color: var(--atomic-primary);\n  }\n  .btn-outline-neutral:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .btn-outline-neutral:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .btn-outline-neutral:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-outline-neutral:disabled {\n    cursor: not-allowed;\n  }\n  .btn-outline-neutral:disabled {\n    border-color: var(--atomic-neutral);\n  }\n  .btn-outline-neutral:disabled {\n    color: var(--atomic-on-background);\n  }\n  .btn-outline-neutral:disabled {\n    opacity: 50%;\n  }\n  .btn-outline-bg-neutral {\n    border-radius: var(--atomic-border-radius);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-outline-bg-neutral:hover {\n      border-color: var(--atomic-primary);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-bg-neutral:hover {\n      background-color: var(--atomic-neutral-light);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-bg-neutral:hover {\n      color: var(--atomic-primary);\n    }\n  }\n  .btn-outline-bg-neutral:focus-visible {\n    border-color: var(--atomic-primary);\n  }\n  .btn-outline-bg-neutral:focus-visible {\n    background-color: var(--atomic-neutral-light);\n  }\n  .btn-outline-bg-neutral:focus-visible {\n    color: var(--atomic-primary);\n  }\n  .btn-outline-bg-neutral:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .btn-outline-bg-neutral:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .btn-outline-bg-neutral:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-outline-bg-neutral:disabled {\n    cursor: not-allowed;\n  }\n  .btn-outline-bg-neutral:disabled {\n    border-color: var(--atomic-neutral);\n  }\n  .btn-outline-bg-neutral:disabled {\n    color: var(--atomic-on-background);\n  }\n  .btn-outline-bg-neutral:disabled {\n    opacity: 50%;\n  }\n  .btn-outline-bg-error {\n    border-radius: var(--atomic-border-radius);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-outline-bg-error:hover {\n      border-color: var(--atomic-primary);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-bg-error:hover {\n      background-color: var(--atomic-neutral-light);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-bg-error:hover {\n      color: var(--atomic-primary);\n    }\n  }\n  .btn-outline-bg-error:focus-visible {\n    border-color: var(--atomic-primary);\n  }\n  .btn-outline-bg-error:focus-visible {\n    background-color: var(--atomic-neutral-light);\n  }\n  .btn-outline-bg-error:focus-visible {\n    color: var(--atomic-primary);\n  }\n  .btn-outline-bg-error:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .btn-outline-bg-error:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .btn-outline-bg-error:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-outline-bg-error:disabled {\n    cursor: not-allowed;\n  }\n  .btn-outline-bg-error:disabled {\n    border-color: var(--atomic-neutral);\n  }\n  .btn-outline-bg-error:disabled {\n    color: var(--atomic-on-background);\n  }\n  .btn-outline-bg-error:disabled {\n    opacity: 50%;\n  }\n  .btn-outline-error {\n    border-radius: var(--atomic-border-radius);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-outline-error:hover {\n      border-color: var(--atomic-error);\n    }\n  }\n  @media (hover: hover) {\n    .btn-outline-error:hover {\n      color: var(--atomic-error);\n    }\n  }\n  .btn-outline-error:focus-visible {\n    border-color: var(--atomic-error);\n  }\n  .btn-outline-error:focus-visible {\n    color: var(--atomic-error);\n  }\n  .btn-outline-error:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .btn-outline-error:focus-visible {\n    --tw-ring-color: var(--atomic-ring-primary);\n  }\n  .btn-outline-error:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-outline-error:disabled {\n    cursor: not-allowed;\n  }\n  .btn-outline-error:disabled {\n    border-color: var(--atomic-neutral);\n  }\n  .btn-outline-error:disabled {\n    color: var(--atomic-on-background);\n  }\n  .btn-outline-error:disabled {\n    opacity: 50%;\n  }\n  .btn-text-neutral {\n    border-radius: var(--atomic-border-radius);\n    background-color: var(--atomic-background);\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-text-neutral:hover {\n      background-color: var(--atomic-neutral-light);\n    }\n  }\n  @media (hover: hover) {\n    .btn-text-neutral:hover {\n      color: var(--atomic-primary);\n    }\n  }\n  .btn-text-neutral:focus-visible {\n    background-color: var(--atomic-neutral-light);\n  }\n  .btn-text-neutral:focus-visible {\n    color: var(--atomic-primary);\n  }\n  .btn-text-neutral:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-text-transparent {\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-text-transparent:hover {\n      color: var(--atomic-primary-light);\n    }\n  }\n  .btn-text-transparent:focus-visible {\n    color: var(--atomic-primary-light);\n  }\n  .btn-square-neutral {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--atomic-neutral);\n    background-color: var(--atomic-background);\n    color: var(--atomic-on-background);\n  }\n  @media (hover: hover) {\n    .btn-square-neutral:hover {\n      background-color: var(--atomic-neutral-light);\n    }\n  }\n  .btn-square-neutral:focus-visible {\n    background-color: var(--atomic-neutral-light);\n  }\n  .btn-square-neutral:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .btn-page {\n    display: grid;\n    height: calc(0.25rem * 10);\n    width: calc(0.25rem * 10);\n    place-items: center;\n    border-style: var(--tw-border-style);\n    border-width: 0px;\n    font-size: var(--atomic-text-lg);\n    line-height: var(--tw-leading, calc(1.75 / 1.125));\n  }\n  @media (hover: hover) {\n    .btn-page:hover {\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .btn-page:focus-visible {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .btn-page.selected {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n    border-color: var(--atomic-primary);\n    --tw-font-weight: var(--atomic-font-bold);\n    font-weight: var(--atomic-font-bold);\n  }\n}\n@layer base {\n  *, ::after, ::before, ::backdrop, ::file-selector-button {\n    border-color: oklch(0.928 0.006 264.531);\n  }\n  :host {\n    display: block;\n  }\n  :host, button, input, select {\n    font-family: var(--atomic-font-family);\n    font-size: var(--atomic-text-base);\n    line-height: var(--tw-leading, calc(1.5 / 1));\n    --tw-font-weight: var(--atomic-font-normal);\n    font-weight: var(--atomic-font-normal);\n  }\n  button {\n    cursor: pointer;\n  }\n  :host(.atomic-hidden) {\n    display: none;\n  }\n  .ripple {\n    position: absolute;\n    pointer-events: none;\n    transform: scale(0);\n    border-radius: 50%;\n    animation: ripple var(--animation-duration) linear;\n  }\n  .ripple-relative {\n    position: relative;\n  }\n  .ripple-parent {\n    overflow: hidden;\n  }\n  @keyframes ripple {\n    to {\n      transform: scale(4);\n      opacity: 0;\n    }\n  }\n}\n@keyframes scaleUp {\n  0% {\n    transform: scale(0.7) translateY(150vh);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1) translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  0% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(150vh);\n    opacity: 0.7;\n  }\n}\n[part='citation'] {\n  --height: 2.2em;\n  --index-height: 1.1em;\n  --max-citation-width: 400px;\n  max-width: var(--max-citation-width);\n  height: var(--height);\n}\n[part='citation-popover'] {\n  --popover-width: 350px;\n  width: var(--popover-width);\n}\n[part='citation-popover'] p {\n  --font-size: var(--atomic-text-sm);\n  font-size: var(--font-size);\n  --line-height: calc(var(--font-size) * var(--atomic-line-height-ratio));\n  line-height: var(--line-height);\n}\n@property --tw-translate-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-translate-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-translate-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-scale-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-scale-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-scale-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-space-x-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-divide-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-gradient-position {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-gradient-from {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-via {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-to {\n  syntax: \"<color>\";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-stops {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-gradient-via-stops {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-gradient-from-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 0%;\n}\n@property --tw-gradient-via-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 50%;\n}\n@property --tw-gradient-to-position {\n  syntax: \"<length-percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-leading {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-inset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-inset-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-ring-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-ring-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-inset-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-ring-inset {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-ring-offset-width {\n  syntax: \"<length>\";\n  inherits: false;\n  initial-value: 0px;\n}\n@property --tw-ring-offset-color {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: #fff;\n}\n@property --tw-ring-offset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-outline-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-blur {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-brightness {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-contrast {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-grayscale {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-hue-rotate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-invert {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-opacity {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-saturate {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-sepia {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow-color {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-drop-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-drop-shadow-size {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-duration {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-ease {\n  syntax: \"*\";\n  inherits: false;\n}\n@property --tw-content {\n  syntax: \"*\";\n  initial-value: \"\";\n  inherits: false;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *, ::before, ::after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-space-x-reverse: 0;\n      --tw-divide-y-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-content: \"\";\n    }\n  }\n}\n";
const AtomicCitationStyle0 = atomicCitationCss;

const AtomicCitation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isOpen = false;
        this.hoverAnalyticsTimeout = 1000;
        this.hoverDebounceTimeoutMs = 200;
        this.openPopover = () => {
            this.isOpen = true;
        };
        this.closePopover = () => {
            clearTimeout(this.hoverTimeout);
            this.isOpen = false;
        };
        this.delayedPopoverOpen = () => {
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = setTimeout(this.openPopover, this.hoverDebounceTimeoutMs);
        };
        this.citation = undefined;
        this.index = undefined;
        this.sendHoverEndEvent = undefined;
        this.interactiveCitation = undefined;
        this.isOpen = false;
    }
    sendHoverAnalytics() {
        if (this.isOpen) {
            this.hoverStart = new Date().getTime();
            return;
        }
        if (!this.hoverStart) {
            return;
        }
        const difference = new Date().getTime() - this.hoverStart;
        if (difference > this.hoverAnalyticsTimeout) {
            this.sendHoverEndEvent(difference);
        }
        this.hoverStart = undefined;
    }
    componentDidRender() {
        if (this.popperInstance || !this.citationRef || !this.popupRef) {
            return;
        }
        this.popperInstance = createPopper(this.citationRef, this.popupRef, {
            placement: 'top-start',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 6],
                    },
                },
                createPopper$1.preventOverflow,
            ],
        });
    }
    componentDidUpdate() {
        this.popperInstance?.forceUpdate();
    }
    getTruncatedText() {
        return (this.citation.text &&
            `${this.citation.text?.trim().slice(0, 200)}${this.citation.text.length > 200 ? '...' : ''}`);
    }
    renderPopover() {
        return (index.h("div", { part: "citation-popover", class: `border-neutral bg-background z-10 rounded-md border p-4 shadow ${this.isOpen ? 'desktop-only:flex' : 'hidden'} mobile-only:hidden flex-col gap-3`, ref: (el) => (this.popupRef = el), role: "dialog" }, index.h("div", { class: "text-neutral-dark truncate text-sm" }, this.citation.uri), index.h(stencilHeading.Heading, { level: 0, class: "text-md font-bold" }, this.citation.title), index.h("p", { class: "text-on-background text-sm" }, this.getTruncatedText())));
    }
    render() {
        return (index.h("div", { key: 'a6aa9510165ea818d9e79f5a8ff89a26969808d6', class: "relative" }, index.h(itemLink.LinkWithItemAnalytics, { key: 'f8b5442a7b22932c3a40ea681e99012be873f8a3', href: this.citation.clickUri ?? this.citation.uri, ref: (el) => (this.citationRef = el), part: "citation", target: "_blank", rel: "noopener", "aria-haspopup": "dialog", className: "bg-background btn-outline-primary border-neutral text-on-background flex items-center rounded-full border p-1", onSelect: () => this.interactiveCitation.select(), onBeginDelayedSelect: () => this.interactiveCitation.beginDelayedSelect(), onCancelPendingSelect: () => this.interactiveCitation.cancelPendingSelect(), stopPropagation: this.stopPropagation, onMouseLeave: this.closePopover, onMouseOver: this.delayedPopoverOpen, onFocus: this.openPopover, onBlur: this.closePopover }, index.h("span", { key: 'ebd464bfd9ec9bc80dfe39566c56fdca6289d5aa', class: "citation-title mx-1 truncate" }, this.citation.title)), this.renderPopover()));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "isOpen": ["sendHoverAnalytics"]
    }; }
};
AtomicCitation.style = AtomicCitationStyle0;

exports.atomic_citation = AtomicCitation;

//# sourceMappingURL=atomic-citation.cjs.entry.js.map