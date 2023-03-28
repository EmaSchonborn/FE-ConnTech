import React from "react";
import Nosotros from "../Components/Nosotros";
import Preguntas from "../Components/Preguntas";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<div></div>
			{<Nosotros></Nosotros>}
			<Link to='/info'>
				<button class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded mb-2 
'>Preguntas frecuentes</button>
			</Link>
			{/* <div>Preguntas frecuentes</div>
			{<Preguntas/>} */}
		</div>
	);
};

export default About;
