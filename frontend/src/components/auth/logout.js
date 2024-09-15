import { IoIosLogOut } from 'react-icons/io';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LogoutButton = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        localStorage.removeItem("authToken");
        toast.success("Logout realizado com sucesso!");
        navigate("/login");
    }
    return (
        <button onClick={handleSubmit}>
            <IoIosLogOut color='#fff' size={32}/>
        </button>
    );
}
export default LogoutButton;