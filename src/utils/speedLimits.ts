export interface SpeedLimitValues {
	dl: string
	up: string
}

export type SpeedLimitChanges = Partial<Record<keyof SpeedLimitValues, number>>

export function limitToKiB(limit: number): string {
	return limit > 0 ? String(Math.round(limit / 1024)) : ''
}

export function kibToLimit(kib: string): number {
	const value = Number(kib)
	return Number.isFinite(value) && value > 0 ? Math.round(value * 1024) : 0
}

export function commonKiB(limits: number[]): string | null {
	const values = new Set(limits.map(limitToKiB))
	return values.size === 1 ? [...values][0] : null
}

export function getLimitChanges(initial: SpeedLimitValues, current: SpeedLimitValues): SpeedLimitChanges {
	const changes: SpeedLimitChanges = {}
	if (current.dl.trim() !== initial.dl) changes.dl = kibToLimit(current.dl)
	if (current.up.trim() !== initial.up) changes.up = kibToLimit(current.up)
	return changes
}
