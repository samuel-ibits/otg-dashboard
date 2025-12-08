"use client";

import { useState } from "react";
import { ArrowLeft, MapPin, Calendar, Clock, MoreVertical, Trash2, Power, Store } from "lucide-react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { BranchActionModal } from "@/app/components/BranchActionModals";

export default function BranchDetailsPage() {
    const [activeTab, setActiveTab] = useState("Orders");
    const [modalType, setModalType] = useState<"deactivate" | "delete" | null>(null);

    const tabs = ["Orders", "Wi-Fi Infrastructure", "Products & Amenities", "Admin & Staff", "Activity log", "Pictures", "Reviews"];

    return (
        <div className="space-y-6">
            {/* Breadcrumb & Title */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/branches" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="h-5 w-5 text-gray-500" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            CafeOne - Ikoyi
                            <span className="text-xs font-normal px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Active</span>
                        </h1>
                        <div className="flex items-center text-sm text-gray-500 gap-2">
                            <span>Enterprise</span>
                            <span>•</span>
                            <span>4.2 (200+)</span>
                            <span>•</span>
                            <span>4.2k followers</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setModalType("delete")}
                        className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 bg-white"
                    >
                        <Trash2 className="h-4 w-4" />
                        Delete Branch
                    </button>
                    <button
                        className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white"
                    >
                        <Store className="h-4 w-4" />
                        Manage Branch
                    </button>
                    <button
                        onClick={() => setModalType("deactivate")}
                        className="flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 shadow-sm"
                    >
                        <Power className="h-4 w-4" />
                        Deactivate Branch
                    </button>
                </div>
            </div>

            {/* Info & Stats */}
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4">Branch Information</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
                                <MapPin className="h-4 w-4 mt-0.5" />
                                <span>Address</span>
                            </div>
                            <p className="pl-6 text-sm font-medium text-gray-900">208 Osborne George Street, Ikoyi</p>
                        </div>
                        <div>
                            <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
                                <MapPin className="h-4 w-4 mt-0.5" />
                                <span>State</span>
                            </div>
                            <p className="pl-6 text-sm font-medium text-gray-900">Lagos</p>
                        </div>
                        <div>
                            <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
                                <Clock className="h-4 w-4 mt-0.5" />
                                <span>Last login</span>
                            </div>
                            <p className="pl-6 text-sm font-medium text-gray-900">25 Oct, 4:43am</p>
                        </div>
                        <div>
                            <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
                                <Calendar className="h-4 w-4 mt-0.5" />
                                <span>Registration Date</span>
                            </div>
                            <p className="pl-6 text-sm font-medium text-gray-900">12 July, 2022</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="p-2 bg-gray-100 rounded-lg text-gray-500"><Store className="h-5 w-5" /></span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Revenue</p>
                            <h2 className="text-2xl font-bold text-gray-900">₦135,600,000</h2>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="p-2 bg-gray-100 rounded-lg text-gray-500"><Store className="h-5 w-5" /></span>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+2.4%</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Active Customers</p>
                            <h2 className="text-2xl font-bold text-gray-900">1,234</h2>
                        </div>
                    </div>

                    {/* Placeholder for larger chart or more stats */}
                    <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100 min-h-[160px] flex items-center justify-center text-gray-400">
                        <p>Performance Chart Placeholder</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="border-b border-gray-100 px-6 overflow-x-auto">
                    <div className="flex space-x-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                                    activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="p-6">
                    <div className="min-h-[300px] flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-lg">
                        {activeTab} Content
                    </div>
                </div>
            </div>

            <BranchActionModal
                isOpen={!!modalType}
                onClose={() => setModalType(null)}
                onConfirm={() => console.log(modalType)}
                type={modalType || "deactivate"}
                title={modalType === "delete" ? "Delete Branch" : "Deactivate Branch"}
                description={modalType === "delete"
                    ? `You're about to delete CafeOne - Ikoyi. This is a permanent action and can't be undone.`
                    : `Are you sure you want to deactivate CafeOne - Ikoyi? Users won't be able to access it.`
                }
                confirmText={modalType === "delete" ? "Delete Branch" : "Deactivate Branch"}
            />
        </div>
    );
}
