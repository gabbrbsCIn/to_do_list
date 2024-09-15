import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getTarefaById, updateTarefa } from "../../services/tarefas";
import { sendToastErrorResponse } from "../../utils/error/sendToastErrorResponse";




const UpdateTarefa = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        const getTarefa = async () => {
            const response = await getTarefaById(id);
            const tarefa = response.data;
            setNome(tarefa.nome);
            setPrioridade(tarefa.prioridade);
            setDescricao(tarefa.descricao);
        }
        getTarefa();
    }, [id]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await updateTarefa({ id: id, nome: nome, prioridade: prioridade, descricao: descricao });
            toast.success("Tarefa atualizada com sucesso!");
            navigate("/tarefas");
        } catch (error) {
            sendToastErrorResponse(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-teal-500">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-teal-700">
                    Atualizar Tarefa
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Nome da Tarefa</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Descrição</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Prioridade</label>
                    <select
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                >
                    Atualizar
                </button>
            </form>
        </div>
    );
};

export default UpdateTarefa;