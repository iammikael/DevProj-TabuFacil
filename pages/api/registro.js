import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ mensagem: "Método não permitido" });
  }

  const { usuario, email, senha } = req.body;

  if (!usuario || !email || !senha) {
    return res.status(400).json({ mensagem: "Campos obrigatórios não preenchidos." });
  }

  try {
    // Verifica se o usuário ou e-mail já existem
    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [
          { nome: usuario },
          { email: email },
        ],
      },
    });

    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Usuário ou e-mail já cadastrado." });
    }

    // Cria novo usuário
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome: usuario,
        email,
        senha, // Em produção, sempre hash essa senha!
        tipo_usuario: "Aluno", // Ajuste conforme seu banco
      },
    });

    return res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
}