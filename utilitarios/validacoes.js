export function validateLogin(usuario, senha) {
    if (!usuario.trim() || !senha.trim()) {
      return "Por favor, preencha todos os campos.";
    }
  
    if (senha.length < 6) {
      return "A senha deve ter pelo menos 6 caracteres.";
    }
  
    // Pode adicionar mais validações aqui, se quiser
  
    return null; // null = sem erros
  }