import { getToken } from './authManager'

const baseUrl = '/api/post';

export const getAllPosts = () => {
    return getToken().then((token) => {
      return fetch(baseUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ token }`
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

  export const getUserPost = (id) => {
    return getToken().then((token) => {
      return fetch(`${baseUrl}/userprofileid/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ token }`
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