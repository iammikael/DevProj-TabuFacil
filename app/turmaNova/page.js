"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NovaTurma() {
  const [nome, setNome] = useState("");
  const router = useRouter();

  async function criarTurma(e) {
    e.preventDefault();

    const res = await fetch("/api/criarNovaTurma", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });

    if (res.ok) {
      router.push("/turmas");
    } else {
      alert("Erro ao criar turma");
    }
  }

  return (
    <form onSubmit={criarTurma} className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Nova Turma</h1>
      <input
        type="text"
        placeholder="Nome da turma"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Criar
      </button>
    </form>
  );
}