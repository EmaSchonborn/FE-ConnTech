import {
  GET_VACANTS,
  GET_DETAILS,
  GET_USERS,
  GET_USER_BY_ID,
  LOGIN,
} from "../redux/actions";

const initialState = {
  vacants: [],
  vacantDetail: [],
  empresas: [],
  users: [],
  filteredUsers: [],
  userDetail: [],
  loged:false,
  userVerified:[]
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACANTS:
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
    case LOGIN:
      return {
        ...state,
        userVerified: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
