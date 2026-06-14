import ProductForm from '@/features/products/components/ProductForm'
import React from 'react'

export default function CreateProductsPage() {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
            <div className='max-w-3xl'>
                <h2 className='text-2xl lg:text-3xl font-semibold'>Create New Product</h2>
                <p className=' text-sm md:text-base lg:text-lg'>Fill all information and create a new product and improve your bussinues</p>
            </div>
            <div className='shadow p-4 rounded'>
                <ProductForm />
            </div>
        </div>
    )
}
