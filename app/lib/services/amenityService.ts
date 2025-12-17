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
};
