/**
 * Branch API Service
 * 
 * Handles all branch-related API operations including CRUD operations,
 * search, and filtering.
 */

import { api, buildQueryString, APIResponse, getAuthHeader } from '../api';
import type {
    Branch,
    CreateBranchDTO,
    UpdateBranchDTO,
    BranchQueryParams,
    PaginatedResponse,
} from '../types';

const BRANCH_ENDPOINTS = {
    base: '/branches',
    create: '/branches/create',
    byId: (id: string) => `/branches/${id}`,
};

export const branchService = {
    /**
     * Get all branches with optional search and filtering
     * 
     * @param params - Query parameters (search, cursor, limit)
     * @returns Promise with paginated branches
     */
    async getAll(
        params?: BranchQueryParams
    ): Promise<APIResponse<PaginatedResponse<Branch>>> {
        const queryString = params ? buildQueryString(params) : '';
        return api.get(`${BRANCH_ENDPOINTS.base}${queryString}`, {
            headers: getAuthHeader(),
        });
    },

    /**
     * Get a single branch by ID
     * 
     * @param id - Branch ID
     * @returns Promise with branch data
     */
    async getById(id: string): Promise<APIResponse<Branch>> {
        return api.get(BRANCH_ENDPOINTS.byId(id), {
            headers: getAuthHeader(),
        });
    },

    /**
     * Create a new branch
     * 
     * @param data - Branch creation data
     * @returns Promise with created branch
     */
    async create(data: CreateBranchDTO): Promise<APIResponse<Branch>> {
        return api.post(BRANCH_ENDPOINTS.create, data, {
            headers: getAuthHeader(),
        });
    },

    /**
     * Update an existing branch
     * 
     * @param id - Branch ID
     * @param data - Branch update data
     * @returns Promise with updated branch
     */
    async update(
        id: string,
        data: UpdateBranchDTO
    ): Promise<APIResponse<Branch>> {
        return api.put(BRANCH_ENDPOINTS.byId(id), data, {
            headers: getAuthHeader(),
        });
    },

    /**
     * Delete a branch
     * 
     * @param id - Branch ID
     * @returns Promise with deletion confirmation
     */
    async delete(id: string): Promise<APIResponse<void>> {
        return api.delete(BRANCH_ENDPOINTS.byId(id), {
            headers: getAuthHeader(),
        });
    },

    /**
     * Search branches
     * 
     * @param searchTerm - Search term
     * @param limit - Number of results
     * @returns Promise with search results
     */
    async search(
        searchTerm: string,
        limit: number = 10
    ): Promise<APIResponse<PaginatedResponse<Branch>>> {
        return this.getAll({ search: searchTerm, limit });
    },
};

/**
 * React Hook for managing branches
 *
 * Usage:
 * ```typescript
 * const { branches, loading, error, refetch, createBranch, deleteBranch } = useBranches();
 * ```
 */

// Uncomment to use with React hooks
/*
import { useState, useEffect, useCallback } from 'react';

export function useBranches(params?: BranchQueryParams) {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBranches = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await branchService.getAll(params);
      
      if (response.success && response.data) {
        setBranches(response.data.data);
      } else {
        setError(response.error || 'Failed to fetch branches');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(params)]);

  const createBranch = async (data: CreateBranchDTO) => {
    try {
      const response = await branchService.create(data);
      if (response.success) {
        await fetchBranches(); // Refresh list
        return response.data;
      }
      throw new Error(response.error || 'Failed to create branch');
    } catch (err) {
      throw err;
    }
  };

  const deleteBranch = async (id: string) => {
    try {
      const response = await branchService.delete(id);
      if (response.success) {
        await fetchBranches(); // Refresh list
      } else {
        throw new Error(response.error || 'Failed to delete branch');
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);

  return { 
    branches, 
    loading, 
    error, 
    refetch: fetchBranches,
    createBranch,
    deleteBranch,
  };
}
*/
