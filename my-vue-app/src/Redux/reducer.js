import {
  GET_VACANT,
  GET_DETAILS,
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  LOGIN,
  SEND_POST,
  SEND_EMAIL,
  // TYPE_USER_VERIFIED,
  CREATE_VACANT,
  GET_VACANTS_BY_USER

} from "../Redux/actions/";



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
  postulations: [],
  emails: []
  // typeUserVerified:0
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
       return{
        ...state,
        userVerified:action.payload
      };
    case CREATE_VACANT:
      return{
        ...state,
        vacants:action.payload
      };  
    case LOGIN:
      return{
        ...state,
        userVerified:action.payload,
      }
    //  case TYPE_USER_VERIFIED:
    //   return{
    //     ...state,
    //     typeUserVerified:action.payload.user.roleId
    //   } 
    case GET_VACANTS_BY_USER:
      return{
        ...state,
        VacantsByUserId:action.payload,
      }
    case SEND_POST:
      return{
        ...state,
        postulations: action.payload
      };  
    case SEND_EMAIL:
      return{
        ...state,
        emails: action.payload
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
// const nodemailer = require('nodemailer');

//     async function sendEmail(email, subject, message) {
//       const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'nicoyabichino@gmail.com',
//             pass: 'nxjpkaptjlocketi'
//         }
//       });

//       const mailOptions = {
//         from: 'nicoyabichino@gmail.com',
//         to: email,
//         subject: subject,
//         text: message
//       };

//       try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email enviado: ' + info.response);
//       } catch (error) {
//         console.log(error);
//         throw new Error('No se pudo enviar el correo electrónico');
//       }
//     }

//     module.exports = {
//       sendEmail
//     };