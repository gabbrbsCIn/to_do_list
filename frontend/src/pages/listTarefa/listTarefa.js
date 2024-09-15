import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import getUserIdFromToken from "../../utils/membros/getMembroFromToken";

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
    const loggedInUserId = getUserIdFromToken();
    setUserId(loggedInUserId);

    fetchTarefas();
  }, []);


  const toggleFinalizada = async (tarefa) => {
    try {
      await api.patch("http://localhost:8080/tarefas/finish", {
        id: tarefa.id,
      });
      setTarefas(
        tarefas.map((t) =>
          t.id === tarefa.id ? { ...t, finalizada: !t.finalizada } : t
        )
      );
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

      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
        <button className="bg-teal-500 text-white py-2 px-4 rounded-lg mb-4">
          <Link to="/createTarefa">Cadastrar Nova Tarefa</Link>
        </button>

        <ul className="space-y-4">
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
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
                  {tarefa.finalizada ? "Finalizada" : "Pendente"}
                </p>
              </div>
              {selectedTarefa && selectedTarefa.id === tarefa.id && (
                <div className="mt-2 p-4 bg-teal-100 rounded-lg">
                  <p className="text-gray-700 mb-2">{selectedTarefa.descricao}</p>

                  {userId === tarefa.membroId ? (
                    <div className="flex space-x-2">
                      <button
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => toggleFinalizada(tarefa)}
                      >
                        {tarefa.finalizada
                          ? "Marcar como Pendente"
                          : "Marcar como Finalizada"}
                      </button>
                      {!tarefa.finalizada && (
                        <Link
                          to={`/updateTarefa/${tarefa.id}`}
                          className="bg-blue-800 text-white px-4 py-2 rounded-lg"
                        >
                          <MdEdit size={24} />
                        </Link>
                      )}


                      <button
                        onClick={() => handleDelete(tarefa.id)}
                        className="bg-red-800 text-white px-4 py-2 rounded-lg"
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
          <div className="mt-4 p-4 bg-teal-100 rounded-lg">
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
