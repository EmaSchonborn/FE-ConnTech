import {
  GET_VACANT,
  GET_DETAILS,
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
} from "../redux/actions";

const initialState = {
  vacants: [],
  vacantDetail: [],
  empresas: [],
  users: [],
  filteredUsers: [],
  userDetail: [],
  tecnologías: [],
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
    case CREATE_USER:
      return {
        ...state,
      };

    //en creación
    // case ORDER_BY_ALPHABET:
    //   return {
    //     ...state,
    //     action: action.payload,
    //   };
    // case FILTER_BY_TECHNOLOGY:
    //   return {
    //     ...state,
    //     action: action.payload,
    //   };
    // case FILTER_BY_SOURCE:
    //   return {
    //     ...state,
    //     action: action.payload,
    //   };
    default:
      return { ...state };
  }
};

export default rootReducer;
