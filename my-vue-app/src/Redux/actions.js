import axios from "axios";
export const GET_VACANT = "GET_VACANTE";
export const GET_DETAILS = "GET_DETAILS";
export const GET_USERS = "GET_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export function getVacantes() {
    return async function(dispatch) {
        const json = await axios.get("https://api-conntech.onrender.com/vacant/");
        return dispatch({
            type: GET_VACANT,
            payload: json.data  
        })
    }
};


// export const getVacantes = ()=> async (dispatch) =>{
    //     return fetch("https://api-conntech.onrender.com/vacant/")
    //     .then((r) => r.json())
    //     .then((data) => dispatch({ type: 'GET_INFO', payload: data }));
    // };
    
export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`https://api-conntech.onrender.com/vacant/${id}`)
            return dispatch({
                 type: GET_DETAILS,
                payload: json.data
                })
            } catch (e) {
                console.log(e.message)
            }
        }
    };
export function getUsers() {
    return async function(dispatch) {
        const json = await axios.get("https://api-conntech.onrender.com/user/");
        return dispatch({
            type: GET_USERS,
            payload: json.data  
            })
        }
    };

export function getUserById(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`https://api-conntech.onrender.com/user/${id}`)
            return dispatch({
                type: GET_USER_BY_ID,
                payload: json.data
                })
            } catch (e) {
            console.log(e.message)
            }
        }
    };