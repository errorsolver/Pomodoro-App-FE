import { redirect, fail } from '@sveltejs/kit';
import { AuthService } from '$lib/server/authService';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const accessToken = cookies.get('access_token');
  const refreshToken = cookies.get('refresh_token');

  if (!accessToken && !refreshToken) {
    throw redirect(302, '/login');
  }

  try {
    // Coba pakai access token dulu
    let token = accessToken;
    
    // Jika access token expired, refresh dulu
    if (!token && refreshToken) {
      const refreshData = await AuthService.refreshToken(refreshToken);
      token = refreshData.access_token;

      // Update cookies
      cookies.set('access_token', refreshData.access_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 15
      });

      cookies.set('refresh_token', refreshData.refresh_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7
      });
    }

    const user = await AuthService.getCurrentUser(token);

    return {
      user
    };
  } catch (error) {
    console.error('Load profile error:', error);
    // Clear cookies dan redirect ke login
    cookies.delete('access_token', { path: '/' });
    cookies.delete('refresh_token', { path: '/' });
    throw redirect(302, '/login');
  }
}

export const actions = {
  update: async ({ request, cookies }) => {
    const accessToken = cookies.get('access_token');

    if (!accessToken) {
      return fail(401, { error: 'Unauthorized' });
    }

    const form = await request.formData();
    const name = form.get('name');
    const email = form.get('email');

    // Validasi input
    if (!name || !email) {
      return fail(400, { error: 'Nama dan email wajib diisi' });
    }

    try {
      const user = await AuthService.updateProfile(accessToken, { name, email });

      return {
        success: true,
        user
      };
    } catch (error) {
      console.error('Update profile error:', error);
      return fail(400, { error: error.message });
    }
  },

  logout: async ({ cookies }) => {
    cookies.delete('access_token', { path: '/' });
    cookies.delete('refresh_token', { path: '/' });
    throw redirect(302, '/login');
  }
};
