import "firebase/auth";
import { getToken } from "./authManager";

export const getPosts = () => {
    return getToken().then((token) =>
      fetch("/api/Post", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then(setPosts));
  };