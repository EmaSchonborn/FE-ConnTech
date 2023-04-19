import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNotification } from "../../Redux/actions";
export default function Notificaciones() {
	const userId = useSelector((state) => state.userVerified.user.id);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(GetNotification(userId));
	}, []);
	const notifications = useSelector((state) => state.notifications);
	console.log(notifications);
	return (
		<div>
            <h2 className="bg-gray-800 text-white p-4">Notificaciones</h2>
      <div className="flex items-center justify-center h-screen w-full bg-gray-800">
      <div className="container mx-auto p-4">
        <h1>
          <ul className="flex flex-row space-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {notifications.map((el) => (
              <li key={el.id} className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
                <p>
                Description: {el.description}
                </p><br />
              </li>
            ))}
          </ul>
        </h1>
      </div>
      </div>
			{/* {notifications
				? notifications.map((e) => {
						<>
							<p>{e.id}</p>
							<p>{e.description}</p>
						</>;
				  })
				: null} */}
		</div>
	);
}
