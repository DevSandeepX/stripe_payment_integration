import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="max-w-7xl mx-auto border-b w-full py-4 mb-10 px-4 md:px-6 flex justify-between gap-6">
            <div className="w-full flex gap-4 items-center">
                <Link href="/" className=" text-base">Home</Link>
                <Link href="/products" className=" text-base">Browes</Link>
                <Link href="/orders" className=" text-base">My Orders</Link>
            </div>
            <div>
                <Link href={"/products/create"}>
                    <button className='px-4 py-1 rounded bg-blue-700 text-white text-base'>Create</button>
                </Link>
            </div>
        </div>
    )
}
