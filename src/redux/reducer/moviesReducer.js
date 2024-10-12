import { AllMovies } from '../types/moviesType';

const initialValue = { movies: [], pageCount: 0 };

// 2-Create reducer
export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AllMovies:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state; // Return the current state
  }
};
