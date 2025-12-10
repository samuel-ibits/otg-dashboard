"use client";

import { useState } from "react";
import { Plus, MoreVertical, Search, SlidersHorizontal, Image as ImageIcon } from "lucide-react";
import { AddProductModal } from "@/app/components/AddProductModal";
import { ProductDrawer } from "@/app/components/ProductDrawer";
import { DeleteProductModal } from "@/app/components/DeleteProductModal";
import { ActionMenu } from "@/app/components/ActionMenu";

// Mock Data
const products = [
    { id: 1, name: "King Food Burger", price: "₦5,000", type: "Food", created: "28 Jan 2025", status: "Available" },
    { id: 2, name: "King Food Burger", price: "₦5,000", type: "Food", created: "28 Jan 2025", status: "Available" },
    { id: 3, name: "King Food Burger", price: "₦5,000", type: "Food", created: "28 Jan 2025", status: "Available" },
    { id: 4, name: "King Food Burger", price: "₦12,000", type: "Conference space", created: "28 Jan 2025", status: "Available" },
    { id: 5, name: "King Food Burger", price: "₦5,000", type: "Lounge", created: "28 Jan 2025", status: "Available" },
    { id: 6, name: "King Food Burger", price: "₦12,000", type: "Conference hall", created: "28 Jan 2025", status: "Available" },
    { id: 7, name: "King Food Burger", price: "₦5,000", type: "Food", created: "28 Jan 2025", status: "Available" },
    { id: 8, name: "King Food Burger", price: "₦5,000", type: "Food", created: "28 Jan 2025", status: "Available" },
];

export default function ProductsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleRowClick = (product: any) => {
        setSelectedProduct(product);
    };

    const handleDeleteRequest = () => {
        // Close drawer if open, or called directly
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
                    <p className="text-sm text-gray-500">Manage and monitor your products</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <SlidersHorizontal className="h-4 w-4" />
                        Export
                    </button>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm">
                        <Plus className="h-4 w-4" />
                        Add Product
                    </button>
                </div>
            </div>

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
                                <th className="px-6 py-3 font-medium">Product Type</th>
                                <th className="px-6 py-3 font-medium">Date Created</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((product) => (
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
                                    <td className="px-6 py-4 font-medium text-gray-900">{product.price}</td>
                                    <td className="px-6 py-4">{product.type}</td>
                                    <td className="px-6 py-4">{product.created}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-green-600">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                            <span className="text-xs font-medium">{product.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                                        <ActionMenu
                                            onEdit={() => console.log("Edit product", product.id)}
                                            onDelete={() => handleDeleteRequest()}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
                    <button className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        Previous
                    </button>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium text-gray-900">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <button className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        Next
                    </button>
                </div>
            </div>

            <AddProductModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            <ProductDrawer
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
                onDelete={handleDeleteRequest}
            />

            <DeleteProductModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => {
                    console.log("Deleted");
                    setSelectedProduct(null); // Close drawer as well
                }}
            />
        </div>
    );
}
