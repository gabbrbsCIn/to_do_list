import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/logout';
import { MdHome, MdList, MdAddCircle, MdPersonAdd, MdDelete } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className="h-screen w-20 bg-teal-500 flex flex-col items-center py-6 fixed">
            <Link to="/home" className="mb-6">
                <MdHome size={32} className="text-white" />
                <span className="sr-only">Home</span>
            </Link>

            <Link to="/tarefas" className="mb-6">
                <MdList size={32} className="text-white" />
                <span className="sr-only">Listagem de Tarefas</span>
            </Link>

            <Link to="/createTarefa" className="mb-6">
                <MdAddCircle size={32} className="text-white " />
                <span className="sr-only">Cadastrar Tarefa</span>
            </Link>

            <Link to="/register" className="mb-6">
                <MdPersonAdd size={32} className="text-white" />
                <span className="sr-only">Registrar Usuário</span>
            </Link>
            <Link to="/deleteMembro" className="mb-6">
                <MdDelete size={32} className="text-white" />
                <span className="sr-only">Deletar Membro</span>
            </Link>
            <LogoutButton className=" hover:text-gray-300" />
        </div>
    );
};

export default Sidebar;
