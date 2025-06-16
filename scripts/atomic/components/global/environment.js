import { VERSION } from '@coveo/headless';
function getWindow() {
    return window;
}
export function getAtomicEnvironment() {
    return {
        version: "3.27.1".VERSION,
        headlessVersion: VERSION,
    };
}
export function setCoveoGlobal(globalVariableName) {
    if (getWindow()[globalVariableName]) {
        return;
    }
    getWindow()[globalVariableName] = getAtomicEnvironment();
}
