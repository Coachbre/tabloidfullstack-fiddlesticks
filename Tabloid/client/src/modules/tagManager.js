const baseUrl = '/api/tag';
//^ this is a relative URL (benefit of using a proxy)

export const getAllTags = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};