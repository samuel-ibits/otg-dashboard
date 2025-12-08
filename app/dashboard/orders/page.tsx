"use client";

import { useState } from "react";
import { OrdersTable } from "@/app/components/OrdersTable";
import { Tabs } from "@/app/components/Tabs";
import { EmptyState } from "@/app/components/EmptyState";

const allOrders = [
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Coffee",
        customer: { name: "Sophia Williams", handle: "@sophie", avatar: "SW" },
        amount: "₦12,500",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Conference room",
        extra: "+2",
        customer: { name: "Emeka Nwafor", handle: "@emeka", avatar: "EN" },
        amount: "₦14,200",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Food",
        extra: "Drinks",
        customer: { name: "Chinedu Okafor", handle: "@chinedu", avatar: "CO" },
        amount: "₦5,200",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Coffee",
        customer: { name: "Amina Bello", handle: "@amina", avatar: "AB" },
        amount: "₦10,000",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Lounge",
        extra: "Food +1",
        customer: { name: "Tunde Adeyemi", handle: "@tunde", avatar: "TA" },
        amount: "₦17,500",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Coffee",
        customer: { name: "Fatima Abdullahi", handle: "@fatima", avatar: "FA" },
        amount: "₦18,750",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Coffee",
        customer: { name: "Ifeoma Uche", handle: "@ifeoma", avatar: "IU" },
        amount: "₦15,000",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Coffee",
        customer: { name: "Obinna Eze", handle: "@obinna", avatar: "OE" },
        amount: "₦18,500",
        date: "28 Jan, 09:20",
        status: "new",
    },
    {
        id: "#OTG-98245",
        type: "Wi-Fi",
        subType: "Coffee",
        customer: { name: "Zainab Mohammed", handle: "@zainab", avatar: "ZM" },
        amount: "₦20,500",
        date: "28 Jan, 09:20",
        status: "new",
    },
];

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState("new");

    const filteredOrders = allOrders.filter(order => order.status === activeTab);

    // Mock counts
    const counts = {
        new: allOrders.filter(o => o.status === 'new').length,
        ongoing: allOrders.filter(o => o.status === 'ongoing').length,
        completed: allOrders.filter(o => o.status === 'completed').length,
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
                <p className="text-sm text-gray-500">Manage and monitor your orders</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-1">
                <Tabs
                    tabs={[
                        { label: `New orders (${counts.new})`, value: "new" },
                        { label: `Ongoing orders (${counts.ongoing})`, value: "ongoing" },
                        { label: `Completed orders (${counts.completed})`, value: "completed" },
                    ]}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    className="px-4"
                />
            </div>

            {filteredOrders.length > 0 ? (
                <OrdersTable orders={filteredOrders} />
            ) : (
                <div className="bg-white rounded-xl border border-gray-100">
                    <EmptyState
                        title="No orders yet"
                        description="Your orders will show up here when you have metrics."
                    />
                </div>
            )}
        </div>
    );
}
