const minimumPage = 0;
export function getCurrentPagesRange(page, desiredNumberOfPages, maxPage) {
    let range = buildRange(page, desiredNumberOfPages);
    range = shiftRightIfNeeded(range);
    range = shiftLeftIfNeeded(range, maxPage);
    return buildCurrentPages(range);
}
function buildRange(page, desiredNumberOfPages) {
    const isEven = desiredNumberOfPages % 2 === 0;
    const leftCapacity = Math.floor(desiredNumberOfPages / 2);
    const rightCapacity = isEven ? leftCapacity - 1 : leftCapacity;
    const start = page - leftCapacity;
    const end = page + rightCapacity;
    return { start, end };
}
function shiftRightIfNeeded(range) {
    const leftExcess = Math.max(minimumPage - range.start, 0);
    const start = range.start + leftExcess;
    const end = range.end + leftExcess;
    return { start, end };
}
function shiftLeftIfNeeded(range, maxPage) {
    const rightExcess = Math.max(range.end - maxPage, 0);
    const start = Math.max(range.start - rightExcess, minimumPage);
    const end = range.end - rightExcess;
    return { start, end };
}
function buildCurrentPages(range) {
    const currentPages = [];
    for (let counter = range.start; counter <= range.end; ++counter) {
        currentPages.push(counter);
    }
    return currentPages;
}
