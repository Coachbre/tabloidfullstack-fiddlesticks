import { getToken } from './authManager';

const baseUrl = '/api/tag';
//^ this is a relative URL (benefit of using a proxy)

export const getAllTags = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("An unknown error occurred while trying to get Tags bro.");
                }
            });
    });
};

export const getTagById = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const addTag = (tag) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tag)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("An unknown error occurred while trying to add Tags bro.");
                }
            });
    });
};

export const deleteTag = (id) => {
    return fetch(baseUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
    });
};