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
    // Busca o usuário pelo nome e inclui as relações com aluno_turma e turma (incluindo o professor)
    const usuario = await prisma.usuario.findFirst({
      where: { nome },
      include: {
        aluno_turma: {
          include: {
            turma: {
              include: {
                professor: true // isso traz os dados do professor da turma
              }
            }
          }
        }
      }
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (usuario.senha !== senha) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Verifica se está vinculado a alguma turma
    const vinculo = usuario.aluno_turma[0]; // Pega a primeira turma (caso haja mais de uma)

    if (!vinculo || !vinculo.turma) {
      return res.status(403).json({ error: "Usuário não está vinculado a nenhuma turma" });
    }

    return res.status(200).json({
      id_aluno: usuario.id,
      nome: usuario.nome,
      tipoUsuario: usuario.tipo_usuario,
      id_turma: vinculo.turma.id,
      id_professor: vinculo.turma.id_professor,
    });

  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
}