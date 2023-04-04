import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { verifyUser } from "../Redux/actions";

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  let history = useHistory();

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(verifyUser(email,password));
    setEmail('');
    setPassword('');
    history.push("/home");

  }

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div class="md:flex bg-slate-100">
        <form onSubmit={handleSubmit}>
          <label>
            Correo Electrónico:
            <input type="text" value={email} onChange={handleEmailChange}/>
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange}/>
          </label>
          <Link to='/home'>
          <button onClick={handleSubmit}>Iniciar sesión</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
