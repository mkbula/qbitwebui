import { describe, it, expect } from 'vitest'
import { commonKiB, getLimitChanges, kibToLimit, limitToKiB } from '../../src/utils/speedLimits'

describe('speedLimits', () => {
    it('converts limits to KiB strings, treating 0 and -1 as unlimited', () => {
        expect(limitToKiB(10240)).toBe('10')
        expect(limitToKiB(0)).toBe('')
        expect(limitToKiB(-1)).toBe('')
    })

    it('converts KiB input to bytes, treating empty or invalid input as unlimited', () => {
        expect(kibToLimit('10')).toBe(10240)
        expect(kibToLimit('')).toBe(0)
        expect(kibToLimit('0')).toBe(0)
        expect(kibToLimit('-5')).toBe(0)
        expect(kibToLimit('abc')).toBe(0)
    })

    it('returns the shared value or null when limits differ', () => {
        expect(commonKiB([1024, 1024])).toBe('1')
        expect(commonKiB([0, -1])).toBe('')
        expect(commonKiB([1024, 2048])).toBeNull()
    })

    it('only reports fields that changed', () => {
        expect(getLimitChanges({ dl: '10', up: '' }, { dl: '10', up: '' })).toEqual({})
        expect(getLimitChanges({ dl: '10', up: '' }, { dl: '', up: '5' })).toEqual({ dl: 0, up: 5120 })
        expect(getLimitChanges({ dl: '', up: '' }, { dl: '20', up: '' })).toEqual({ dl: 20480 })
    })
})
