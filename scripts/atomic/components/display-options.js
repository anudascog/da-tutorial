import { c as containsSections } from './sections2.js';

function getDisplayClass(display) {
    switch (display) {
        case 'grid':
            return 'display-grid';
        case 'list':
        default:
            return 'display-list';
        case 'table':
            return 'display-table';
    }
}
function getDensityClass(density) {
    switch (density) {
        case 'comfortable':
            return 'density-comfortable';
        case 'normal':
        default:
            return 'density-normal';
        case 'compact':
            return 'density-compact';
    }
}
function getImageClass(image) {
    switch (image) {
        case 'large':
            return 'image-large';
        case 'small':
            return 'image-small';
        case 'icon':
        default:
            return 'image-icon';
        case 'none':
            return 'image-none';
    }
}
function getItemListDisplayClasses(display, density, image, isLoading, isAppLoading) {
    const classes = getItemDisplayClasses(display, density, image);
    if (isLoading) {
        classes.push('loading');
    }
    if (isAppLoading) {
        classes.push('placeholder');
    }
    return classes.join(' ');
}
function getItemDisplayClasses(display, density, image) {
    const classes = [
        getDisplayClass(display),
        getDensityClass(density),
        getImageClass(image),
    ];
    return classes;
}
class ItemLayout {
    constructor(children, display, density, imageSize) {
        this.children = children;
        this.display = display;
        this.density = density;
        this.imageSize = imageSize;
    }
    getImageSizeFromSections() {
        const imageSize = this.getSection('atomic-result-section-visual')?.getAttribute('image-size');
        if (!imageSize) {
            return undefined;
        }
        return imageSize;
    }
    getSection(section) {
        return Array.from(this.children).find((element) => element.tagName.toLowerCase() === section);
    }
    getClasses(HTMLContent) {
        const classes = getItemDisplayClasses(this.display, this.density, this.getImageSizeFromSections() ?? this.imageSize);
        if (HTMLContent
            ? containsSections(HTMLContent)
            : containsSections(this.children)) {
            classes.push('with-sections');
        }
        return classes;
    }
}

export { ItemLayout as I, getItemDisplayClasses as a, getItemListDisplayClasses as g };

//# sourceMappingURL=display-options.js.map