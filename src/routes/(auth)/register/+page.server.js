import { redirect, fail } from '@sveltejs/kit';
import { AuthService } from '$lib/server/authService';

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');
    const full_name = form.get('full_name');
    const username = form.get('username');

    // Validasi input
    if (!email || !password) {
      return fail(400, { error: 'Email dan password wajib diisi' });
    }

    if (password.length < 8) {
      return fail(400, { error: 'Password minimal 8 karakter' });
    }

    try {
      const data = await AuthService.register(email, password, full_name, username);

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
      console.error('Register error:', error);
      return fail(400, { error: error.message });
    }
  }
};
