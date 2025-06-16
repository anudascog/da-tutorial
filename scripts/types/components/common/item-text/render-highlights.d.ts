export type HighlightKeywords = {
    offset: number;
    length: number;
};
export type HighlightString = (params: {
    content: string;
    openingDelimiter: string;
    closingDelimiter: string;
    highlights: HighlightKeywords[];
}) => string;
export declare function renderWithHighlights(value: string, highlights: HighlightKeywords[], highlightString: HighlightString): string;
