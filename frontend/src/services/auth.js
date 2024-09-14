import axios from "axios";
import { sendErrorResponse } from "../utils/error/sendErrorResponse";

export const register = async (data) => {
  try {
    const response = await axios.post(`http://localhost:8080/register`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    sendErrorResponse(error);
  }
};
export const login = async (data) => {
  try {
    const response = await axios.post(`http://localhost:8080/login`, data);

    return response.data;
  } catch (error) {
    sendErrorResponse(error);
  }
};
