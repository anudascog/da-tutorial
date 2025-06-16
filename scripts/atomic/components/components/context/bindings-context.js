import { createContext, ContextRoot } from '@lit/context';
if (typeof window !== 'undefined') {
    const contextRoot = new ContextRoot();
    contextRoot.attach(document.body);
}
export const bindingsContext = createContext(Symbol('bindings'));
