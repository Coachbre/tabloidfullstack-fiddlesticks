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
