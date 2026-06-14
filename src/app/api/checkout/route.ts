import { prisma } from "@/db";
import { createOrderAction } from "@/features/orders/actions";
import { stripe } from "@/services/stripe";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { productId } = await req.json();

        const product = await prisma.product.findUnique({
            where: { id: productId },
        });

        if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",

            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: product.price * 100,
                    },
                },
            ],

            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
        });

        await createOrderAction({
            data: {
                amount: product.price,
                paymentIntentId: session.id,
                productId,
                userId: "1234"
            }
        })

        return NextResponse.json({
            url: session.url,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}