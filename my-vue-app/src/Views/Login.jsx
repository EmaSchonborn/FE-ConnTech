import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { verifyUser } from "../redux/actions";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyUser(email,password));
    // Enviar los valores de correo electrónico y contraseña a través de una llamada a una API de inicio de sesión
    // Restablecer los valores de correo electrónico y contraseña
    setEmail('');
    setPassword('');
  };
  const userVerified=useSelector((state)=>state.userVerified)

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div class="md:flex bg-slate-100">
        <form onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      {userVerified?console.log(userVerified):null}
    </div>
  );
}

