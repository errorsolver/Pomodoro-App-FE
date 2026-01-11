import { redirect, fail } from '@sveltejs/kit';
import { AuthService } from '$lib/server/authService';

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');

    // Validasi input
    if (!email || !password) {
      return fail(400, { error: 'Email dan password wajib diisi' });
    }

    try {
      const data = await AuthService.login(email, password);

      // Set access token dan refresh token
      cookies.set('access_token', data.access_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 15 // 15 menit
      });

      cookies.set('refresh_token', data.refresh_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7 // 7 hari
      });

      throw redirect(302, '/home-screen');
    } catch (error) {
      if (error.status) throw error; // Re-throw redirect
      console.error('Login error:', error);
      return fail(401, { error: error.message });
    }
  }
};
