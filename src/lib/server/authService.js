import { env } from '$env/dynamic/private';

const API_BASE_RAW = env.API_BASE ?? 'http://localhost:8000';
const API_VERSION = env.API_VERSION ?? 'v1';
const API_PREFIX = env.API_PREFIX ?? `/api/${API_VERSION}`;

// If the base already contains an /api path, assume it already points to the API root
let API_ROOT = API_BASE_RAW.replace(/\/$/, '');
if (!/\/api(\/|$)/.test(API_ROOT)) {
  API_ROOT = `${API_ROOT}${API_PREFIX.startsWith('/') ? API_PREFIX : '/' + API_PREFIX}`;
}

/**
 * Auth Service untuk handle semua operasi authentication
 */
export class AuthService {
  // internal helper to make requests and provide clearer errors
  static async request(method, path, body = undefined, headers = {}) {
    try {
      const res = await fetch(`${API_ROOT}${path}`, {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: body === undefined ? undefined : JSON.stringify(body)
      });

      if (!res.ok) {
        let data = {};
        try {
          data = await res.json();
        } catch (e) {
          // ignore parse errors
        }
        const err = new Error(data.detail || data.message || `Request failed with status ${res.status}`);
        err.status = res.status;
        throw err;
      }

      try {
        return await res.json();
      } catch (e) {
        return {};
      }
    } catch (error) {
      const err = new Error(`${error.message}`);
      err.status = 0;
      throw err;
    }
  }

  /**
   * Register user baru
   */
  static async register(email, password, full_name, username) {
    return await AuthService.request('POST', '/auth/register', { email, password, full_name, username });
  }

  /**
   * Login user
   */
  static async login(email, password) {
    return await AuthService.request('POST', '/auth/login', { email, password });
  }

  /**
   * Refresh access token
   */
  static async refreshToken(refreshToken) {
    return await AuthService.request('POST', '/auth/refresh', { refresh_token: refreshToken });
  }

  /**
   * Get current user profile
   */
  static async getCurrentUser(token) {
    return await AuthService.request('GET', '/auth/me', undefined, { Authorization: `Bearer ${token}` });
  }

  /**
   * Update current user profile
   */
  static async updateProfile(token, { name, email }) {
    return await AuthService.request('PUT', '/auth/me', { name, email }, { Authorization: `Bearer ${token}` });
  }

  /**
   * Get user profile by ID (public)
   */
  static async getUserProfile(userId) {
    return await AuthService.request('GET', `/auth/profile/${userId}`);
  }
}
