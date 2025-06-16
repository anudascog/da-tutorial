'use strict';

const sections = require('./sections-4b4af2f8.js');

const tabsSelector = 'atomic-insight-tabs';
const refineModalSelector = 'atomic-insight-refine-modal';
const searchBoxSelector = 'atomic-insight-search-box';
const toggleSelectors = [
    'atomic-insight-refine-toggle',
    'atomic-insight-edit-toggle',
    'atomic-insight-history-toggle',
];
const smartSnippetSelectors = [
    'atomic-insight-smart-snippet-suggestions',
    'atomic-insight-smart-snippet',
];
const generatedAnswerSelector = 'atomic-insight-generated-answer';
function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildInsightLayout(element, widget) {
    const id = element.id;
    const layoutSelector = `atomic-insight-layout#${id}`;
    const hasTabs = Boolean(sections.findSection(element, 'search')?.querySelector(tabsSelector));
    const interfaceStyle = widget
        ? `
  ${layoutSelector} {
    display: grid;
    grid-template-rows: auto auto 8fr 1fr;
    max-height: 100%;
    box-sizing: border-box;
  }
  ${layoutSelector} ${refineModalSelector} {
    grid-row-start: 5;
  }`
        : '';
    const search = `${sections.sectionSelector('search')} {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 0.5rem;
      background: var(--atomic-neutral-light);
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      box-sizing: border-box;
      min-width: 0;
      ${!hasTabs ? 'padding-bottom: 1.5rem;' : ''}
    }

    ${sections.sectionSelector('search')} ${searchBoxSelector} {
      flex-grow: 1;
      height: 2.6rem;
    }

    ${toggleSelectors.map((toggleSelector) => `${sections.sectionSelector('search')} ${toggleSelector} {
      flex-shrink: 0;
    }`)}

    ${sections.sectionSelector('search')} ${tabsSelector} {
      width: 100%;
    }
    `;
    const facets = `${sections.sectionSelector('facets')} {
      display: none;
    }
    `;
    const results = `
    ${sections.sectionSelector('results')} {
      overflow: auto;
    }

    ${sections.sectionSelector('results')} ${smartSnippetSelectors.join(',')} {
      padding: 1.5rem 1.5rem 0px;
    }

    ${sections.sectionSelector('results')} ${generatedAnswerSelector} {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    `;
    return [interfaceStyle, search, facets, results]
        .filter((declaration) => declaration !== '')
        .join('\n\n');
}

exports.buildInsightLayout = buildInsightLayout;
exports.makeDesktopQuery = makeDesktopQuery;

//# sourceMappingURL=insight-layout-355a94dd.js.map