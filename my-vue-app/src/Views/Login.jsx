import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los valores de correo electrónico y contraseña a través de una llamada a una API de inicio de sesión
    // Restablecer los valores de correo electrónico y contraseña
    setEmail('');
    setPassword('');
  };

  return (
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
  );
}

