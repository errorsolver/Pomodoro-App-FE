import { AuthService } from '$lib/server/authService';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const accessToken = event.cookies.get('access_token');
  const refreshToken = event.cookies.get('refresh_token');

  // Coba refresh token jika access token tidak ada tapi refresh token ada
  if (!accessToken && refreshToken) {
    try {
      const refreshData = await AuthService.refreshToken(refreshToken);

      event.cookies.set('access_token', refreshData.access_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 15
      });

      event.cookies.set('refresh_token', refreshData.refresh_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7
      });

      event.locals.accessToken = refreshData.access_token;
    } catch (error) {
      console.error('Auto refresh failed:', error);
      event.cookies.delete('access_token', { path: '/' });
      event.cookies.delete('refresh_token', { path: '/' });
    }
  } else if (accessToken) {
    event.locals.accessToken = accessToken;
  }

  // Get user info jika ada token
  if (event.locals.accessToken) {
    try {
      const user = await AuthService.getCurrentUser(event.locals.accessToken);
      event.locals.user = user;
    } catch (error) {
      console.error('Get user failed:', error);
      event.locals.user = null;
    }
  }

  return await resolve(event);
}
