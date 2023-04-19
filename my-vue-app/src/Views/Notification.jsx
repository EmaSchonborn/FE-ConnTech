import React from "react";
import { useSelector } from "react-redux";
import Notificaciones from "../Components/Notification/Notificaciones";

export default function Notification(props) {
	// const user = useSelector((state) => state.userVerified.user);
	return (
		<div>
			{
				<><h1>
					{props.id}
				</h1><p>
						{props.description}
					</p></>
			}
		</div>
	);
}
