import { prisma } from "@/db"
import { cacheTag } from "next/cache"
import { getGlobalOrderTag } from "./invalidate"

export async function getUserProducts(userId: string) {
    "use cache"

    cacheTag(getGlobalOrderTag())

    return await prisma.order.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            amount: true,
            createdAt: true,

        }
    })

}