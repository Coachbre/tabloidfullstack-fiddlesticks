import { getToken } from './authManager'

const baseUrl = '/api/post';

export const getAllPosts = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An unknown error occorred while trying to fetch all posts");
      }
    });
  });
};

export const getByUser = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetByUser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An unknown error occorred while trying to fetch your posts");
      }
    });
  });
};

export const getPostById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetById/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
  });
};

export const addPost = (post) => {
  return getToken().then((token) => {
      return fetch(`${baseUrl}`, {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(post)
      }).then(resp => {
          if (resp.ok) {
              return resp.json();
          } else if (resp.status === 401) {
              throw new Error("Unauthorized");
          } else {
              throw new Error("An unknown error occurred while trying to save a new post.");
          }
      });
  });
};

export const deletePost = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  });
};