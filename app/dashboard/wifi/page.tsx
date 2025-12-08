"use client";

import { useState } from "react";
import { Plus, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { Switch } from "@/app/components/ui/switch";
import { WiFiDrawer } from "@/app/components/WiFiDrawer";

const wifiPlans = [
    { id: 1, name: "Daily - Unlimited", price: "₦ 2,000", timeLimit: "Unlimited", dataLimit: "Unlimited", speed: "50 Mbps", devices: 2, status: true },
    { id: 2, name: "Weekly - Standard", price: "₦ 5,000", timeLimit: "7 Days", dataLimit: "10 GB", speed: "20 Mbps", devices: 2, status: true },
    { id: 3, name: "Monthly - Pro", price: "₦ 15,000", timeLimit: "30 Days", dataLimit: "Unlimited", speed: "100 Mbps", devices: 5, status: false },
];

export default function WiFiPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleEdit = (plan: any) => {
        setSelectedPlan(plan);
        setIsDrawerOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Wi-Fi</h1>
                    <p className="text-sm text-gray-500">Manage your Wi-Fi plans and sessions</p>
                </div>
                <button className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm">
                    <Plus className="h-4 w-4" />
                    Create Plan
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-500">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Plan Name</th>
                                <th className="px-6 py-4 font-medium">Price</th>
                                <th className="px-6 py-4 font-medium">Time Limit</th>
                                <th className="px-6 py-4 font-medium">Data Limit</th>
                                <th className="px-6 py-4 font-medium">Speed (Up/Down)</th>
                                <th className="px-6 py-4 font-medium">Active</th>
                                <th className="px-6 py-4 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {wifiPlans.map((plan) => (
                                <tr key={plan.id} className="hover:bg-gray-50 group">
                                    <td className="px-6 py-4 font-medium text-gray-900">{plan.name}</td>
                                    <td className="px-6 py-4">{plan.price}</td>
                                    <td className="px-6 py-4">{plan.timeLimit}</td>
                                    <td className="px-6 py-4">{plan.dataLimit}</td>
                                    <td className="px-6 py-4">{plan.speed}</td>
                                    <td className="px-6 py-4">
                                        <Switch checked={plan.status} />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => handleEdit(plan)} className="p-1 hover:bg-gray-100 rounded text-gray-500">
                                                <Edit2 className="h-4 w-4" />
                                            </button>
                                            <button className="p-1 hover:bg-red-50 rounded text-red-500">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <WiFiDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                plan={selectedPlan}
            />
        </div>
    );
}
