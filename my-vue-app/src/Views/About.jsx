import React from "react";
import Nosotros from "../Components/Nosotros";
import Preguntas from "../Components/Preguntas";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<div>About</div>
			{<Nosotros></Nosotros>}
			<Link to='/info'>
				<button class='btn btn-blue'>Preguntas frecuentes</button>
			</Link>
			{/* <div>Preguntas frecuentes</div>
			{<Preguntas/>} */}
		</div>
	);
};

export default About;
