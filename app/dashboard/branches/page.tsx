"use client";

import { useState } from "react";
import { Plus, MoreVertical, Search, SlidersHorizontal, MapPin } from "lucide-react";
import Link from "next/link";
import { AddBranchModal } from "@/app/components/AddBranchModal";
import { BranchActionModal } from "@/app/components/BranchActionModals";
import { useRouter } from "next/navigation";

// Mock Data
const branches = [
    { id: 1, name: "CafeOne - Yaba", admin: "William Kayode Davin", location: "Lagos", created: "28 Jan 2025", status: "Active" },
    { id: 2, name: "CafeOne - Ikoyi", admin: "Agbenreole Road Trans...", location: "Lagos", created: "28 Jan 2025", status: "Active" },
    { id: 3, name: "CafeOne - VI", admin: "William Kayode Davin", location: "Lagos", created: "28 Jan 2025", status: "Active" },
    { id: 4, name: "CafeOne - Ije", admin: "William Kayode Davin", location: "Ogun", created: "28 Jan 2025", status: "Active" },
    { id: 5, name: "CafeOne - Gwagwalada", admin: "William Kayode Davin", location: "Abuja", created: "28 Jan 2025", status: "Active" },
    { id: 6, name: "CafeOne - Area 1", admin: "William Kayode Davin", location: "Abuja", created: "28 Jan 2025", status: "Active" },
    { id: 7, name: "CafeOne - Wuse 2", admin: "William Kayode Davin", location: "Abuja", created: "28 Jan 2025", status: "Active" },
];

export default function BranchesPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [activeActionId, setActiveActionId] = useState<number | null>(null);

    // Action Modals State
    const [modalType, setModalType] = useState<"deactivate" | "delete" | null>(null);
    const [actionBranch, setActionBranch] = useState<any>(null);

    const router = useRouter();

    const handleActionClick = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        setActiveActionId(activeActionId === id ? null : id);
    };

    const openActionModal = (e: React.MouseEvent, type: "deactivate" | "delete", branch: any) => {
        e.stopPropagation();
        setModalType(type);
        setActionBranch(branch);
        setActiveActionId(null);
    };

    return (
        <div className="space-y-6" onClick={() => setActiveActionId(null)}>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Branches</h1>
                    <p className="text-sm text-gray-500">Manage and monitor branches activity</p>
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
                        Add Branch
                    </button>
                </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                    <h3 className="font-semibold text-gray-900">Branches</h3>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                            <SlidersHorizontal className="h-4 w-4" />
                            Filters
                        </button>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="h-8 w-64 rounded-md border border-gray-200 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-500">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-6 py-3 font-medium">S/N</th>
                                <th className="px-6 py-3 font-medium">Branch name</th>
                                <th className="px-6 py-3 font-medium">Admin</th>
                                <th className="px-6 py-3 font-medium">Location</th>
                                <th className="px-6 py-3 font-medium">Date Created</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {branches.map((branch, index) => (
                                <tr
                                    key={branch.id}
                                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                                    onClick={() => router.push(`/dashboard/branches/${branch.id}`)}
                                >
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{branch.name}</td>
                                    <td className="px-6 py-4">{branch.admin}</td>
                                    <td className="px-6 py-4">{branch.location}</td>
                                    <td className="px-6 py-4">{branch.created}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1.5 text-green-600">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                            <span className="text-xs font-medium">{branch.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right relative">
                                        <button
                                            onClick={(e) => handleActionClick(e, branch.id)}
                                            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                                        >
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                        {activeActionId === branch.id && (
                                            <div className="absolute right-0 top-10 w-48 rounded-md border border-gray-100 bg-white shadow-lg z-20 overflow-hidden">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); router.push(`/dashboard/branches/${branch.id}`); }}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    View Branch
                                                </button>
                                                <button
                                                    onClick={(e) => openActionModal(e, "deactivate", branch)}
                                                    className="w-full text-left px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-50"
                                                >
                                                    Deactivate
                                                </button>
                                                <button
                                                    onClick={(e) => openActionModal(e, "delete", branch)}
                                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddBranchModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            {/* Reusable Action Modal */}
            <BranchActionModal
                isOpen={!!modalType}
                onClose={() => setModalType(null)}
                onConfirm={() => console.log(modalType, actionBranch?.id)}
                type={modalType || "deactivate"}
                title={modalType === "delete" ? "Delete Branch" : "Deactivate Branch"}
                description={modalType === "delete"
                    ? `You're about to delete ${actionBranch?.name}. This is a permanent action and can't be undone.`
                    : `Are you sure you want to deactivate ${actionBranch?.name}? Users won't be able to access it.`
                }
                confirmText={modalType === "delete" ? "Delete Branch" : "Deactivate Branch"}
            />
        </div>
    );
}
