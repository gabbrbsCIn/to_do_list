import { toast } from "react-toastify";

export const sendToastErrorResponse = (error) => {
  console.error(error);
  toast.error(error.message);
}