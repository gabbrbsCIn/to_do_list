import { toast } from "react-toastify";
import { logout } from "../../services/auth";
import { deleteMembro } from "../../services/membros";
import { sendToastErrorResponse } from "../../utils/error/sendToastErrorResponse";
import { useNavigate } from "react-router-dom";

const DeleteMembro = () => {
    const navigate = useNavigate();

    const handleDeleteMembro = async () => {
        try {
            await deleteMembro();
            logout();
            toast.success("Membro deletado com sucesso!");
            navigate("/login");
        } catch (error) {
            sendToastErrorResponse(error);
        }

    }
    return (

        <div className="flex flex-col justify-center items-center">

            <h1 className="text-2xl font-bold text-center mt-10">Deletar Membro</h1>
            <div className="flex ">
                <div className="bg-red-500 h-24  hover:bg-red-700 text-white py-2 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out mt-5">
                    <button onClick={handleDeleteMembro} className="h-full w-full flex items-center" to="/register">Clique aqui para deletar a conta</button>
                </div>

            </div>
        </div>
    )
}

export default DeleteMembro;