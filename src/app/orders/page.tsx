import OrderCard from '@/features/orders/components/OrderCard'
import { getUserProducts } from '@/features/orders/queries'
import React from 'react'

export default async function MyOrdersPage() {
    const orders = await getUserProducts("1234")

    if (!orders) {
        return (
            <h2>No Order yet.</h2>
        )
    }
    return (
        <div className='w-full '>
            <div className='max-w-7xl mx-auto px-4 md:px-6  space-y-8'>
                <h2 className='font-bold text-lg'> My Orders</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {orders.map((order) => (
                        <OrderCard key={order.id} {...order} />
                    ))}
                </div>
            </div>


        </div>
    )
}
