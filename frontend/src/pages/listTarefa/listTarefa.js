import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const ListTarefa = () => {
  const [tarefas, setTarefas] = useState([]);
  const [selectedTarefa, setSelectedTarefa] = useState(null);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await api.get("http://localhost:8080/tarefas");
        setTarefas(response.data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchTarefas();
  }, []);

  const toggleFinalizada = async (tarefa) => {
    try {
      await api.put("http://localhost:8080/tarefas/update", {
        ...tarefa,
        finalizada: !tarefa.finalizada,
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
      await api.delete("http://localhost:8080/tarefas/delete");
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaId));
      toast.success("Tarefa deletada com sucesso.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-teal-500 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-white mb-6">
        Listagem de Tarefas
      </h1>

      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
        <button className="bg-teal-500 text-white py-2 px-4 rounded-lg mb-4">
          <Link to="/tarefas/new">Cadastrar Nova Tarefa</Link>
        </button>

        <ul className="space-y-4">
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div>
                <p className="text-lg font-bold">{tarefa.nome}</p>
                <p className="text-sm text-gray-600">
                  Prioridade: {tarefa.prioridade}
                </p>
                <p
                  className={`text-sm ${
                    tarefa.finalizada ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tarefa.finalizada ? "Finalizada" : "Pendente"}
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => toggleFinalizada(tarefa)}
                >
                  {tarefa.finalizada
                    ? "Marcar como Pendente"
                    : "Marcar como Finalizada"}
                </button>

                <Link
                  to={`/tarefas/edit/${tarefa.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Editar
                </Link>

                <button
                  onClick={() => handleDelete(tarefa.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Deletar
                </button>
              </div>
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
