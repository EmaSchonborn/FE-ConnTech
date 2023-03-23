import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <h3>Bienvenido a</h3>
      <h1 className="text-4xl font-bold mb-8">CONECTADOS TECH</h1>
      <Link
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        to="/login"
      >
        Ingresar
      </Link>
    </div>
  );
};

export default LandingPage;
