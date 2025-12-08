"use client";

import { useState } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
    const [step, setStep] = useState(1);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Add a product</h2>
                        <p className="text-sm text-gray-500">Add a new product to your store</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-6 flex-1 overflow-y-auto">
                    {/* Stepper */}
                    <div className="flex items-center mb-8">
                        <div className="flex items-center">
                            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium", step >= 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500")}>1</div>
                            <span className={cn("ml-2 text-sm font-medium", step >= 1 ? "text-blue-600" : "text-gray-500")}>Details</span>
                        </div>
                        <div className="mx-4 h-px w-16 bg-gray-200"></div>
                        <div className="flex items-center">
                            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium", step >= 2 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500")}>2</div>
                            <span className={cn("ml-2 text-sm font-medium", step >= 2 ? "text-blue-600" : "text-gray-500")}>Product images</span>
                        </div>
                    </div>

                    {step === 1 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input type="text" placeholder="Enter product name" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                                    <option>Select category</option>
                                    <option>Food</option>
                                    <option>Drinks</option>
                                    <option>Electronics</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input type="text" placeholder="₦ 0.00" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea rows={4} placeholder="Enter product description" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer transition-colors">
                                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                                    <Upload className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">Click to upload or drag and drop</h3>
                                <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            </div>

                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="relative aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50 group">
                                        <button className="absolute top-1 right-1 p-1 bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <X className="h-3 w-3" />
                                        </button>
                                        <div className="h-full w-full flex items-center justify-center">
                                            <ImageIcon className="h-8 w-8 text-gray-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
                    <button
                        onClick={onClose}
                        className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    {step === 1 ? (
                        <button
                            onClick={() => setStep(2)}
                            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={onClose}
                            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm"
                        >
                            Add Product
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
