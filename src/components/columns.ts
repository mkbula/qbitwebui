export type SortKey =
	| 'name'
	| 'size'
	| 'progress'
	| 'downloaded'
	| 'uploaded'
	| 'dlspeed'
	| 'upspeed'
	| 'dl_limit'
	| 'up_limit'
	| 'ratio'
	| 'state'
	| 'category'
	| 'tags'
	| 'num_seeds'
	| 'num_leechs'
	| 'last_activity'
	| 'save_path'
	| 'tracker'
	| 'seeding_time'
	| 'added_on'
	| 'completion_on'
	| 'eta'

export interface ColumnDef {
	id: string
	label: string
	sortKey: SortKey | null
}

export const COLUMNS: ColumnDef[] = [
	{ id: 'progress', label: 'Progress', sortKey: 'progress' },
	{ id: 'eta', label: 'ETA', sortKey: 'eta' },
	{ id: 'status', label: 'Status', sortKey: null },
	{ id: 'size', label: 'Size', sortKey: 'size' },
	{ id: 'downloaded', label: 'Down', sortKey: 'downloaded' },
	{ id: 'uploaded', label: 'Up', sortKey: 'uploaded' },
	{ id: 'dlspeed', label: 'DL Speed', sortKey: 'dlspeed' },
	{ id: 'upspeed', label: 'UP Speed', sortKey: 'upspeed' },
	{ id: 'dl_limit', label: 'DL Limit', sortKey: 'dl_limit' },
	{ id: 'up_limit', label: 'UP Limit', sortKey: 'up_limit' },
	{ id: 'ratio', label: 'Ratio', sortKey: 'ratio' },
	{ id: 'seeding_time', label: 'Seed Time', sortKey: 'seeding_time' },
	{ id: 'added_on', label: 'Added', sortKey: 'added_on' },
	{ id: 'completion_on', label: 'Completed', sortKey: 'completion_on' },
	{ id: 'category', label: 'Category', sortKey: 'category' },
	{ id: 'tags', label: 'Tags', sortKey: 'tags' },
	{ id: 'num_seeds', label: 'Seeds', sortKey: 'num_seeds' },
	{ id: 'num_leechs', label: 'Peers', sortKey: 'num_leechs' },
	{ id: 'last_activity', label: 'Last Active', sortKey: 'last_activity' },
	{ id: 'save_path', label: 'Save Path', sortKey: 'save_path' },
	{ id: 'tracker_name', label: 'Tracker', sortKey: 'tracker' },
	{ id: 'tracker', label: 'Tracker (URL)', sortKey: 'tracker' },
]

export const DEFAULT_VISIBLE_COLUMNS = new Set([
	'progress',
	'status',
	'downloaded',
	'uploaded',
	'dlspeed',
	'upspeed',
	'ratio',
	'seeding_time',
	'added_on',
])

export const DEFAULT_COLUMN_ORDER = COLUMNS.map((c) => c.id)
