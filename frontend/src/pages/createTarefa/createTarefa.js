import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

const CreateTarefa = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("baixa");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("http://localhost:8080/tarefas/create", { nome, prioridade, descricao });
      toast.success("Tarefa cadastrada com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-sm shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-teal-700">
          Cadastrar Nova Tarefa
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Nome da Tarefa</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descrição</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Prioridade</label>
          <select
            className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
          >
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded-sm hover:bg-teal-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CreateTarefa;
