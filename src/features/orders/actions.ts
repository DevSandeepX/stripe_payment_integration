"use server"
import { prisma } from "@/db"
import { revalidateOrderCache } from "./invalidate"

export async function createOrderAction({ data }: {
    data: {
        productId: string,
        paymentIntentId: string,
        amount: number
        userId: string
    }
}) {
    try {
        const order = await prisma.order.create({
            data
        })

        revalidateOrderCache(order.id)
    } catch (error) {
        throw new Error("Failed to create order")
    }
}