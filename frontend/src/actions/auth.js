// Sign up and sign in actions

import { AUTH } from "../constants/actionTypes";
import { useDispatch } from "react-redux";

// Mock signin and signup for now

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
