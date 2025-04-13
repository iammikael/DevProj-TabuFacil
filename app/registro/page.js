"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, Mail } from "lucide-react";
import { useRegisterValidation } from "../../hooks/RegisterValidation";
import "./registro.css";

const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const { validate } = useRegisterValidation();
  const router = useRouter();

  const handleRegister = async () => {
    const erroValidacao = validate(usuario, email, senha, confirmarSenha);
    if (erroValidacao) {
      setErro(erroValidacao);
      return;
    }

    setErro("");

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data?.mensagem || "Erro ao registrar. Tente novamente.");
        return;
      }

      console.log("Usuário registrado com sucesso:", data);
      router.push("/");
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo-group">
          <img src="/logo-unidade.svg" alt="Logo Tabufácil" className="logo" />
          <div className="text-group">
            <h1 className="title">TABUFÁCIL</h1>
            <p className="subtitle">Facilitando a tabuada</p>
          </div>
        </div>

        <h2 className="form-title">Cadastro</h2>

        <InputField
          Icon={User}
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <InputField
          Icon={Mail}
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          Icon={Lock}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <InputField
          Icon={Lock}
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        {erro && <p className="erro">{erro}</p>}

        <button className="btn" onClick={handleRegister}>
          CADASTRAR
        </button>

        <p className="registro-link">
          Já tem uma conta?{" "}
          <Link href="/">
            <span className="link-text">Fazer login</span>
          </Link>
        </p>
      </div>

      <div className="right-panel">
        <div className="background" />
      </div>
    </div>
  );
};

export default Register;

// Componente reutilizável para campos de entrada
const InputField = ({ Icon, ...props }) => (
  <div className="input-group">
    <Icon className="icon" />
    <input {...props} />
  </div>
);