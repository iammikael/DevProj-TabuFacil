import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, senha } = req.body;

    console.log("Enviando para o backend:", { nome: nome, senha: senha });

    // Verificar se os campos foram fornecidos
    if (!nome || !senha) {
      return res.status(400).json({ error: "Usuário e senha são obrigatórios" });
    }

    try {
      // Buscar o usuário no banco de dados pelo nome
      const usuarioEncontrado = await prisma.usuario.findFirst({
        where: {
          nome: nome,
        },
      });

      // Verificar se o usuário foi encontrado
      if (!usuarioEncontrado) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      // Verificar se a senha corresponde
      if (usuarioEncontrado.senha !== senha) {
        return res.status(401).json({ error: "Senha incorreta" });
      }

      // Login bem-sucedido
      return res.status(200).json({ message: "Login bem-sucedido", usuario: usuarioEncontrado });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  } else {
    return res.status(405).json({ error: "Método não permitido" });
  }
}