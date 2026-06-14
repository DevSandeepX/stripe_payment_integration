import ProductCard from '@/features/products/components/ProductCard';
import { getProducts } from '@/features/products/queries'
import React from 'react'

export default async function ProductsList() {
    const products = await getProducts();

    if (!products) {
        return (
            <h2>No Products Aviable</h2>
        )
    }

    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 space-y-8'>
                <div className='max-w-3xl'>
                    <h2 className='text-2xl font-bold'>Browes Products | Sandeep.devs Products</h2>
                    <p className='text-sm md:text-base'>
                        Explore more Product to tak a quick decissions
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
