import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-localized-text` component renders a target i18n localized string using the values of a target field.
 *
 * Given this i18n configuration:
 * ```
 * searchInterface.i18n.addResourceBundle('en', 'translation', {
 *    classic_book_advert: 'Classic book from {{name}}',
 * });
 * ```
 *
 * The component could be configured in such a way to replace `{{name}}` with the `author` field value from the result item:
 * ```
 * <atomic-result-localized-text locale-key="classic_book_advert" field-author="name"></atomic-result-localized-text>
 * ```
 *
 * @MapProp name: field;attr: field;docs: The field from which to extract the target string and the variable used to map it to the target i18n parameter. For example, the following configuration extracts the value of `author` from a result, and assign it to the i18n parameter `name`: `field-author="name"`;type: Record<string, string> ;default: {}
 */
export declare class AtomicResultLocalizedText implements InitializableComponent {
    bindings: Bindings;
    error: Error;
    private result;
    /**
     * The i18n translation key.
     */
    localeKey: string;
    /**
     * The field value to dynamically evaluate.
     */
    field: Record<string, string>;
    /**
     * The numerical field value used to determine whether to use the singular or plural value of a translation.
     * */
    fieldCount?: string;
    render(): string;
    private parseFieldValues;
    private parseFieldCount;
}
