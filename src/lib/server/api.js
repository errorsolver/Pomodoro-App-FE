import { API_URL } from '$env/static/private';

export async function apiFetch(
    endpoint,
    options = {}
) {
    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
}
