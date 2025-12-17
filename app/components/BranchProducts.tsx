"use client";

import { useState } from "react";
import { Plus, SlidersHorizontal, Search, Image as ImageIcon } from "lucide-react";
import { ProductDrawer } from "@/app/components/ProductDrawer";
import type { Product } from "@/app/lib/types";

// Mock Product Data for display (since we don't have branch.products yet)
const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "King Size Burger",
        price: 3500,
        category: "Food",
        createdAt: "2024-05-11T10:30:00Z",
        status: "active",
        branchAmenityId: "1",
        description: "Delicious king size burger",
        meta: {},
        stock: 50
    },
    {
        id: "2",
        name: "Conference Hall",
        price: 50000,
        category: "Space",
        createdAt: "2024-05-10T09:15:00Z",
        status: "active",
        branchAmenityId: "2",
        description: "Large conference hall for events",
        meta: {},
        stock: 1
    }
];

export function BranchProducts() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleRowClick = (product: Product) => {
        setSelectedProduct(product);
        setIsDrawerOpen(true);
    };

    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">Products & Amenities</h3>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                    </button>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-8 max-w-[200px] rounded-md border border-gray-200 pl-9 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-3 font-medium">Product name</th>
                            <th className="px-6 py-3 font-medium">Price</th>
                            <th className="px-6 py-3 font-medium">Category</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {MOCK_PRODUCTS.map((product) => (
                            <tr
                                key={product.id}
                                className="hover:bg-gray-50 cursor-pointer transition-colors"
                                onClick={() => handleRowClick(product)}
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                                            <ImageIcon className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <span className="font-medium text-gray-900">{product.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">₦{Number(product.price).toLocaleString()}</td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {product.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedProduct && (
                <ProductDrawer
                    isOpen={isDrawerOpen}
                    onClose={() => {
                        setIsDrawerOpen(false);
                        setSelectedProduct(null);
                    }}
                    product={selectedProduct}
                    onDelete={() => {
                        console.log("Delete product", selectedProduct.id);
                        setIsDrawerOpen(false);
                    }}
                />
            )}
        </div>
    );
}
