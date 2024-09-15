
export const sendErrorResponse = (error) => {
    if (error.response) {
    const message = error.response.data.message;
    throw new Error(message);
  } else {
    throw new Error("Erro ao fazer a requisição");
  }
}
