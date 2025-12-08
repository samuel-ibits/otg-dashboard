"use client";

import { X, Upload, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

interface ProductDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    product: any;
    onDelete: () => void;
}

export function ProductDrawer({ isOpen, onClose, product, onDelete }: ProductDrawerProps) {
    const [activeTab, setActiveTab] = useState("details");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-lg bg-white shadow-xl h-full flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Edit Product</h2>
                        <p className="text-sm text-gray-500">Manage your product details</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="border-b border-gray-100 px-6">
                    <div className="flex space-x-6">
                        <button
                            onClick={() => setActiveTab("details")}
                            className={cn(
                                "py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === "details" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
                            )}
                        >
                            General Details
                        </button>
                        <button
                            onClick={() => setActiveTab("images")}
                            className={cn(
                                "py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === "images" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
                            )}
                        >
                            Product Images
                        </button>
                    </div>
                </div>

                <div className="p-6 flex-1 overflow-y-auto">
                    {activeTab === "details" && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input type="text" defaultValue={product?.name} className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                                    <option>Conference Hall</option>
                                    <option>Food</option>
                                    <option>Drinks</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input type="text" defaultValue={product?.price} className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={4} defaultValue="A spacious hall for your events..." className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                            </div>
                        </div>
                    )}
                    {activeTab === "images" && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="relative aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                                        <div className="h-full w-full flex items-center justify-center">
                                            <ImageIcon className="h-12 w-12 text-gray-300" />
                                        </div>
                                    </div>
                                ))}
                                <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-center aspect-square hover:bg-gray-50 cursor-pointer transition-colors">
                                    <Upload className="h-6 w-6 text-gray-400 mb-1" />
                                    <span className="text-xs text-gray-500">Add Image</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-white sticky bottom-0">
                    <button
                        onClick={onDelete}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                        Delete Product
                    </button>
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
