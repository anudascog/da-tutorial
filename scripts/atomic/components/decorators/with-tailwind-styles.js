import theme from "../utils/coveo.tw.css";
import utilities from "../utils/tailwind-utilities/utilities.tw.css";
import styles from "../utils/tailwind.global.tw.css";
import { CSSResult, unsafeCSS } from 'lit';
export function withTailwindStyles(constructor) {
    return class extends constructor {
        static get styles() {
            const baseStyles = [
                unsafeCSS(theme),
                unsafeCSS(styles),
                unsafeCSS(utilities),
            ];
            const customStyles = super.styles;
            if (customStyles instanceof CSSResult) {
                return [...baseStyles, customStyles];
            }
            else if (Array.isArray(customStyles)) {
                return [...baseStyles, ...customStyles];
            }
            return baseStyles;
        }
    };
}
