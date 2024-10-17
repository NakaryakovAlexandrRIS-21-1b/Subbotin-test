import { bblSort, quickSort, mergeSort } from '../sorts'

describe('bbl test', function () {
	it('test 1', function () {
		const res = [5, 6, 43, 55, 63, 234, 235, 547]
		const arr = [234, 43, 55, 63, 5, 6, 235, 547]
		assert.equal(bblSort(arr), res)
	})
})
describe('quick test', function () {
	it('test 1', function () {
		const res = [5, 6, 43, 55, 63, 234, 235, 547]
		const arr = [234, 43, 55, 63, 5, 6, 235, 547]
		assert.equal(quickSort(arr), res)
	})
})
describe('merge test', function () {
	it('test 1', function () {
		const res = [5, 6, 43, 55, 63, 234, 235, 547]
		const arr = [234, 43, 55, 63, 5, 6, 235, 547]
		assert.equal(mergeSort(arr), res)
	})
})

describe('bbl time test', function () {
	it('test 1', function () {
		const start = performance.now()
		const res = true
		const arr = [234, 43, 55, 63, 5, 6, 235, 547]
		const end = performance.now()
		const time = end - start
		bblSort(arr)
		assert.equal(time < 1, res)
	})
})

describe('quick time test', function () {
	it('test 1', function () {
		const start = performance.now()
		const res = true
		const arr = [234, 43, 55, 63, 5, 6, 235, 547]
		const end = performance.now()
		const time = end - start
		quickSort(arr)
		assert.equal(time < 1, res)
	})
})

describe('merge time test', function () {
	it('test 1', function () {
		const start = performance.now()
		const res = true
		const arr = [234, 43, 55, 63, 5, 6, 235, 547]
		const end = performance.now()
		const time = end - start
		mergeSort(arr)
		assert.equal(time < 1, res)
	})
})

// Плюсы тестирования:
// 1. Ускоряют разработку
// 2. Увеличивают уверенность в коде
// 3. Сокращают время на дебаг
// 4. Улучшают качество кода
// 5. Сокращают количество багов


// Минусы тестирования:
// 1. Затраты на написание тестов
// 2. Сложность в написании тестов
// 3. Могут быть избыточным
// 4. Требуют дополнительных навыков

