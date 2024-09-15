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

export const getTarefas = async () => {
    try {
        const response = await api.get(`http://localhost:8080/tarefas`);
        return response.data;
    } catch (error) {
        sendErrorResponse(error);
    }
}

export const updateTarefaFinalizada = async (tarefaId) => {
    try {
        const response = await api.patch(`http://localhost:8080/tarefas/finish`, {id: tarefaId});
        return response.data;
    } catch (error) {
        sendErrorResponse(error);
    }
}

export const deleteTarefa = async (tarefaId) => {
    try {
        const response = await api.delete(`http://localhost:8080/tarefas/delete/${tarefaId}`);
        return response.data;
    } catch (error) {
        sendErrorResponse(error);
    }
}

export const createTarefa = async (data) => {
    try {
        const response = await api.post(`http://localhost:8080/tarefas/create`, data);
        return response.data;
    } catch (error) {
        sendErrorResponse(error);
    }
}