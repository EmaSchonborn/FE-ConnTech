import {
  GET_VACANT,
  GET_DETAILS,
  GET_USERS,
  GET_USER_BY_ID,
} from "./actions";

const initialState = {
  vacants: [],
  vacantDetail: [],
  empresas: [],
  users: [],
  filteredUsers: [],
  userDetail: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACANT:
      return {
        ...state,
        vacants: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        vacantDetail: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userDetail: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
