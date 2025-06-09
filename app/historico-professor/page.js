'use client';

import Head from 'next/head';
import Link from 'next/link';
import '../home/home.css';

export default function CorrecaoPage() {
  return (
    <>
      <Head>
        <title>Tabufácil | Correção</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="nuvem"></div>
      <div className="nuvem2"></div>
      <div className="nuvem3"></div>

      {/* Voltar */}
      <div className="close">&lt;</div>

      <div id="centro_avisos" style={{ marginTop: 0 }}>
        <h2 className="texto-central">Treinamentos Realizados</h2>
        <div className="box_avisos">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Aluno</th>
                <th>Turma</th>
                <th>Média</th>
                <th>Nota</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>632</td>
                <td>18/05/2025 15:32</td>
                <td>Rafael Lima</td>
                <td>4º A</td>
                <td>10</td>
                <td> </td>
                <td><Link href="/correcao_2">Abrir</Link></td>
              </tr>
              <tr>
                <td>631</td>
                <td>16/05/2025 10:01</td>
                <td>Mikael Bueno</td>
                <td>6º A</td>
                <td>10</td>
                <td><b>A</b></td>
                <td><Link href="/treinamento_correcao_professor">Abrir</Link></td>
              </tr>
              <tr>
                <td>630</td>
                <td>15/05/2025 16:23</td>
                <td>Juliana Santos da Silva</td>
                <td>5º C</td>
                <td>5,12</td>
                <td><b>C</b></td>
                <td><Link href="/treinamento_correcao_professor">Abrir</Link></td>
              </tr>
              <tr>
                <td>629</td>
                <td>15/05/2025 13:49</td>
                <td>Carlos da Silva Santos</td>
                <td>5º B</td>
                <td>8,79</td>
                <td> </td>
                <td><Link href="/treinamento_correcao_professor">Abrir</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
