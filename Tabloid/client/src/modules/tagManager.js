const baseUrl = '/api/tag';
//^ this is a relative URL (benefit of using a proxy)

export const getAllTags = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};

export const getTag = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

export const addTag = (tag) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tag),
    });
};

export const deleteTag = (tag) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tag),
    });
};