"use client"

import { useRouter } from "next/navigation";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
}

export default function ProductCard({
    name,
    price,
    id
}: ProductCardProps) {
    const router = useRouter()
    async function handleCheckout(id: string) {
        try {
            const response = await fetch(`/api/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: id
                })
            })

            const data = await response.json();
            if (data.url) {
                router.push(`${data.url}`)
            }
        } catch (error) {
            console.log("Error ", error)
        }
    }
    return (
        <div className="w-full overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="space-y-3 p-4">
                <h2 className="line-clamp-2 text-xl font-semibold">
                    {name}
                </h2>

                <p className="text-lg font-bold text-green-600">
                    ₹{price.toLocaleString()}
                </p>

                <button
                    onClick={() => handleCheckout(id)}
                    className="w-full rounded-md bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800">
                    Buy Now
                </button>
            </div>
        </div>
    );
}