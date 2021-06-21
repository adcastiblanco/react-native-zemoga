import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  POST_READ,
  ADD_TO_FAVORITE,
  REMOVE_FAVORITE,
  REMOVE_ALL_POSTS,
} from '../constants';
import {fetchPosts} from '../api';

export const getData = () => {
  return {type: FETCHING_DATA};
};

export const getDataSuccess = data => {
  return {type: FETCHING_DATA_SUCCESS, data};
};

export const fetchData = () => {
  return dispatch => {
    dispatch(getData());

    fetchPosts()
      .then(([response, json]) => {
        dispatch(getDataSuccess(json));
      })
      .catch(error => console.log(error));
  };
};

export const postRead = id => {
  return {type: POST_READ, id};
};

export const addToFavorite = id => {
  return {type: ADD_TO_FAVORITE, id};
};

export const removeFavorite = id => {
  return {type: REMOVE_FAVORITE, id};
};

export const removeAllPosts = () => {
  return {type: REMOVE_ALL_POSTS};
};
