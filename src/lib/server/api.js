import { API_BASE } from '$env/static/private';

export async function apiFetch(
    endpoint,
    options = {}
) {
    return fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
}
