const baseUrl = '/api/category';

export const getAllCategories = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
}