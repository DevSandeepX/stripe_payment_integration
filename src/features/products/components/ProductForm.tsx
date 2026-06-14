"use client"

import { useState } from "react"
import { createProductAction } from "../actions";
import { useRouter } from "next/navigation";

export default function ProductForm() {
    const router = useRouter()
    const [data, setData] = useState({
        name: "",
        price: 0,
        fileUrl: ""
    })


    function onChange(e: any) {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    async function onSubmit(values: any) {
        if (!data.name) {
            alert("Name is required");
            return null
        }

        try {
            const { success, message } = await createProductAction({ data });
            if (success) {
                alert(message);
                router.push("/")
            } else {
                alert(message)
            }
        } catch (error) {
            alert(`Error ${error}`)
        }
    }

    return (
        <div className="space-y-6">
            <div className="w-full flex flex-col gap-4">
                <label>Name</label>
                <input
                    value={data.name}
                    name="name"
                    type="text"
                    onChange={onChange}
                    placeholder="Niki Shoose"
                    className="p-2 rounded border border-gray-200 focus:ring-0 focus:outline-0"
                />
            </div>
            <div className="w-full flex flex-col gap-4">
                <label>Price</label>
                <input
                    value={data.price}
                    name="price"
                    type="number"
                    onChange={onChange}
                    placeholder="Niki Shoose"
                    className="p-2 rounded border border-gray-200 focus:ring-0 focus:outline-0"
                />
            </div>
            <div className="w-full flex flex-col gap-4">
                <label>File Url</label>
                <input
                    value={data.fileUrl}
                    name="fileUrl"
                    type="text"
                    onChange={onChange}
                    placeholder="https://www.google.com/product"
                    className="p-2 rounded border border-gray-200 focus:ring-0 focus:outline-0"
                />
            </div>

            <div className="w-full flex justify-end">
                <button type="button" onClick={() => onSubmit(data)} className="bg-blue-700 text-white rounded py-1 px-4">
                    Save
                </button>
            </div>
        </div>
    )
}
