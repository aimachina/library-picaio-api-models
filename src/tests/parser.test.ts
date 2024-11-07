import {PicaioQueryParams} from "../types/Models";
import {PicaioQueryParamsToUrlParams} from "../parser/Parser";

describe('parser test', () => {

	it('should parse empty input', () => {
		let query: PicaioQueryParams = {}
		expect(PicaioQueryParamsToUrlParams(query)).toBe("")
	})

	it('should parse sort input', () => {
		let queryWithSort: PicaioQueryParams = {
			sort: ['name', '-age']
		}
		expect(PicaioQueryParamsToUrlParams(queryWithSort)).toBe("sort=name,-age")
	})

	it('should parse page input', () => {
		let queryWithPage: PicaioQueryParams = {
			page: {
				number: 1,
				size: 10
			}
		}
		expect(PicaioQueryParamsToUrlParams(queryWithPage)).toBe("page[number]=1&page[size]=10")
	})

	it('should parse filter input', () => {
		let queryWithFilter: PicaioQueryParams = {
			filter: {
				name: 'John',
				age: 30
			}
		}
		expect(PicaioQueryParamsToUrlParams(queryWithFilter)).toBe("filter[name]=John&filter[age]=30")
	})

	it('should parse all input', () => {
		let query: PicaioQueryParams = {
			sort: ['name', '-age'],
			page: {
				number: 1,
				size: 10
			},
			filter: {
				name: 'John',
				age: 30
			}
		}
		expect(PicaioQueryParamsToUrlParams(query)).toBe("sort=name,-age&page[number]=1&page[size]=10&filter[name]=John&filter[age]=30")
	})
})
