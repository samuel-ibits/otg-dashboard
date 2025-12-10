import { StatsCard } from "@/app/components/StatsCard";
import { RevenueChart } from "@/app/components/RevenueChart";
import { RevenueSplitChart } from "@/app/components/RevenueSplitChart";
import { OrdersTable } from "@/app/components/OrdersTable";
import { Users, Wifi, Store } from "lucide-react";
import { Header } from "../components/Header";

const orders = [
  {
    id: "#OTG-98245",
    type: "Wi-Fi",
    subType: "Coffee",
    customer: {
      name: "Sophia Williams",
      handle: "@sophie",
      avatar: "SW",
    },
    amount: "₦12,500",
    date: "28 Jan, 09:20",
  },
  {
    id: "#OTG-98245",
    type: "Wi-Fi",
    subType: "Conference room",
    extra: "+2",
    customer: {
      name: "Emeka Nwasu",
      handle: "@emeka",
      avatar: "EN",
    },
    amount: "₦14,200",
    date: "28 Jan, 09:20",
  },
  {
    id: "#OTG-98245",
    type: "Wi-Fi",
    subType: "Food",
    extra: "Drinks",
    customer: {
      name: "Chinedu Okafor",
      handle: "@chinedu",
      avatar: "CO",
    },
    amount: "₦15,200",
    date: "28 Jan, 09:20",
  },
  {
    id: "#OTG-98245",
    type: "Wi-Fi",
    subType: "Coffee",
    customer: {
      name: "Aisha Bello",
      handle: "@amina",
      avatar: "AB",
    },
    amount: "₦10,000",
    date: "28 Jan, 09:20",
  },
  {
    id: "#OTG-98245",
    type: "Wi-Fi",
    subType: "Lounge",
    extra: "Food +1",
    customer: {
      name: "Tunde Adeyemi",
      handle: "@tunde",
      avatar: "TA",
    },
    amount: "₦17,500",
    date: "28 Jan, 09:20",
  },
];

export default function DashboardPage() {
  return (<>
    <Header />
    <div className="space-y-6">

      {/* Date Filter */}
      <div className="flex items-center gap-2">
        {["12 months", "30 days", "7 days", "24 hours"].map((period, i) => (
          <button
            key={period}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${i === 0
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:bg-white hover:text-gray-900"
              }`}
          >
            {period}
          </button>
        ))}
      </div>

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

      {/* Bottom Section: Top Branches and Orders */}
      {/* Based on the screenshot, Top Branches is a list, and Orders is a table below or separate. 
          The user showed a screenshot with "Orders" table. I will add it below the layout.
      */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Keeping the Total Customers Chart as it was in the code previously if desired, 
                but maybe replace with Orders table as per new requirement? 
                The screenshot with Orders table seems to be the main focus. 
                Let's put the Orders Table here instead of Total Customers if that was a placeholder.
                However, I will put Orders Table below everything to match a typical dashboard flow 
                or replace the "Total Customers" section if it feels right. 
                Actually, let's keep the grid layout and add Orders Table as a full width component below.
            */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
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
                <div
                  key={i}
                  className="flex-1 bg-blue-600 rounded-t-sm"
                  style={{ height: `${h}%` }}
                ></div>
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
            <h3 className="font-semibold text-gray-900 mb-4">
              Top Branches by Performance
            </h3>
            <div className="space-y-4">
              {[
                { name: "CafeOne - Lekki", value: "₦135,600,000" },
                { name: "CafeOne - Ikorodu", value: "₦122,400,000" },
                { name: "CafeOne - Ikeja", value: "₦121,500,000" },
                { name: "CafeOne - VI", value: "₦115,600,000" },
                { name: "CafeOne - Ikoyi", value: "₦105,000,000" },
              ].map((branch, index) => (
                <div
                  key={branch.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 font-bold text-xs text-gray-900">
                      {index + 1}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {branch.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {branch.value}
                      </span>
                    </div>
                  </div>
                  <Store className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table Section */}
      <OrdersTable orders={orders} />
    </div></>
  );
}
