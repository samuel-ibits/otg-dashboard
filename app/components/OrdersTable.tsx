"use client";

import { cn } from "@/app/lib/utils";

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
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        Filters
                    </button>
                    <button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        Search
                    </button>
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
                                    <button className="text-gray-400 hover:text-gray-600">
                                        ...
                                    </button>
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
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <button className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                    Next
                </button>
            </div>
        </div>
    );
}
