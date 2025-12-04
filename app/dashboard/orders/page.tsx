import { OrdersTable } from "@/app/components/OrdersTable";

export default function OrdersPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
                <p className="text-sm text-gray-500">Manage and view all your orders.</p>
            </div>
            <OrdersTable />
        </div>
    );
}
