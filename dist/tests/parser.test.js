"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("../parser/Parser");
describe('parser test', () => {
    it('should parse empty input', () => {
        let query = {};
        expect((0, Parser_1.PicaioQueryParamsToUrlParams)(query)).toBe("");
    });
    it('should parse sort input', () => {
        let queryWithSort = {
            sort: ['name', '-age']
        };
        expect((0, Parser_1.PicaioQueryParamsToUrlParams)(queryWithSort)).toBe("sort=name,-age");
    });
    it('should parse page input', () => {
        let queryWithPage = {
            page: {
                number: 1,
                size: 10
            }
        };
        expect((0, Parser_1.PicaioQueryParamsToUrlParams)(queryWithPage)).toBe("page[number]=1&page[size]=10");
    });
    it('should parse filter input', () => {
        let queryWithFilter = {
            filter: {
                name: 'John',
                age: 30
            }
        };
        expect((0, Parser_1.PicaioQueryParamsToUrlParams)(queryWithFilter)).toBe("filter[name]=John&filter[age]=30");
    });
    it('should parse all input', () => {
        let query = {
            sort: ['name', '-age'],
            page: {
                number: 1,
                size: 10
            },
            filter: {
                name: 'John',
                age: 30
            }
        };
        expect((0, Parser_1.PicaioQueryParamsToUrlParams)(query)).toBe("sort=name,-age&page[number]=1&page[size]=10&filter[name]=John&filter[age]=30");
    });
});
