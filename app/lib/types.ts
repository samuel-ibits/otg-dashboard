/**
 * TypeScript Types and Interfaces for API Integration
 */

// ============================================
// Common Types
// ============================================

export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        itemsPerPage: number;
    };
}

export interface ApiError {
    message: string;
    code?: string;
    statusCode?: number;
    details?: any;
}

// ============================================
// Router Types
// ============================================

export interface Router {
    id: string | number;
    name: string;
    password: string;
    connections: number;
    status: boolean;
    maxConnections?: number;
    ipAddress?: string;
    macAddress?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateRouterDTO {
    name: string;
    password: string;
    maxConnections?: number;
    ipAddress?: string;
    macAddress?: string;
}

export interface UpdateRouterDTO extends Partial<CreateRouterDTO> {
    status?: boolean;
    connections?: number;
}

// ============================================
// Subscription Types
// ============================================

export interface Subscription {
    id: string | number;
    type: string;
    speed: string;
    duration: string;
    amount: string;
    dateAdded: string;
    status?: 'active' | 'inactive' | 'expired';
    description?: string;
}

export interface CreateSubscriptionDTO {
    type: string;
    speed: string;
    duration: string;
    amount: string;
    description?: string;
}

export interface UpdateSubscriptionDTO extends Partial<CreateSubscriptionDTO> {
    status?: 'active' | 'inactive' | 'expired';
}

// ============================================
// Product Types
// ============================================

export interface Product {
    id: string | number;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'active' | 'inactive';
    description?: string;
    imageUrl?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateProductDTO {
    name: string;
    category: string;
    price: number;
    stock: number;
    description?: string;
    imageUrl?: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
    status?: 'active' | 'inactive';
}

// ============================================
// Order Types
// ============================================

export interface Order {
    id: string | number;
    customerId: string | number;
    customerName: string;
    items: OrderItem[];
    totalAmount: number;
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
    createdAt: string;
    updatedAt?: string;
}

export interface OrderItem {
    productId: string | number;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
}

export interface CreateOrderDTO {
    customerId: string | number;
    items: Array<{
        productId: string | number;
        quantity: number;
    }>;
    paymentMethod?: string;
}

export interface UpdateOrderDTO {
    status?: Order['status'];
    paymentStatus?: Order['paymentStatus'];
}

// ============================================
// Customer Types
// ============================================

export interface Customer {
    id: string | number;
    name: string;
    email: string;
    phone: string;
    address?: string;
    totalOrders?: number;
    totalSpent?: number;
    status: 'active' | 'inactive';
    createdAt: string;
    updatedAt?: string;
}

export interface CreateCustomerDTO {
    name: string;
    email: string;
    phone: string;
    address?: string;
}

export interface UpdateCustomerDTO extends Partial<CreateCustomerDTO> {
    status?: 'active' | 'inactive';
}

// ============================================
// Branch Types
// ============================================

export interface WorkingHours {
    open: string | null;
    close: string | null;
}

export interface BranchStaff {
    fullName: string;
    email: string;
    role: 'admin' | 'receptionist' | 'cashier' | string;
}

export interface Branch {
    id: string;
    name: string;
    fullAddress: string;
    description?: string;
    streetAddress: string;
    state: string;
    country: string;
    city: string;
    working_hours: {
        monday: WorkingHours;
        tuesday: WorkingHours;
        wednesday: WorkingHours;
        thursday: WorkingHours;
        friday: WorkingHours;
        saturday: WorkingHours;
        sunday: WorkingHours;
    };
    amenities: string[];
    staff: BranchStaff[];
    status?: 'active' | 'inactive';
    created_at?: string;
    updated_at?: string;
}

export interface CreateBranchDTO {
    name: string;
    fullAddress: string;
    description?: string;
    streetAddress: string;
    state: string;
    country: string;
    city: string;
    working_hours: {
        monday: WorkingHours;
        tuesday: WorkingHours;
        wednesday: WorkingHours;
        thursday: WorkingHours;
        friday: WorkingHours;
        saturday: WorkingHours;
        sunday: WorkingHours;
    };
    amenities: string[];
    staff: BranchStaff[];
}

export interface UpdateBranchDTO extends Partial<CreateBranchDTO> {
    status?: 'active' | 'inactive';
}

export interface BranchQueryParams extends PaginationParams {
    search?: string;
    cursor?: string;
    limit?: number;
}

// ============================================
// Analytics/Reports Types
// ============================================

export interface SalesReport {
    period: string;
    totalSales: number;
    totalOrders: number;
    averageOrderValue: number;
    topProducts: Array<{
        productId: string | number;
        productName: string;
        quantity: number;
        revenue: number;
    }>;
}

export interface CustomerReport {
    totalCustomers: number;
    newCustomers: number;
    activeCustomers: number;
    topCustomers: Array<{
        customerId: string | number;
        customerName: string;
        totalOrders: number;
        totalSpent: number;
    }>;
}

export interface WifiReport {
    totalRouters: number;
    activeRouters: number;
    totalConnections: number;
    subscriptionStats: {
        active: number;
        expired: number;
        revenue: number;
    };
}

// ============================================
// Authentication Types
// ============================================

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    token?: string;
    user?: {
        id: string | number;
        email: string;
        name: string;
        role: string;
    };
    message?: string;
}

export interface User {
    id: string | number;
    email: string;
    name: string;
    role: 'admin' | 'manager' | 'staff';
    status: 'active' | 'inactive';
    createdAt?: string;
}
