import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams} from "react-router-dom";
import { GetUsersInVacant, getUsers } from "../../Redux/actions/";
import Card2 from "../Card/Card2";


export default function VacantDetail() {
  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  let params = useParams();
  // [{userId: 2},{3},{4}]
  const detail = useSelector((state) => state.usersInVacant.postulation)
  console.log(detail)
  const users = useSelector((state) => state.users)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  
    dispatch(GetUsersInVacant(params.id));
    dispatch(getUsers());
  
    return () => {
      clearTimeout(timeout);
    }
  }, []);
  if (loading) {
    return (
      <section className="bg-white w-full h-screen flex items-center justify-center">
        <div class="spinnerContainer">
          <div class="spinner"></div>
          <div class="loader">
            <p>CONNTECH</p>
            <div class="words">
              <span class="word">startups</span>
              <span class="word">reclutadores</span>
              <span class="word">talentos</span>
              <span class="word">latam</span>
            </div>
          </div>
        </div>
      </section>
    ); // Indicador de carga
  }
// console.log(users)

const result = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < detail.length; j++) {
      if (users[i].id === detail[j].userId) {
        result.push({ ...users[i], ...detail[j] });
      }
    }
  }
// users.map(e => detail.map(el => usersFilter.push(e.id === el.userId)))
// users.map(e => detail.forEach(el => { usersFilter.push(e.id == el.userId)
    
// }))

console.log(result)

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-800">
      <ul className="flex flex-row space-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {result.map((el) => (
              <li key={el.id} className="w-11/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
                <Card2 key={el.id} id = {el.id} name = {el.name} phone = {el.phone}></Card2>
                <div className="flex justify-center items-center h-24">
                </div>
              </li>
            ))}
          </ul>
            <div>
            <Link to="/home">
              <button className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">BACK HOME</button>
            </Link>
          </div>

          </div>
 );}
