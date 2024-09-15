import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit, MdAddCircle } from "react-icons/md";
import getMembroIdFromToken from "../../utils/membros/getMembroIdFromToken";

const ListTarefa = () => {
  const [tarefas, setTarefas] = useState([]);
  const [selectedTarefa, setSelectedTarefa] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await api.get("http://localhost:8080/tarefas");
        setTarefas(response.data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    const loggedInUserId = getMembroIdFromToken();
    setUserId(loggedInUserId);

    fetchTarefas();
  }, []);


  const finishTarefa = async (tarefa) => {
    try {
      await api.patch("http://localhost:8080/tarefas/finish", {
        id: tarefa.id,
      });

      toast.success("Status da tarefa atualizado.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (tarefaId) => {
    try {
      await api.delete(`http://localhost:8080/tarefas/delete/${tarefaId}`);
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaId));
      toast.success("Tarefa deletada com sucesso.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleTarefaClick = (tarefa) => {
    if (selectedTarefa && selectedTarefa.id === tarefa.id) {
      setSelectedTarefa(null);
    } else {
      setSelectedTarefa(tarefa);
    }
  }
  return (
    <div className="flex flex-col items-center w-full bg-teal-500 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-white mb-6">
        Listagem de Tarefas
      </h1>

      <div className="w-full max-w-4xl bg-white p-4 rounded-sm shadow-md">
        <button className="bg-teal-500 text-white py-2 px-4 rounded-sm mb-4">
          <Link to="/createTarefa"><MdAddCircle size={24} /></Link>
        </button>

        <ul className="space-y-4">
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-sm shadow-md"
            >
              <div onClick={() => handleTarefaClick(tarefa)} className="cursor-pointer">
                <p className="text-lg font-bold">{tarefa.nome}</p>
                <p className="text-sm text-gray-600">
                  Prioridade: {tarefa.prioridade}
                </p>
                <p
                  className={`text-sm ${tarefa.finalizada ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {tarefa.finalizada ? "Finalizada" : "Não finalizada"}
                </p>
              </div>
              {selectedTarefa && selectedTarefa.id === tarefa.id && (
                <div className="mt-2 p-4 bg-teal-100 rounded-sm">
                  <p className="text-gray-700 mb-2">{selectedTarefa.descricao}</p>

                  {userId === tarefa.membroId ? (
                    <div className="flex space-x-2">
                      {tarefa.finalizada ? (
                        <h2 className="text-sm text-green-600">Tarefa concluída</h2>
                      ) : (
                        <button
                          className="bg-teal-500 text-white px-4 py-2 rounded-sm"
                          onClick={() => finishTarefa(tarefa)}
                        >
                          Marcar como Finalizada
                        </button>
                      )}
                      {!tarefa.finalizada && (
                        <Link
                          to={`/updateTarefa/${tarefa.id}`}
                          className="bg-blue-800 text-white px-4 py-2 rounded-sm"
                        >
                          <MdEdit size={24} />
                        </Link>
                      )}

                      <button
                        onClick={() => handleDelete(tarefa.id)}
                        className="bg-red-800 text-white px-4 py-2 rounded-sm"
                      >
                        <MdDeleteForever size={24} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Você pode apenas visualizar esta tarefa.
                    </p>
                  )}
                </div>
              )}

            </li>
          ))}
        </ul>

        {selectedTarefa && (
          <div className="mt-4 p-4 bg-teal-100 rounded-sm">
            <h2 className="text-lg font-bold text-teal-700">
              {selectedTarefa.nome}
            </h2>
            <p className="text-gray-700">{selectedTarefa.descricao}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListTarefa;
