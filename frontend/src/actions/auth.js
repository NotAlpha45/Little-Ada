// Sign up and sign in actions

import { AUTH } from "../constants/actionTypes";
import { useDispatch } from "react-redux";
import * as api from "../api/index"

// Mock signin and signup for now

export const signin = (formData, navigate) => async (dispatch) => {
  try {

    const {data} = await api.signIn(formData);
    dispatch({type: AUTH, data: data});

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.signUp(formData);
    dispatch({type: AUTH, data: data});
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
