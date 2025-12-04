"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    Ticket,
    Wifi,
    Package,
    Store,
    BarChart2,
    MessageSquare,
    Settings,
    LogOut
} from "lucide-react";
import { cn } from "@/app/lib/utils";

const sidebarItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Customers", href: "/dashboard/customers", icon: Users },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    { name: "Vouchers", href: "/dashboard/vouchers", icon: Ticket },
    { name: "Wi-Fi", href: "/dashboard/wifi", icon: Wifi },
    { name: "Products", href: "/dashboard/products", icon: Package },
    { name: "Branches", href: "/dashboard/branches", icon: Store },
    { name: "Reports & Analytics", href: "/dashboard/reports", icon: BarChart2 },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col bg-white border-r border-gray-100">
            <div className="flex h-16 items-center px-6 border-b border-gray-50">
                <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
                    {/* Logo Placeholder - Small */}
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs">
                        OTG
                    </div>
                    <span>Cafe One - Lekki</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-3">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="border-t border-gray-100 p-4 space-y-1">
                <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    <Settings className="h-5 w-5" />
                    Settings
                </Link>
                <button
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    <LogOut className="h-5 w-5" />
                    Log out
                </button>

                <div className="mt-4 flex items-center gap-3 px-3 py-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                        WK
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">William Kayode</span>
                        <span className="text-xs text-gray-500">kayode@cafeone.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
