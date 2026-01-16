import { API_BASE } from '$env/static/private';

export async function apiFetch(
    endpoint,
    options = {}
) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });

    let data = {};
    try {
        data = await res.json();
    } catch (e) {
        // ignore parse errors (empty body, non-json, etc.)
    }

    if (!res.ok) {
        // Normalize error message so objects/arrays don't become "[object Object]"
        let message = `Request failed with status ${res.status}`;
        if (data) {
            if (typeof data.detail === 'string') {
                message = data.detail;
            } else if (Array.isArray(data.detail)) {
                message = data.detail
                    .map(d => (typeof d === 'string' ? d : d.msg ?? JSON.stringify(d)))
                    .join('; ');
            } else if (typeof data.message === 'string') {
                message = data.message;
            } else if (data.detail) {
                try {
                    message = JSON.stringify(data.detail);
                } catch (_) {
                    message = String(data.detail);
                }
            } else if (data.error) {
                message = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
            }
        }

        const err = new Error(message);
        err.status = res.status;
        err.data = data; // attach original payload for debugging
        throw err;
    }

    return data;
}
