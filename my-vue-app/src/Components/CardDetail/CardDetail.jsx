import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../Redux/actions";

const CardDetail = () => {
	const [loading, setLoading] = useState(true);
	let dispatch = useDispatch();
	let params = useParams();
	// const handleOnClick()
	useEffect(() => {
		dispatch(getUserById(params.id));
	}, [params.id, dispatch]);
	const usuarioDetail = useSelector((state) => state.userDetail);
	console.log(usuarioDetail);

	if (loading) {
		// dispatch(getUserById(params.id));
		setLoading(false);
		return <div>Cargando...</div>; // Indicador de carga
	}
	return (
		<div className="flex items-center justify-center h-screen w-full bg-gray-800">
		<div className="container mx-auto p-4">
			<div className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
			{usuarioDetail?.name !== undefined ? (
				<h1>
					Nombre: {" "}
					{usuarioDetail.name.charAt(0).toUpperCase() +
						usuarioDetail.name.slice(1)}
				</h1>
			) : (
				setTimeout(0)
			)}
			{usuarioDetail?.email !== undefined ? (
				<h1>Email: {usuarioDetail.email}</h1>
			) : (
				setTimeout(0)
			)}
      	{usuarioDetail?.phone !== undefined ? (
				<h1>Phone: {usuarioDetail.phone}</h1>
			) : (
				setTimeout(0)
        )}
		<div className="flex justify-center items-center h-24">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contactar</button>
		</div>
		</div>
		</div>
		</div>
	);
};

export default CardDetail;
