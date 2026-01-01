export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || process.env.EXPO_PUBLIC_API_URL_WEB;

export const API_ENDPOINTS = {
  prayspots: `${API_BASE_URL}/prayspots`,
};
