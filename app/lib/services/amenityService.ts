import { api, APIResponse } from '../api';

export interface Amenity {
    id: string;
    name: string;
    description?: string;
    icon?: string;
}

export const amenityService = {
    async getGlobal(): Promise<APIResponse<Amenity[]>> {
        return api.get('/amenities/global');
    },

    async getByBranch(branchId: string | number): Promise<APIResponse<Amenity[]>> {
        return api.get(`/amenities/branch/${branchId}`);
    },

    async updateBranchAmenities(branchId: string | number, amenityIds: string[]): Promise<APIResponse<any>> {
        return api.put(`/amenities/branch/${branchId}`, { amenityIds });
    },
};
