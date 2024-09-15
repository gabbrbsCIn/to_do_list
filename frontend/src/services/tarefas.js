import { sendErrorResponse } from "../utils/error/sendErrorResponse";
import api from "./api";

export const updateTarefa = async (data) => {
    try {
        const response = await api.put(`http://localhost:8080/tarefas/update`, data);
        return response.data;
    } catch (error) {
        sendErrorResponse(error);
    }
}

export const getTarefaById = async (id) => {
    try {
        const response = await api.get(`http://localhost:8080/tarefas/${id}`);
        return response.data;
    } catch (error) {
        sendErrorResponse(error);
    }
}