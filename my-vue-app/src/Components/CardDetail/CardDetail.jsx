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
		<div>
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
        <button>Contactar</button>
		</div>
	);
};

export default CardDetail;
