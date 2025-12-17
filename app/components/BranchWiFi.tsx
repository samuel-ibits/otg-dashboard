"use client";

import { useState } from "react";
import { Wifi, Eye } from "lucide-react";
import { WiFiDrawer } from "@/app/components/WiFiDrawer";

// Mock Data
const MOCK_WIFI_PLANS = [
    { id: '1', name: 'Daily - Unlimited', price: '2,000', speed: '50 Mbps', status: 'active' },
    { id: '2', name: 'Weekly - Unlimited', price: '10,000', speed: '50 Mbps', status: 'active' },
];

export function BranchWiFi() {
    const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleRowClick = (plan: any) => {
        setSelectedPlan(plan);
        setIsDrawerOpen(true);
    };

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Wifi className="h-4 w-4" />
                    Wi-Fi Infrastructure
                </h3>
            </div>

            <div className="p-6 grid gap-4">
                {MOCK_WIFI_PLANS.map((plan) => (
                    <div
                        key={plan.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:border-blue-200 hover:bg-blue-50 cursor-pointer transition-all"
                        onClick={() => handleRowClick(plan)}
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Wifi className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">{plan.name}</h4>
                                <p className="text-sm text-gray-500">{plan.speed} • ₦{plan.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {plan.status}
                            </span>
                            <Eye className="h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>

            <WiFiDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                plan={selectedPlan}
            />
        </div>
    );
}
