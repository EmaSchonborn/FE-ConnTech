import React from 'react'
import { Link } from 'react-router-dom';

export const Betafooter = () => {
    return (
      <>
      <footer className="footer flex items-center justify-center p-10 bg-indigo-600 text-xl font-size: 1.25rem; text-white">
    <div className=' mr-5 cursor-pointer'>
      <Link to="/about" ><span>NOSOTROS</span></Link> 
    </div> 
    <div className=' mr-5 cursor-pointer'>
      <Link to="/info" ><span>PREGUNTAS</span></Link> 
    </div> 
    <div className=' mr-5 cursor-pointer'>
      <span>ADMIN</span> 
    </div>
  </footer> 
  <footer className="footer flex items-center justify-between px-10 py-4 border-t bg-black text-white border-base-300 text-xl font-size: 1.25rem;">
    <div className="items-center grid-flow-col">
    <img className="h-8 w-auto" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-usb-photography-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="" />
      <p>CONNTECH<br/>Hecho con ❤️ - HENRY PF</p>
    </div> 
    <div className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
        <a href='#top'><img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/instagram-new--v1.png"/></a> 
        <a href='#top'><img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/facebook.png"/></a>
        <a href='#top'><img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/linkedin.png"/></a>
      </div>
    </div>
  </footer>
  </>
    );
  };
