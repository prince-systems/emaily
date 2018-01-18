import axios from "axios";

import { FETCH_USER, CREATE_SURVEY } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitSurvey = formValues => async dispatch => {
  const res = await axios.post("/api/surveys", formValues);

  dispatch({
    type: CREATE_SURVEY,
    payload: res.data
  });
};
