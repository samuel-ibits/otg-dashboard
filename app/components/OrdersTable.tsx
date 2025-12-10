"use client";

import { cn } from "@/app/lib/utils";

import { ActionMenu } from "./ActionMenu";
import { Search, Filter } from "lucide-react";

interface Order {
    id: string;
    type: string;
    subType: string;
    extra?: string;
    customer: {
        name: string;
        handle: string;
        avatar: string;
    };
    amount: string;
    date: string;
}

interface OrdersTableProps {
    orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">Orders</h3>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Filter className="h-4 w-4" />
                        Filters
                    </button>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-full w-64 rounded-lg border border-gray-200 pl-10 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-3 font-medium">S/N</th>
                            <th className="px-6 py-3 font-medium">Order ID</th>
                            <th className="px-6 py-3 font-medium">Order type</th>
                            <th className="px-6 py-3 font-medium">Customers</th>
                            <th className="px-6 py-3 font-medium">Amount</th>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                            {order.type}
                                        </span>
                                        <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                            {order.subType}
                                        </span>
                                        {order.extra && (
                                            <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                                {order.extra}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-medium text-orange-600">
                                            {order.customer.avatar}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">{order.customer.name}</span>
                                            <span className="text-xs text-gray-500">{order.customer.handle}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{order.amount}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <ActionMenu
                                        onEdit={() => console.log("Edit order", order.id)}
                                        onDelete={() => console.log("Delete order", order.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* ... (existing footer) */}
        </div>
    );
}
