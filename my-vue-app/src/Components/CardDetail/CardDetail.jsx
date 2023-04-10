import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../Redux/actions";

const CardDetail = () => {
	const [loading, setLoading] = useState(true);
	let dispatch = useDispatch();
	let params = useParams();
	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
	  
		  }, 12000);
	  
		
		  return () => {
			clearTimeout(timeout);
		  }
	}, []);
	const usuarioDetail = useSelector((state) => state.userDetail);
	console.log(usuarioDetail);

	if (loading) {
		dispatch(getUserById(params.id));
		return <div>Cargando...</div>; // Indicador de carga
	  }

	return (
		<div>
			{/* {usuarioDetail.length === 0 ? (
				setTimeout(13000)
			) : (
				<div>
					{usuarioDetail.user?.name !== undefined ? (
						<h1>
							Nombre:{" "}
							{usuarioDetail.user.name.charAt(0).toUpperCase() +
								usuarioDetail.user.name.slice(1)}
						</h1>
					) : (
						setTimeout(2)
					)}
				</div>
			)} */}
			TODO OK!!!
		</div>
	);
};

export default CardDetail;
