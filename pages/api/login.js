import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, senha } = req.body;

  console.log("Enviando para o backend:", { nome, senha });

  if (!nome || !senha) {
    return res.status(400).json({ error: "Usuário e senha são obrigatórios" });
  }

  try {
    const usuario = await prisma.usuario.findFirst({
      where: { nome },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (usuario.senha !== senha) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Agora retornamos diretamente as informações úteis
    return res.status(200).json({
      id: usuario.id,
      nome: usuario.nome,
      tipoUsuario: usuario.tipo_usuario, // aqui está a chave que o front-end vai usar
    });

  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
}