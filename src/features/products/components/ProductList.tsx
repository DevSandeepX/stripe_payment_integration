import React from 'react'
import { getProducts } from '../queries'
import ProductCard from './ProductCard'

export default async function ProductList({
    title,
}: {
    title: string
}) {
    const products = await getProducts()

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h2 className="text-2xl font-semibold mb-6">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}