import { getGlobalTag, getIdTag } from "@/cacheTags";
import { revalidateTag } from "next/cache";

export function getGlobalOrderTag() {
    return getGlobalTag("orders")
}

export function getOrderIdTag(orderId: string) {
    return getIdTag("orders", orderId)
}


export function revalidateOrderCache(orderId: string) {
    revalidateTag(getGlobalOrderTag(), "max")
    revalidateTag(getOrderIdTag(orderId), "max")
}