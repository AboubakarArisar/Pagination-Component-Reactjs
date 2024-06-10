import React from "react";

const Footer = () => {
  return (
    <>
      <header className='w-full h-16 bg-slate-800 flex justify-center items-center'>
        <h4 className='text-white text-xl'>
          © Copyright claims - <span>Pindari Coders</span>{" "}
          {new Date().getFullYear()}
        </h4>
      </header>
    </>
  );
};

export default Footer;
