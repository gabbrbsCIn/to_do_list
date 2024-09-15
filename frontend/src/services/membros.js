import { sendToastErrorResponse } from "../utils/error/sendToastErrorResponse";
import api from "./api";
export const deleteMembro = async () => {
    try {
        const response = await api.delete(`http://localhost:8080/membros/delete`);
        return response.data;
    } catch (error) {
        sendToastErrorResponse(error);
    }
};