import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, senha } = req.body;

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

    if (usuario.tipo_usuario === 'Aluno') {
      const vinculoAluno = await prisma.aluno_turma.findFirst({
        where: { id_usuario: usuario.id },
        include: { turma: true },
      });

      if (!vinculoAluno || !vinculoAluno.turma) {
        return res.status(403).json({ error: "Aluno não está vinculado a nenhuma turma" });
      }

      return res.status(200).json({
        id_usuario: usuario.id,
        nome: usuario.nome,
        tipoUsuario: usuario.tipo_usuario,
        id_turma: vinculoAluno.id_turma,
        id_professor: vinculoAluno.turma.id_professor,
      });

    } else if (usuario.tipo_usuario === 'Professor') {
      return res.status(200).json({
        id_usuario: usuario.id,
        nome: usuario.nome,
        tipoUsuario: usuario.tipo_usuario,
      });
      
    } else {
      return res.status(403).json({ error: "Tipo de usuário não permitido para login ou não definido." });
    }

  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: "Erro no servidor" });
  }
}