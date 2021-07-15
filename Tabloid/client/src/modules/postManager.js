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

  export const getByUser = (id) => {
    return getToken().then((token) => {
      return fetch(`${baseUrl}/GetByUser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ token }`
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

  // export  const addPost = (post) => {
  //   return getToken().then((token) =>
  //     fetch(baseUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(post),
  //     })
  //   );
  // };