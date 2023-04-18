import {
  GET_VACANT,
  GET_DETAILS,
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  LOGIN,
  SEND_POST,
  // TYPE_USER_VERIFIED,
  CREATE_VACANT,
  GET_VACANTS_BY_USER,
  GET_NOTIFICATION,
  MODIFICATION,
  CREATE_PAYMENT
} from "../Redux/actions";

//LOGIN

const initialState = {
  vacants: [],
  vacantDetail: {},
  empresas: [],
  users: [],
  filteredUsers: [],
  userDetail: {},
  userVerified:{},
  VacantsByUserId:[],

  notifications: [],

  postulations: [],

  // typeUserVerified:0
  clientSecret:''
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
        userVerified: action.payload,
      };
    case CREATE_VACANT:
      return {
        ...state,
        vacants: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        userVerified: action.payload,
      };
    case MODIFICATION:
      return {
        ...state,
        userVerified: action.payload,
      };
    //  case TYPE_USER_VERIFIED:
    //   return{
    //     ...state,
    //     typeUserVerified:action.payload.user.roleId
    //   }
    case GET_VACANTS_BY_USER:
      return {
        ...state,
        VacantsByUserId:action.payload,
      }

      case GET_NOTIFICATION:
      return{
        ...state,
        notifications:action.payload,
      }

    case CREATE_PAYMENT:
      return{
        ...state,
        clientSecret:action.payload
      }
      case SEND_POST:
        return{
          ...state,
          postulations: action.payload
        };  
    default:
      return { ...state };
  }
};

export default rootReducer;
