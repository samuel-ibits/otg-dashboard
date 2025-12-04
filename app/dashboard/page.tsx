import { StatsCard } from "@/app/components/StatsCard";
import { RevenueChart } from "@/app/components/RevenueChart";
import { RevenueSplitChart } from "@/app/components/RevenueSplitChart";
import { OrdersTable } from "@/app/components/OrdersTable";
import { Users, Wifi, Store } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Revenue"
                    value="₦135,600,000"
                    change="2.4%"
                    changeType="positive"
                />
                <StatsCard
                    title="Active Customers"
                    value="1,234"
                    icon={Users}
                    change="2.4%"
                    changeType="positive"
                />
                <StatsCard
                    title="Active Wi-Fi Sessions"
                    value="22"
                    icon={Wifi}
                    change="2.4%"
                    changeType="positive"
                />
                {/* Placeholder for Top Branches or similar if needed, design shows 3 cards + charts below */}
                {/* Actually design shows 3 top cards, then charts. Let's stick to design. */}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>
                <div>
                    <RevenueSplitChart />
                </div>
            </div>

            {/* Bottom Section: Orders and Top Branches */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    {/* Orders Table is not strictly in the screenshot of the dashboard overview, 
                but there is a "General Overview" and then "Orders" in the sidebar.
                However, the second screenshot shows "General Overview" with charts and then "Top Branches by Performance".
                Wait, the second screenshot is "General Overview" but it has "Nothing to see here yet" on the right?
                Ah, the first screenshot has "Revenue growth" and "Revenue split".
                The third screenshot shows "Orders".
                
                Let's look at the first screenshot again.
                It has:
                - 3 Stats cards (Total Revenue, Active Customers, Active Wi-Fi Sessions)
                - Revenue growth chart (wide)
                - Revenue split chart (donut)
                - Top Branches by Performance (list)
                
                The third screenshot shows the Orders table.
                
                I should implement the "Top Branches" component for the dashboard page.
                And maybe put the Orders table on a separate page or below if requested.
                The user asked for "these screens".
                Screen 1: Login.
                Screen 2: Dashboard Overview (Stats + Charts + Top Branches).
                Screen 3: Orders List (implied by the table screenshot).
                
                I'll implement the Top Branches component and put it in the dashboard page.
                I'll also create the Orders page since I already made the table.
            */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-900">Total Customers</h3>
                                <div className="mt-1 flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-gray-900">64</span>
                                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                                        2.4%
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500">Avg. per month</p>
                            </div>
                        </div>
                        {/* Simple Bar Chart for Total Customers */}
                        <div className="flex items-end gap-2 h-32">
                            {[40, 60, 45, 70, 50, 60, 80, 55, 90, 65, 85, 40].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-600 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-400">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                            <span>Aug</span>
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                            <span>Dec</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4">Top Branches by Performance</h3>
                        <div className="space-y-4">
                            {[
                                { name: "CafeOne - Lekki", value: "₦135,600,000" },
                                { name: "CafeOne - Ikorodu", value: "₦122,400,000" },
                                { name: "CafeOne - Ikeja", value: "₦121,500,000" },
                                { name: "CafeOne - VI", value: "₦115,600,000" },
                                { name: "CafeOne - Ikoyi", value: "₦105,000,000" },
                            ].map((branch, index) => (
                                <div key={branch.name} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 font-bold text-xs text-gray-900">
                                            {index + 1}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900">{branch.name}</span>
                                            <span className="text-xs text-gray-500">{branch.value}</span>
                                        </div>
                                    </div>
                                    <Store className="h-4 w-4 text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
