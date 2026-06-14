export type CACHE_TAGS = "products" | "orders"

export function getGlobalTag(tag: CACHE_TAGS) {
    return `global-${tag}` as const
}

export function getIdTag(tag: CACHE_TAGS, id: string) {
    return `${tag}-${id}` as const
}

