"use server"

import { prisma } from "@/db"
import { revalidateProductCache } from "./invalidate"

export async function createProductAction({ data }: {
    data: {
        name: string,
        price: number,
        fileUrl: string
    }
}) {
    try {
        const product = await prisma.product.create({
            data: { ...data, price: Number(data.price) },
            select: {
                id: true,
                name: true
            }
        })

        revalidateProductCache(product.id);

        return {
            success: true,
            message: "Success",

        }

    } catch (error) {
        console.log("[COURSE_CREATE_ERROR] ", error);
        return {
            success: false,
            message: "Failed to create product",

        }
    }
}