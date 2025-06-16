import { LitElement } from 'lit';
export const ChildrenUpdateCompleteMixin = (superClass) => {
    class ChildrenUpdateCompleteMixinClass extends superClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
        }
        async getUpdateComplete() {
            const baseUpdateComplete = await super.getUpdateComplete();
            const children = Array.from(this.querySelectorAll('*'));
            this.shadowRoot
                ?.querySelectorAll('*')
                .forEach((child) => children.push(child));
            await Promise.all(children.map(async (child) => {
                if (child instanceof LitElement) {
                    await child.updateComplete;
                }
                else if ('componentOnReady' in child) {
                    await child.componentOnReady();
                }
            }));
            return baseUpdateComplete;
        }
    }
    return ChildrenUpdateCompleteMixinClass;
};
