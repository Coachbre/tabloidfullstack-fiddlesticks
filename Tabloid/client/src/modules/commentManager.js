import { getToken } from './authManager'

const baseUrl = '/api/comment';

export const GetCommentByPost = (postId) => {
        return getToken().then((token) => {
          return fetch(`${baseUrl}/GetByPostId/${postId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ token }`
            }
          }).then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("An unknown error occorred while trying to fetch all comments");
            }
          });
        });
      };

      export const addComment = (comment) => {
        return getToken().then((token) => {
            return fetch(baseUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(comment)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else if (res.status === 401) {
                    throw new Error("Please login to post comments");
                } else {
                    throw new Error("An unknown error occurred while trying to add a comment.");
                }
            });
        });
    };