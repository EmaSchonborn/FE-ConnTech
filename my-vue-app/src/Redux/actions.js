import axios from "axios";
export const GET_VACANT = "GET_VACANTE";
export const GET_DETAILS = "GET_DETAILS";
export const GET_USERS = "GET_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const CREATE_VACANT = "CREATE_VACANT";
export const LOGIN="LOGIN";
export const GET_VACANTS_BY_USER="GET_VACANTS_BY_USER";
//export const TYPE_USER_VERIFIED="TYPE_USER_VERIFIED";

const pruebaUsers = [
    {
      id: 1,
      name: "User 1",
      email: "user1@mail.com",
      phone: "+592766735944",
      roleId: 1
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@mail.com",
      phone: "+592766735944",
      roleId: 2
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@mail.com",
      phone: "+592766735944",
      roleId: 3
    },
    {
      id: 4,
      name: "User 4",
      email: "user4@mail.com",
      phone: "+592766735944",
      roleId: 1
    },
    {
      id: 5,
      name: "User 5",
      email: "user5@mail.com",
      phone: "+592766735944",
      roleId: 2
    },
    {
      id: 6,
      name: "User 6",
      email: "user6@mail.com",
      phone: "+592766735944",
      roleId: 3
    },
    {
      id: 7,
      name: "User 7",
      email: "user7@mail.com",
      phone: "+592766735944",
      roleId: 1
    },
    {
      id: 8,
      name: "User 8",
      email: "user8@mail.com",
      phone: "+592766735944",
      roleId: 2
    },
    {
      id: 9,
      name: "User 9",
      email: "user9@mail.com",
      phone: "+592766735944",
      roleId: 3
    },
    {
      id: 10,
      name: "User 10",
      email: "user10@mail.com",
      phone: "+592766735944",
      roleId: 1
    },
    {
      id: 11,
      name: "User 11",
      email: "user11@mail.com",
      phone: "+592766735944",
      roleId: 2
    },
    {
      id: 12,
      name: "User 12",
      email: "user12@mail.com",
      phone: "+592766735944",
      roleId: 3
    },
    {
      id: 13,
      name: "User 13",
      email: "user13@mail.com",
      phone: "+592766735944",
      roleId: 1
    },
    {
      id: 14,
      name: "User 14",
      email: "user14@mail.com",
      phone: "+592766735944",
      roleId: 2
    },
    {
      id: 15,
      name: "User 15",
      email: "user15@mail.com",
      phone: "+592766735944",
      roleId: 3
    },
    {
      id: 16,
      name: "User 16",
      email: "user16@mail.com",
      phone: "+592766735944",
      roleId: 1
    },
    {
      id: 17,
      name: "User 17",
      email: "user17@mail.com",
      phone: "+592766735944",
      roleId: 2
    },
];

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
        payload: json.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function createUser(payload){  
  const body = { 
  name : payload.name,
  email: payload.email,
  phone: payload.phone,
  password: payload.password,
  role: {name:payload.roles.name}}
  return async function(dispatch){
    try {
      let json = await axios.post('https://api-conntech.onrender.com/user/register/',body)
      dispatch({
        type: CREATE_USER,
        payload: json.data.user,
      });
    } catch (error) {
      console.log(error.message)
    }
  }};
 
export function verifyUser(Email,Password){
  const body = {
  email:Email,
  password: Password}
  return async function(dispatch){
  try {
    let json = await axios.post('https://api-conntech.onrender.com/user/login',body)
    return dispatch({
      type: LOGIN,
      payload: json.data,
    });
  } catch (error) {
    console.log(error.message);
  }
  }
};

/* export function setTypeUser(Email,Password){
  const body = {
    email:Email,
    password: Password}
    return async function(dispatch){
    try {
      let json = await axios.post('https://api-conntech.onrender.com/user/login',body)
      return dispatch({
        type: TYPE_USER_VERIFIED,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
    }
}; */
export function createVacant(payload){  
  const body = { 
  title : payload.title,
  modality: {name:payload.modality.name},
  technologies: payload.technologies,
  description: payload.description,
  userId:payload.userId
  }
  return async function(dispatch){
    try {
      let json = await axios.post('https://api-conntech.onrender.com/vacant/new',body)
      dispatch({
        type: CREATE_VACANT,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message)
    }
  }};

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
