"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicaioQueryParamsToUrlParams = PicaioQueryParamsToUrlParams;
function PicaioQueryParamsToUrlParams(queryParams) {
    let urlParams = '';
    if (queryParams.sort) {
        urlParams += `&sort=${queryParams.sort.join(',')}`;
    }
    if (queryParams.page) {
        urlParams += `&page[number]=${queryParams.page.number}&page[size]=${queryParams.page.size}`;
    }
    if (queryParams.filter) {
        for (const key in queryParams.filter) {
            // @ts-ignore
            let value = queryParams.filter[key];
            urlParams += `&filter[${key}]=${value}`;
        }
    }
    if (urlParams.startsWith('&')) {
        urlParams = urlParams.substring(1);
    }
    return urlParams;
}
