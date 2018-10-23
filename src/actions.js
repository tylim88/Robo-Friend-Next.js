import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constant';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = (apicall, url) => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return apicall(url)
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
