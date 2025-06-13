"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Lock,
  Mail,
  NotebookPen,
  ListChecks,
} from "lucide-react";
import { useRegisterValidation } from "../../hooks/RegisterValidation";
import "./registro.css";

const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipo, setTipo] = useState("Aluno");
  const [nomeTurma, setNomeTurma] = useState(""); 
  const [idTurma, setIdTurma] = useState("");     
  const [erro, setErro] = useState("");

  const [turmasDisponiveis, setTurmasDisponiveis] = useState([]);
  const [carregandoTurmas, setCarregandoTurmas] = useState(false);

  const { validate } = useRegisterValidation();
  const router = useRouter();

  useEffect(() => {
    if (tipo === "Aluno") {
      const fetchTurmas = async () => {
        setCarregandoTurmas(true);
        setErro("");
        try {
          const response = await fetch("/api/turmas");
          if (!response.ok) throw new Error("Falha ao buscar turmas");

          const data = await response.json();
          setTurmasDisponiveis(data);
          setIdTurma("");
        } catch (error) {
          console.error("Erro ao buscar turmas:", error);
          setErro(error.message || "Não foi possível carregar as turmas.");
          setTurmasDisponiveis([]);
        } finally {
          setCarregandoTurmas(false);
        }
      };
      fetchTurmas();
    } else {
      setTurmasDisponiveis([]);
      setIdTurma("");
    }
  }, [tipo]);

  const handleRegister = async () => {
    const erroValidacao = validate(usuario, email, senha, confirmarSenha);
    if (erroValidacao) return setErro(erroValidacao);

    if (tipo === "Professor" && !nomeTurma.trim()) {
      return setErro("O nome da turma é obrigatório para professores.");
    }
    if (tipo === "Aluno" && !idTurma) {
      return setErro("Por favor, selecione uma turma.");
    }

    setErro("");

    const body = {
      usuario,
      email,
      senha,
      tipoUsuario: tipo,
      nomeTurma: tipo === "Professor" ? nomeTurma : undefined,
      idTurma: tipo === "Aluno" ? idTurma : undefined,
    };

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        return setErro(data?.mensagem || "Erro ao registrar. Tente novamente.");
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

        <div className="select-group">
          <label htmlFor="tipo">Tipo de usuário:</label>
          <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
          </select>
        </div>

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

        {tipo === "Professor" ? (
          <InputField
            Icon={NotebookPen}
            type="text"
            placeholder="Nome da nova turma"
            value={nomeTurma}
            onChange={(e) => setNomeTurma(e.target.value)}
          />
        ) : (
          <div className="input-group">
            <ListChecks className="icon" />
            <select
              id="idTurma"
              value={idTurma}
              onChange={(e) => setIdTurma(e.target.value)}
              disabled={carregandoTurmas || turmasDisponiveis.length === 0}
            >
              <option value="" disabled>
                {carregandoTurmas ? "Carregando turmas..." : "Selecione uma turma"}
              </option>
              {!carregandoTurmas && turmasDisponiveis.length === 0 && (
                <option value="" disabled>
                  Nenhuma turma disponível
                </option>
              )}
              {turmasDisponiveis.map((turma) => (
                <option key={turma.id} value={turma.id.toString()}>
                  {turma.nome}
                </option>
              ))}
            </select>
          </div>
        )}

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
          <span>Já tem uma conta? </span>
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

const InputField = ({ Icon, ...props }) => (
  <div className="input-group">
    <Icon className="icon" />
    <input {...props} />
  </div>
);