'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

const NAMESPACE = 'atomic';
const BUILD = /* atomic */ { allRenderFn: false, appendChildSlotFix: false, asyncLoading: true, asyncQueue: false, attachStyles: true, cloneNodeFix: false, cmpDidLoad: true, cmpDidRender: true, cmpDidUnload: false, cmpDidUpdate: true, cmpShouldUpdate: true, cmpWillLoad: true, cmpWillRender: true, cmpWillUpdate: true, connectedCallback: true, constructableCSS: true, cssAnnotations: true, devTools: false, disconnectedCallback: true, element: false, event: true, experimentalScopedSlotChanges: false, experimentalSlotFixes: false, formAssociated: false, hasRenderFn: true, hostListener: true, hostListenerTarget: true, hostListenerTargetBody: true, hostListenerTargetDocument: true, hostListenerTargetParent: false, hostListenerTargetWindow: true, hotModuleReplacement: false, hydrateClientSide: false, hydrateServerSide: false, hydratedAttribute: false, hydratedClass: true, hydratedSelectorName: "hydrated", initializeNextTick: false, invisiblePrehydration: true, isDebug: false, isDev: false, isTesting: false, lazyLoad: true, lifecycle: true, lifecycleDOMEvents: false, member: true, method: true, mode: false, observeAttribute: true, profile: false, prop: true, propBoolean: true, propMutable: true, propNumber: true, propString: true, reflect: true, scoped: false, scopedSlotTextContentFix: false, scriptDataOpts: false, shadowDelegatesFocus: false, shadowDom: true, slot: true, slotChildNodesFix: false, slotRelocation: true, state: true, style: true, svg: false, taskQueue: true, transformTagName: false, updatable: true, vdomAttribute: true, vdomClass: true, vdomFunctional: true, vdomKey: true, vdomListener: true, vdomPropOrAttr: true, vdomRef: true, vdomRender: true, vdomStyle: true, vdomText: true, vdomXlink: true, watchCallback: true };

/*
 Stencil Client Platform v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  return hostRefs.set(hostElement, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'atomic-breadbox.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-breadbox.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-category-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-category-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-citation.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-citation.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-color-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-color-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-breadbox.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-breadbox.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-did-you-mean.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-did-you-mean.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-layout.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-layout.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-load-more-products.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-load-more-products.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-no-products.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-no-products.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-product-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-product-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-products-per-page.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-products-per-page.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-query-error.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-query-error.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-query-summary.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-query-summary.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-recommendation-interface.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-recommendation-interface.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-recommendation-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-recommendation-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-refine-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-refine-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-search-box.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-search-box.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-did-you-mean.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-did-you-mean.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-external.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-external.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-facet-manager.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-facet-manager.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-field-condition.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-field-condition.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-folded-result-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-folded-result-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-format-currency.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-format-currency.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-format-number.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-format-number.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-format-unit.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-format-unit.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-generated-answer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-generated-answer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-generated-answer-feedback-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-generated-answer-feedback-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-edit-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-edit-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-folded-result-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-folded-result-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-full-search-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-full-search-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-generated-answer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-generated-answer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-history-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-history-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-interface.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-interface.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-layout.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-layout.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-no-results.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-no-results.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-numeric-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-numeric-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-pager.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-pager.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-query-error.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-query-error.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-query-summary.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-query-summary.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-refine-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-refine-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-action.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-action.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-action-bar.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-action-bar.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-attach-to-case-action.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-attach-to-case-action.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-attach-to-case-indicator.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-attach-to-case-indicator.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-children.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-children.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-children-template.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-children-template.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-quickview-action.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-quickview-action.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result-template.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result-template.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-search-box.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-search-box.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-smart-snippet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-smart-snippet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-smart-snippet-suggestions.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-smart-snippet-suggestions.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-tab.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-tab.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-tabs.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-tabs.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-timeframe-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-timeframe-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-user-actions-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-user-actions-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-embedded.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-embedded.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-recs-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-recs-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-refine-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-refine-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-result-link.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-result-link.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-tab.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-tab.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-tabs.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-tabs.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-layout-section.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-layout-section.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-load-more-results.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-load-more-results.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-no-results.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-no-results.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-notifications.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-notifications.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-numeric-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-numeric-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-numeric-range.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-numeric-range.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-pager.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-pager.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-popover.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-popover.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-children.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-children.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-description.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-description.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-excerpt.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-excerpt.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-field-condition.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-field-condition.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-image.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-image.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-link.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-link.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-multi-value-text.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-multi-value-text.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-numeric-field-value.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-numeric-field-value.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-price.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-price.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-rating.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-rating.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-actions.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-actions.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-badges.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-badges.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-bottom-metadata.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-bottom-metadata.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-children.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-children.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-description.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-description.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-emphasized.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-emphasized.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-metadata.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-metadata.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-name.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-name.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-section-visual.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-section-visual.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product-template.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product-template.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-query-error.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-query-error.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-query-summary.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-query-summary.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-quickview.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-quickview.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-rating-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-rating-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-rating-range-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-rating-range-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-recs-error.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-recs-error.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-recs-interface.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-recs-interface.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-recs-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-recs-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-recs-result-template.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-recs-result-template.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-refine-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-refine-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-badge.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-badge.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-children.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-children.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-children-template.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-children-template.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-date.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-date.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-fields-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-fields-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-html.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-html.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-icon.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-icon.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-image.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-image.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-link.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-link.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-localized-text.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-localized-text.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-multi-value-text.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-multi-value-text.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-number.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-number.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-printable-uri.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-printable-uri.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-rating.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-rating.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-section-children.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-section-children.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-section-emphasized.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-section-emphasized.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-section-title-metadata.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-section-title-metadata.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-template.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-template.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-timespan.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-timespan.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-results-per-page.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-results-per-page.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-search-box.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-search-box.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-search-box-instant-results.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-search-box-instant-results.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-search-interface.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-search-interface.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-search-layout.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-search-layout.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-segmented-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-segmented-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-segmented-facet-scrollable.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-segmented-facet-scrollable.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-smart-snippet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-smart-snippet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-smart-snippet-suggestions.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-smart-snippet-suggestions.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-sort-dropdown.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-sort-dropdown.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-sort-expression.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-sort-expression.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-tab.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-tab.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-tab-manager.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-tab-manager.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-table-element.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-table-element.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-timeframe.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-timeframe.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-timeframe-facet.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-timeframe-facet.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-refine-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-refine-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-html.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-html.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-refine-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-refine-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-smart-snippet-feedback-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-smart-snippet-feedback-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-user-actions-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-user-actions-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-refine-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-refine-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-refine-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-refine-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-relevance-inspector.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-relevance-inspector.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-search-box-query-suggestions_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-search-box-query-suggestions_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-smart-snippet-feedback-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-smart-snippet-feedback-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-tab-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-tab-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-aria-live.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-aria-live.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-automatic-facet_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-automatic-facet_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-category-facet_5.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-category-facet_5.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-facet-number-input.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-facet-number-input.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-user-actions-session_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-user-actions-session_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-ipx-body.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-ipx-body.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-product.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-product.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-quickview-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-quickview-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-recs-result.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-recs-result.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-smart-snippet-collapse-wrapper_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-smart-snippet-collapse-wrapper_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-insight-result.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-insight-result.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-text_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-text_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-suggestion-renderer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-suggestion-renderer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-tab-bar_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-tab-bar_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-commerce-facet-number-input_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-commerce-facet-number-input_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-smart-snippet-answer_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-smart-snippet-answer_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-text_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-text_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-result-placeholder_8.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-result-placeholder_8.cjs.entry.js')); }).then(processMod, consoleError);
                case 'atomic-focus-trap_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './atomic-focus-trap_2.cjs.entry.js')); }).then(processMod, consoleError);
          }
      }
  return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  )); }).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/utils/constants.ts
var EMPTY_OBJ = {};

// src/utils/helpers.ts
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2 /* Number */) {
      return parseFloat(propValue);
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => getHostRef(ref).$hostElement$ ;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          const injectStyle = (
            /**
             * we render a scoped component
             */
            !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) || /**
             * we are using shadow dom and render the style tag within the shadowRoot
             */
            cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */ && styleContainerNode.nodeName !== "HEAD"
          );
          if (injectStyle) {
            styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */ && flags & 2 /* scopedCssEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key") ; else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = doc.createTextNode("");
  } else {
    elm = newVNode2.$elm$ = doc.createElement(
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    );
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    const rootNode = elm.getRootNode();
    const isElementWithinShadowRoot = !rootNode.querySelector("body");
    if (!isElementWithinShadowRoot && BUILD.scoped && isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.childNodes);
  if (parentElm["s-sr"] && BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(parentReferenceNode(childNode), childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(parentReferenceNode(oldStartVnode.$elm$), node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      if (
        // The component gets hydrated and no VDOM has been initialized.
        // Here the comparison can't happen as $name$ property is not set for `leftNode`.
        "$nodeId$" in leftVNode && isInitialRender && // `leftNode` is not from type HTMLComment which would cause many
        // hydration comments to be removed
        leftVNode.$elm$.nodeType !== 8
      ) {
        return false;
      }
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
var parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      if (tag === "slot" && !useNativeShadowDom) ; else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1 /* ElementNode */) {
      if (childNode["s-sr"]) {
        const slotName = childNode["s-sn"];
        childNode.hidden = false;
        for (const siblingNode of childNodes) {
          if (siblingNode !== childNode) {
            if (siblingNode["s-hn"] !== childNode["s-hn"] || slotName !== "") {
              if (siblingNode.nodeType === 1 /* ElementNode */ && (slotName === siblingNode.getAttribute("slot") || slotName === siblingNode["s-sn"]) || siblingNode.nodeType === 3 /* TextNode */ && slotName === siblingNode["s-sn"]) {
                childNode.hidden = true;
                break;
              }
            } else {
              if (siblingNode.nodeType === 1 /* ElementNode */ || siblingNode.nodeType === 3 /* TextNode */ && siblingNode.textContent.trim() !== "") {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  for (const childNode of elm.childNodes) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!BUILD.experimentalSlotFixes  )) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  const inserted = parent == null ? void 0 : parent.insertBefore(newNode, reference);
  return inserted;
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          const orgLocationNode = doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](nodeToRelocate);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  } else {
    {
      maybePromise = safeCall(instance, "componentWillUpdate");
    }
  }
  {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render && instance.render();
    {
      hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  {
    safeCall(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad");
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    {
      safeCall(instance, "componentDidUpdate");
    }
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
  }
};
var forceUpdate = (ref) => {
  {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance) => {
  {
    safeCall(instance, "connectedCallback");
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance) => {
  {
    safeCall(instance, "disconnectedCallback");
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                {
                  self.attachShadow({ mode: "open" });
                }
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (flags & 4 /* TargetDocument */) return doc;
  if (flags & 8 /* TargetWindow */) return win;
  if (flags & 16 /* TargetBody */) return doc.body;
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

exports.Fragment = Fragment;
exports.Host = Host;
exports.bootstrapLazy = bootstrapLazy;
exports.createEvent = createEvent;
exports.forceUpdate = forceUpdate;
exports.getElement = getElement;
exports.h = h;
exports.promiseResolve = promiseResolve;
exports.registerInstance = registerInstance;
exports.setNonce = setNonce;

//# sourceMappingURL=index-757bc886.js.map