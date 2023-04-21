import React, { useState, useEffect } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Message from "../Components/Message/Message";
import { useDispatch, useSelector } from "react-redux";
//import { getUserById, getUserByName } from "../Redux/actions";

export default function Premium() {
  const [message, setMessage] = useState("");
  const user = useSelector((state)=>state.userByName)
  console.log(user);
  let name;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    name=query.get("name");

    if (query.get("success")) {
      setMessage("Pedido realizado! Recibirás un correo de confirmación!");
    }

    if (query.get("canceled")) {
      setMessage(
        "Pedido cancelado. Continúe usando la aplicación y pague cuando esté listo!"
      );
    }

  }, []);

  return (
    <>
    {user?
        localStorage.setItem('id', user.id) &&
        localStorage.setItem('roleId', user.roleId) &&
        localStorage.setItem('name', user.name) &&
        localStorage.setItem('email', user.email) &&
        localStorage.setItem('isPremium', user.isPremium) &&
        localStorage.setItem('phone', user.phone) &&
        localStorage.setItem('educationId', user.educationId) &&
        localStorage.setItem('experienceId', user.experienceId) :null}
    {message?
    <Message message={message}/>
   :
    <ProductDisplay/>}
    </>
  );
}