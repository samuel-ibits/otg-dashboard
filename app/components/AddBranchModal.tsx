"use client";

import { X } from "lucide-react";
import { useState, FormEvent } from "react";
import { branchService } from "@/app/lib/services/branchService";
import type { CreateBranchDTO, WorkingHours } from "@/app/lib/types";

interface AddBranchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

const defaultWorkingHours: WorkingHours = { open: "09:00", close: "18:00" };
const closedDay: WorkingHours = { open: null, close: null };

export function AddBranchModal({ isOpen, onClose, onSuccess }: AddBranchModalProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        fullAddress: "",
        description: "",
        streetAddress: "",
        city: "",
        state: "",
        country: "Nigeria",
        adminName: "",
        adminEmail: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const branchData: CreateBranchDTO = {
                name: formData.name,
                fullAddress: formData.fullAddress,
                description: formData.description,
                streetAddress: formData.streetAddress,
                city: formData.city,
                state: formData.state,
                country: formData.country,
                working_hours: {
                    monday: defaultWorkingHours,
                    tuesday: defaultWorkingHours,
                    wednesday: defaultWorkingHours,
                    thursday: defaultWorkingHours,
                    friday: defaultWorkingHours,
                    saturday: { open: "10:00", close: "15:00" },
                    sunday: closedDay,
                },
                amenities: [],
                staff: formData.adminName && formData.adminEmail ? [
                    {
                        fullName: formData.adminName,
                        email: formData.adminEmail,
                        role: "admin",
                    }
                ] : [],
            };

            const response = await branchService.create(branchData);

            if (response.success) {
                // Reset form
                setFormData({
                    name: "",
                    fullAddress: "",
                    description: "",
                    streetAddress: "",
                    city: "",
                    state: "",
                    country: "Nigeria",
                    adminName: "",
                    adminEmail: "",
                });
                onSuccess?.();
                onClose();
            } else {
                setError(response.error || "Failed to create branch");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Add a Branch</h2>
                        <p className="text-sm text-gray-500">Create and monitor branch activity</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    <div className="p-6 space-y-4 overflow-y-auto">
                        {error && (
                            <div className="rounded-md bg-red-50 border border-red-200 p-3">
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Branch Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    placeholder="e.g., Victoria Island Branch"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullAddress}
                                    onChange={(e) => handleChange("fullAddress", e.target.value)}
                                    placeholder="e.g., 23 Awolowo Road, Victoria Island, Lagos"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Street Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.streetAddress}
                                    onChange={(e) => handleChange("streetAddress", e.target.value)}
                                    placeholder="e.g., 23 Awolowo Road"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.city}
                                    onChange={(e) => handleChange("city", e.target.value)}
                                    placeholder="e.g., Victoria Island"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    State <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.state}
                                    onChange={(e) => handleChange("state", e.target.value)}
                                    placeholder="e.g., Lagos"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.country}
                                    onChange={(e) => handleChange("country", e.target.value)}
                                    placeholder="Nigeria"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleChange("description", e.target.value)}
                                    placeholder="Brief description of the branch"
                                    rows={2}
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div className="col-span-2 border-t border-gray-200 pt-4 mt-2">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Branch Admin (Optional)</h3>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Admin Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.adminName}
                                    onChange={(e) => handleChange("adminName", e.target.value)}
                                    placeholder="e.g., Alice Johnson"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Admin Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.adminEmail}
                                    onChange={(e) => handleChange("adminEmail", e.target.value)}
                                    placeholder="e.g., alice@example.com"
                                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                            <p className="text-xs text-blue-800">
                                <strong>Note:</strong> Default working hours will be set to Mon-Fri (9:00-18:00), Sat (10:00-15:00), and closed on Sunday.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {loading && (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            )}
                            {loading ? "Creating..." : "Add Branch"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
