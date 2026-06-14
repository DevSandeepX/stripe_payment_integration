import { prisma } from "@/db"
import { cacheTag } from "next/cache"
import { getProductGlobalTag } from "./invalidate"

export async function getProducts() {
    "use cache"
    cacheTag(
        getProductGlobalTag()
    )
    return await prisma.product.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
}