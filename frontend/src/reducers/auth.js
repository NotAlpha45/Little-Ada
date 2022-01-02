// The reducer action for authentication is here. Reducers are function that
// does something when received a state.
import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      // console.log(action?.data);
      // The ... opeartor is the spread operator, that gets all the properties of an
      // object and then overwrites the properties that we may pass alongside.
      // If we wanted to change any data alongside, we couldve done like so
      // {...action?.data, <property_name> : <new_property_val>}. We are storing
      // the aaction_data in the local storage so that the state of an user is
      // saved even if that user mistakenly closed session.
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      // return entirety of the state but change the authData as per the action.data.
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.clear();

      // This time, remove all the auth data  
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
