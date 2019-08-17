export function page(total, pageSize, currentPage) {
    let totalPage = Math.floor((total - 1) / pageSize) + 1;
    let showPage = 5;

    let offset_ = currentPage - Math.floor((showPage / 2) + 1);
    offset_ = offset_ > 0 ? offset_ : 0;

    let pageNumbers = Array
        .from({ length: showPage })
        .map((it, i) => i + 1 + offset_)
        .filter(it => it <= totalPage);

    return {
        currentPage,
        totalPage,
        pageNumbers
    };
}