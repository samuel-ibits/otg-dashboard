"use client";

import { User, Lock, UserPlus, FileText, Tag, Image as ImageIcon, Video, RefreshCw } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface ActivityLogItem {
    id: string;
    type: 'password_reset' | 'new_staff' | 'price_change' | 'new_product' | 'images_updated' | 'description_updated' | 'login';
    title: string;
    description?: string;
    meta?: string;
    timestamp: string;
    user?: string;
}

// Mock Data matching the image
const MOCK_ACTIVITIES: ActivityLogItem[] = [
    {
        id: '1',
        type: 'password_reset',
        title: 'Password Reset',
        description: 'Women\'s Summer Dress - Blue\nStock: +150 units added',
        timestamp: '11:30 AM | 11 MAY 2025',
    },
    {
        id: '2',
        type: 'new_staff',
        title: 'New staff added',
        description: 'Support',
        meta: 'Added Elizabeth (elizabeth@cafeone.com) as a support',
        timestamp: '11:30 AM | 11 MAY 2025',
    },
    {
        id: '3',
        type: 'price_change',
        title: 'Price Change',
        description: 'Wi-Fi Subscription: Daily',
        meta: '₦2,500 -> ₦3,000',
        timestamp: '11:30 AM',
    },
    {
        id: '4',
        type: 'new_product',
        title: 'New Product Added',
        description: 'King Size Burger',
        meta: 'Listed in Food category',
        timestamp: '11:30 AM',
    },
    {
        id: '5',
        type: 'images_updated',
        title: 'Product Images Updated',
        description: 'Conference room',
        meta: '5 new images added',
        timestamp: '11:30 AM',
    },
    {
        id: '6',
        type: 'description_updated',
        title: 'Branch Description Updated',
        description: 'Added new bio',
        meta: 'Added picture/video',
        timestamp: '11:30 AM',
    },
    {
        id: '7',
        type: 'login',
        title: 'Account login',
        timestamp: '11:30 AM | 11 MAY 2025',
    },
];

const getActivityIcon = (type: ActivityLogItem['type']) => {
    switch (type) {
        case 'password_reset': return <User className="h-4 w-4 text-blue-600" />;
        case 'new_staff': return <UserPlus className="h-4 w-4 text-blue-600" />;
        case 'price_change': return <Tag className="h-4 w-4 text-blue-600" />;
        case 'new_product': return <FileText className="h-4 w-4 text-blue-600" />;
        case 'images_updated': return <ImageIcon className="h-4 w-4 text-blue-600" />;
        case 'description_updated': return <Video className="h-4 w-4 text-blue-600" />; // Or pen
        case 'login': return <User className="h-4 w-4 text-blue-600" />;
        default: return <RefreshCw className="h-4 w-4 text-blue-600" />;
    }
};

export function ActivityLog() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Activity log</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-8 pr-4 py-2 border rounded-md text-sm w-64"
                    />
                    {/* Search Icon placeholder */}
                </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {MOCK_ACTIVITIES.map((item) => (
                    <div key={item.id} className="relative flex items-start group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-100 bg-blue-50 shrink-0 z-10">
                            {getActivityIcon(item.type)}
                        </div>
                        <div className="ml-6 flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                                    {item.description && (
                                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                    )}
                                    {item.meta && (
                                        <p className="text-xs text-gray-500 mt-0.5">{item.meta}</p>
                                    )}
                                </div>
                                <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{item.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
