export const useRegisterValidation = () => {
  const validate = (usuario, email, senha, confirmarSenha) => {
    if (!usuario || !senha || !confirmarSenha || !email) {
      return "Todos os campos são obrigatórios.";
    }

    if (usuario.length < 3) {
      return "O nome de usuário deve ter pelo menos 3 caracteres.";
    }

    if (!email.includes("@") || email.length < 5) {
      return "Informe um e-mail válido.";
    }

    if (senha.length < 6) {
      return "A senha deve ter pelo menos 6 caracteres.";
    }

    if (senha !== confirmarSenha) {
      return "As senhas não coincidem.";
    }

    return "";
  };

  return { validate };
};