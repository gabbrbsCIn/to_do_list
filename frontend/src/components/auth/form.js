import { useState } from "react";
import { login, register } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Form = ({ method }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, senha };
    if (method === "register") {
      data.nome = nome;
    }
    try {
      if (method === "register") {
        await register(data);
        toast.success(`Usuário registrado com sucesso`);
        navigate("/login");
      } else {
        const response = await login(data);
        console.log(response.data);
        localStorage.setItem("authToken", response.data);
        toast.success(`Login realizado com sucesso!`);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white py-10 w-1/5 px-6 rounded-2xl shadow-2xl z-10">
      <form
        className="flex flex-col items-center space-y-11 mb-5 pr-4 pl-4"
        onSubmit={handleSubmit}
      >
        {method === "register" && (
          <>
            <h1 className="text-3xl">Cadastro</h1>
            <input
              className="appearance-none border bg-gray-300 rounded-2xl w-full py-2 px-3 mb-3"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </>
        )}
        {method === "login" && <h1 className="text-3xl">Login</h1>}
        <input
          className="appearance-none border bg-gray-300 rounded-2xl w-full py-2 px-3 mb-3"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="appearance-none border bg-gray-300 rounded-2xl w-full py-2 px-3 mb-3"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div className="text-center text-xs mt-10">
        <p>
        {method === "login" &&  <Link to="/register">Não tem registro? Clique aqui</Link>}
        {method === "register" &&  <Link to="/login">Já é cadastrado? Faça o login!</Link>}
         
        </p>
      </div>
    </div>
  );
};

export default Form;
