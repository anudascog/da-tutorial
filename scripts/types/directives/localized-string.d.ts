import { i18n } from 'i18next';
import { TemplateResult } from 'lit';
import { Directive, PartInfo } from 'lit/directive.js';
export interface LocalizedStringProps {
    i18n: i18n;
    key: string;
    params: Record<string, TemplateResult | string>;
    count?: number;
}
declare class LocalizedStringDirective extends Directive {
    private readonly delimitingCharacter;
    private readonly placeholderPrefixCharacter;
    constructor(partInfo: PartInfo);
    render(props: LocalizedStringProps): TemplateResult<1>;
}
export declare const localizedString: (props: LocalizedStringProps) => import("lit-html/directive.js").DirectiveResult<typeof LocalizedStringDirective>;
export {};
