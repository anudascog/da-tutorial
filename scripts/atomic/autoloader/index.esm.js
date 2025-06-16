import elementMap from "../components/components/lazy-index.js";
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
      if (tagName in elementMap && !customElements.get(tagName)) {
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
    return elementMap[tagName]?.();
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
export {
  registerAutoloader
};
