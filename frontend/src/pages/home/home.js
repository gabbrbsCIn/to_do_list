import { Link } from "react-router-dom";

import React from "react";
const Home = () => {
  return (
    <>
      <div className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out mt-5">
        <Link to="/register">Cadastrar Membros</Link>
      </div>
      <div className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out mt-5">
        <Link to="/tarefas">Ir para tela de Listagem de Tarefas</Link>
      </div>
    </>
  );
};

export default Home;
