"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./page.css";
import { User, Lock } from "lucide-react";
import { useLoginValidation } from "../hooks/loginValidation";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const { validate } = useLoginValidation();
  const router = useRouter();

  const handleLogin = async () => {
    const erroValidacao = validate(usuario, senha);
    if (erroValidacao) {
      setErro(erroValidacao);
      return;
    }

    setErro(""); // Limpa erro anterior

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: usuario, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data?.error || "Credenciais inválidas");
        return;
      }

       localStorage.setItem("usuario", JSON.stringify(data));

      // Redirecionamento com base no tipo do usuário
      switch (data.tipoUsuario) {
        case "Aluno":
          router.push("/home");
          break;
        case "Professor":
          router.push("/home-prof");
          break;
        default:
          setErro("Tipo de usuário desconhecido.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        {/* LOGO + TÍTULO */}
        <div className="logo-group">
          <img src="/logo-unidade.svg" alt="Logo Tabufácil" className="logo" />
          <div className="text-group">
            <h1 className="title">TABUFÁCIL</h1>
            <p className="subtitle">Facilitando a tabuada</p>
          </div>
        </div>

        {/* INPUTS */}
        <div className="input-group">
          <User className="icon" />
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="input-group">
          <Lock className="icon" />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* MENSAGEM DE ERRO */}
        {erro && <p className="erro">{erro}</p>}

        {/* BOTÃO LOGIN */}
        <button className="btn" onClick={handleLogin}>
          ENTRAR
        </button>

        {/* LINK DE REGISTRO */}
        <p className="registro-link">
          Não tem conta?{" "}
          <Link href="/registro">
            <span className="link-text">Registre-se</span>
          </Link>
        </p>
      </div>

      <div className="right-panel">
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Login;
