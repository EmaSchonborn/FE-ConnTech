import axios from "axios";
import { func } from "prop-types";
export const GET_VACANT = "GET_VACANTE";
export const GET_DETAILS = "GET_DETAILS";
export const GET_USERS = "GET_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const CREATE_VACANT = "CREATE_VACANT";
export const LOGIN="LOGIN";
export const GET_VACANTS_BY_USER="GET_VACANTS_BY_USER";
export const TYPE_USER_VERIFIED="TYPE_USER_VERIFIED";
export const GET_NOTIFICATION='GET_NOTIFICATION'
export const CREATE_PAYMENT="CREATE_PAYMENT";
export const SEND_POST= "SEND_POST";
export const SEND_EMAIL= "SEND_EMAIL";


export const MODIFICATION="MODIFICATION";


export function getUsers() {
  return async function (dispatch) {
    const apiData = await axios.get("https://api-conntech.onrender.com/user/");
    const users = apiData.data;
    dispatch({
      type: GET_USERS,
      payload: users,
    });
  };
}

export function getVacantes() {
  return async function (dispatch) {
    const json = await axios.get("https://api-conntech.onrender.com/vacant/");
    return dispatch({
      type: GET_VACANT,
      payload: json.data,
    });
  };
}

// export const getVacantes = ()=> async (dispatch) =>{
//     return fetch("https://api-conntech.onrender.com/vacant/")
//     .then((r) => r.json())
//     .then((data) => dispatch({ type: 'GET_INFO', payload: data }));
// };

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-conntech.onrender.com/vacant/${id}`
      );
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-conntech.onrender.com/user/${id}`
      );
      return dispatch({
        type: GET_USER_BY_ID,
        payload: json.data.user,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-conntech.onrender.com/user/register/",
        payload
      );
      dispatch({
        type: CREATE_USER,
        payload: json.data.user,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function verifyUser(Email, Password) {
  const body = {
    email: Email,
    password: Password,
  };
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-conntech.onrender.com/user/login",
        body
      );
      return dispatch({
        type: LOGIN,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function modificationUser(Education, Experience, id) {
  const body = {
    education: Education,
    experience: Experience,
    id: id,
  };
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-conntech.onrender.com/user/modifyuser",
        body
      );
      return dispatch({
        type: MODIFICATION,
        payload: json.data.user,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

//  export function setTypeUser(Email,Password){
//   const body = {
//     email:Email,
//     password: Password}
//     return async function(dispatch){
//     try {
//       let json = await axios.post('https://api-conntech.onrender.com/user/login',body)
//       return dispatch({
//         type: TYPE_USER_VERIFIED,
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//     }
// };
export function createVacant(payload) {
  const body = {
    title: payload.title,
    modality: { name: payload.modality.name },
    technologies: payload.technologies,
    description: payload.description,
    userId: payload.userId,
  };
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-conntech.onrender.com/vacant/new",
        body
      );
      dispatch({
        type: CREATE_VACANT,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function GetVacantsByUserId(id){
    return async function(dispatch){
      try {
        let json = await axios.get(`https://api-conntech.onrender.com/vacant/vacantsbyuser/${id}`)
        dispatch({
          type: GET_VACANTS_BY_USER,
          payload: json.data,
        });
      } catch (error) {
        console.log(error.message)
      }
    }};


    export function GetNotification(id){
      return async function(dispatch){
        try {
          let json = await axios.get(`https://api-conntech.onrender.com/notification/notificationbyuser/${id}`)
          dispatch({
            type: GET_NOTIFICATION,
            payload: json.data.notification,
          });
        } catch (error) {
          console.log(error.message)
        }
      }};

export function CreatePayment(){
  return async function(dispatch){
    try {
      let result=await axios.get('https://api-conntech.onrender.com/premium/payment')
      let {client_secret: clientSecret} = await result.data;
      dispatch({
        type:CREATE_PAYMENT,
        payload:clientSecret
      });
    } catch (error) {
      
    }
  }
};
export function sendPost(payload){
  return async function(dispatch){
      try {
        let json = await axios.post(`https://api-conntech.onrender.com/postulation/new`, payload)
        dispatch({
          type: SEND_POST,
          payload: json.data,
        });
      } catch (error) {
        console.log(error.message)
      }
    }};
export function sendEmail(payload){
  return async function(dispatch){
      try {
        let json = await axios.post(`https://api-conntech.onrender.com/send-email`, payload)
        dispatch({
          type: SEND_EMAIL,
          payload: json.data,
        });
        } catch (error) {
          console.log(error.message)
        }
    }};    