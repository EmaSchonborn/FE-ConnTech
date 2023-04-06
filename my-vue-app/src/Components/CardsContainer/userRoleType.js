import { useSelector } from "react-redux";


export function userRoleType(userRol){
   let role;
   if (userRol===1) {
    role="company";
    return role;
   } else if(userRol===2) {
    role="normal";
    return role;
   }
}