"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use 'next/navigation' em vez de 'next/router' no Next.js 13
import "./page.css";
import { User, Lock } from "lucide-react";
import { useLoginValidation } from "../hooks/loginValidation";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const { validate } = useLoginValidation();
  const router = useRouter(); // Iniciando o uso do hook router corretamente

  const handleLogin = async () => {
    const erroValidacao = validate(usuario, senha);
    if (erroValidacao) {
      setErro(erroValidacao);
      return;
    }
    setErro("");

    // Faça a requisição ao backend para verificar as credenciais
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: usuario, senha: senha }),
    });

    if (response.ok) {
      // Redireciona o usuário para a tela principal após login bem-sucedido
      router.push("/home"); // Rota de exemplo após login bem-sucedido
    } else {
      const data = await response.json();
      setErro(data.error || "Erro desconhecido");
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

        {erro && <p className="erro">{erro}</p>}

        <button className="btn" onClick={handleLogin}>
          ENTRAR
        </button>

        {/* LINK DE REGISTRO (AGORA DENTRO DA LEFT-PANEL) */}
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