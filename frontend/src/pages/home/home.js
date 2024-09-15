import { Link } from "react-router-dom";
import LogoutButton from "../../components/auth/logout";
import React from "react";
const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">

        <h1 className="text-2xl font-bold text-center mt-10">Bem-vindo ao To-Do List!</h1>
        <div className="flex space-x-3">
          <div className="bg-teal-500 h-24  hover:bg-teal-600 text-white py-2 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out mt-5">
            <Link className="h-full w-full flex items-center" to="/register">Cadastrar Membros</Link>
          </div>
          <div className="bg-teal-500 h-24  hover:bg-teal-600 text-white py-2 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out mt-5">
            <Link className="h-full w-full flex items-center" to="/tarefas">Ir para tela de Listagem de Tarefas</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
