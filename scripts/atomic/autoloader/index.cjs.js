"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  registerAutoloader: () => registerAutoloader
});
module.exports = __toCommonJS(index_exports);
var import_lazy_index = __toESM(require("../components/components/lazy-index.js"), 1);
function registerAutoloader(roots) {
  if (typeof window === "undefined") {
    return;
  }
  roots ??= [document.documentElement];
  roots = Array.isArray(roots) ? roots : [roots];
  const observeStencilElementHydration = (atomicElement) => {
    const attributeObserver = new MutationObserver(() => {
      if (atomicElement.classList.contains("hydrated")) {
        attributeObserver.disconnect();
        if ("shadowRoot" in atomicElement && atomicElement.shadowRoot) {
          discover(atomicElement);
        }
      }
    });
    attributeObserver.observe(atomicElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
  };
  const discover = async (root) => {
    const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
    const rootIsAtomicElement = rootTagName?.startsWith("atomic-");
    const allAtomicElements = [...root.querySelectorAll("*")].filter(
      (el) => el.tagName.toLowerCase().startsWith("atomic-")
    );
    if (rootIsAtomicElement && root instanceof Element && !customElements.get(rootTagName)) {
      allAtomicElements.push(root);
    }
    if (rootIsAtomicElement) {
      const childTemplates = root.querySelectorAll("template");
      for (const template of childTemplates) {
        discover(template.content);
        observer.observe(template.content, { subtree: true, childList: true });
      }
      if ("shadowRoot" in root && root.shadowRoot) {
        discover(root.shadowRoot);
        observer.observe(root.shadowRoot, { subtree: true, childList: true });
      }
    }
    const litRegistrationPromises = [];
    for (const atomicElement of allAtomicElements) {
      const tagName = atomicElement.tagName.toLowerCase();
      if (tagName in import_lazy_index.default && !customElements.get(tagName)) {
        litRegistrationPromises.push(register(tagName));
        continue;
      }
      if ("shadowRoot" in atomicElement && atomicElement.shadowRoot) {
        discover(atomicElement);
        continue;
      }
      if (atomicElement.classList.contains("hydrated")) {
        continue;
      }
      observeStencilElementHydration(atomicElement);
    }
    await Promise.allSettled(litRegistrationPromises);
    customElements.upgrade(root);
  };
  const register = (tagName) => {
    if (customElements.get(tagName)) {
      return Promise.resolve();
    }
    return import_lazy_index.default[tagName]?.();
  };
  const observer = new MutationObserver((mutations) => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          discover(node);
        }
      }
    }
  });
  const initializeDiscovery = () => {
    for (const root of roots) {
      discover(root);
      observer.observe(root, {
        subtree: true,
        childList: true
      });
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDiscovery);
  } else {
    initializeDiscovery();
  }
}
