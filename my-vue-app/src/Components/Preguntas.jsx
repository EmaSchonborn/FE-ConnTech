import React from "react";
import { Link } from "react-router-dom";

const Preguntas = () => {
	return (
		<div className='w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col items-center justify-center'>
			<div class='font-bold'>Preguntas</div>
			<div>
				<div>
					{" "}
					¿Cómo puedo enviar mi solicitud para un trabajo en
					particular?
				</div>
				<br />
				<label>
					{" "}
					Generalmente, puedes enviar tu solicitud a través del sitio
					web de la empresa o utilizando la información de contacto
					proporcionada en la descripción del trabajo. Si tienes
					alguna duda, comunícate con el departamento de recursos
					humanos de la empresa.
				</label>
				<br />
				<div> ¿Qué documentos necesito para solicitar un trabajo?</div>
				<br />
				<label>
					{" "}
					Los documentos que necesites pueden variar según la empresa
					y el trabajo. Por lo general, necesitarás una copia
					actualizada de tu currículum y una carta de presentación. Si
					se requieren otros documentos, la empresa los especificará
					en la descripción del trabajo.
				</label>
				<br />
				<div>¿Cómo puedo saber si mi solicitud fue recibida?</div>
				<br />
				<label>
					{" "}
					Si la empresa tiene un sistema de seguimiento de candidatos,
					deberías recibir una confirmación de que se recibió tu
					solicitud. De lo contrario, puedes contactar al departamento
					de recursos humanos de la empresa para confirmar que
					recibieron tu solicitud.
				</label>
			</div>
		</div>
	);
};
export default Preguntas;
