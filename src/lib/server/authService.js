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
  /**
   * Register user baru
   */
  static async register(email, password, full_name, username) {
    const res = await fetch(`${API_ROOT}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, full_name, username })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Registrasi gagal');
    }

    return await res.json();
  }

  /**
   * Login user
   */
  static async login(email, password) {
    const res = await fetch(`${API_ROOT}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Login gagal');
    }

    return await res.json();
  }

  /**
   * Refresh access token
   */
  static async refreshToken(refreshToken) {
    const res = await fetch(`${API_ROOT}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Refresh token gagal');
    }

    return await res.json();
  }

  /**
   * Get current user profile
   */
  static async getCurrentUser(token) {
    const res = await fetch(`${API_ROOT}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Gagal mendapatkan profil');
    }

    return await res.json();
  }

  /**
   * Update current user profile
   */
  static async updateProfile(token, { name, email }) {
    const res = await fetch(`${API_ROOT}/auth/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name, email })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Gagal update profil');
    }

    return await res.json();
  }

  /**
   * Get user profile by ID (public)
   */
  static async getUserProfile(userId) {
    const res = await fetch(`${API_ROOT}/auth/profile/${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'User tidak ditemukan');
    }

    return await res.json();
  }
}
