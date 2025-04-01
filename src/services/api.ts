
import { Benefit, UserProfile } from "@/data/mockData";

const API_BASE_URL = "http://10.171.1.19:8080";

/**
 * Fetches missed opportunities from the API
 */
export async function fetchMissedOpportunities(): Promise<Benefit[]> {
  try {
    const api = 'benefits-matcher/api/missedOpportunities/{customerId}?customerId=1';
    const response = await fetch(`${API_BASE_URL}/${api}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch missed opportunities: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching missed opportunities:", error);
    // Return empty array in case of error
    return [];
  }
}

/**
 * Fetches similar benefits from the API
 */
export async function fetchSimilarBenefits(): Promise<Benefit[]> {
  try {
    const api = 'benefits-matcher/api/matchBenefits/{customerId}?customerId=1';
    const response = await fetch(`${API_BASE_URL}/${api}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch missed opportunities: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching missed opportunities:", error);
    // Return empty array in case of error
    return [];
  }
}

/**
 * Fetches user profile data
 * Note: You can add this endpoint when available
 */
export async function fetchUserProfile(): Promise<UserProfile | null> {
  // This is a placeholder - you'll need to add the real endpoint
  // For now, returning null to indicate it's not implemented
  return null;
}
