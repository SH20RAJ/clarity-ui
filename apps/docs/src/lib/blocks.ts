export const BLOCK_CATEGORIES = [
    "Dashboard",
    "Authentication",
    "Marketing",
    "Forms",
    "Cards",
] as const

export type BlockCategory = (typeof BLOCK_CATEGORIES)[number]

export interface Block {
    name: string
    category: BlockCategory
    component: React.ComponentType<any>
}
