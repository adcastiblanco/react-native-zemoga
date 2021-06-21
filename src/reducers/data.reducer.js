import {
  ADD_TO_FAVORITE,
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  POST_READ,
  REMOVE_ALL_POSTS,
  REMOVE_FAVORITE,
} from '../constants';

const initialState = {
  data: [],
  favorites: [],
  isFeching: true,
  error: false,
};

export default dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFeching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFeching: false,
      };
    case POST_READ:
      state.data.map(item => {
        if (item.id === action.id) {
          item.read = true;
        }
      });
      return {
        ...state,
        data: [...state.data],
      };
    case ADD_TO_FAVORITE:
      state.data.find(item => {
        if (item.id === action.id) {
          item.isFavorite = true;
        }
      });
      return {
        ...state,
        favorites: [
          ...state.favorites,
          state.data.find(item => item.id === action.id && item),
        ],
        isFeching: false,
      };
    case REMOVE_FAVORITE:
      state.data.find(item => {
        if (item.id === action.id) {
          item.isFavorite = false;
        }
      });
      return {
        ...state,
        favorites: [state.favorites.filter(item => item.id !== action.id)],
      };
    case REMOVE_ALL_POSTS:
      return {
        ...state,
        data: [],
        favorites: [],
      };
    default:
      return state;
  }
};
