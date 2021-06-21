const URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => {
  return fetch(`${URL}/posts`).then(Response => {
    return Promise.all([Response, Response.json()]);
  });
};

export const fetchUser = id => {
  return fetch(`${URL}/users/${id}`).then(Response => {
    return Promise.all([Response, Response.json()]);
  });
};

export const fetchComments = id => {
  return fetch(`${URL}/comments?postId=${id}`).then(Response => {
    return Promise.all([Response, Response.json()]);
  });
};
