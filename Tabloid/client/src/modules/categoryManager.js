import { getToken } from "./authManager";
const baseUrl = '/api/category';

export const getAllCategories = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error ocurred while trying to fetch all categories")
            }
        })
    })
}

export const addCategory = (category) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        }).then((res) => res.json());
    })
}