import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import ItemList from "../../components/ItemList";
import "./styles.css";

export default function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "RobertdeSMaio";

  interface Repo {
    id: number;
    name: string;
    description: string;
  }

  const handleGetData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newRepos = await response.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="App">
      <Header />
      <div className="about">
        <div className="conteudo">
          <img
            className="imgProfile"
            src="https://media.licdn.com/dms/image/v2/D4D03AQGNdO34AacrVA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714662320090?e=1734566400&v=beta&t=WaIMCK0t2ijYvuRIfGO5QqvmKd6gEkmaP8dJM4LKfv0"
            alt="profileImg"
          ></img>
          <h3>Sobre Mim</h3>
          <br />
          <br />
          <h4>
            Olá, sou Robert, atualmente busco aumentar meu conhecimento pelo
            mundo da tecnologia.
            <br />
            <br />
            Com uma trajetória sólida em TI e Infraestrutura, atuo na resolução
            de problemas complexos, sustentação de sistemas e apoio direto ao
            desenvolvimento. Atualmente, na Ágape Consultoria e no Grupo
            Coutinho, foco em garantir a estabilidade de produtos digitais
            através de testes de QA, manipulação de JSON e suporte técnico
            especializado. Minha base técnica foi construída através de
            experiências em Field Service, Automação e Administração de Redes,
            gerenciando ambientes Windows/Linux, servidores e ferramentas como
            Active Directory e ERP TOTVS (Consinco).
            <br />
            <br />
            Essa bagagem me permite ter uma visão 360° do ciclo de vida de um
            software, desde a infraestrutura até a experiência do usuário final.
            Diferencial Militar: Servi por 4 anos no Exército Brasileiro, onde
            consolidei competências críticas de liderança, disciplina rigorosa,
            resiliência e a capacidade de tomar decisões rápidas sob pressão —
            habilidades que aplico diariamente na resolução de incidentes
            críticos de TI.
            <br />
            <br />
            Foco Tecnológico & Desenvolvimento: Atualmente, direciono minha
            carreira para o desenvolvimento de soluções robustas, com foco nas
            seguintes tecnologias:
            <br />
            <br />
            Back-end: C# / .NET, Java.
            <br />
            <br />
            Front-end: React.js e JavaScript.
            <br />
            <br />
            Dados: SQL, NoSQL, Power BI e Ciência de Dados (Pós-graduação em
            curso).
            <br />
            <br />
            DevOps/Ferramentas: Git, Versionamento, JSON, Ambientes
            Virtualizados. Sou movido pela resolução de problemas através da
            tecnologia e pela busca constante de eficiência operacional. 🚀
            Objetivo: Atuar como Desenvolvedor de Software ou Analista de
            Sistemas, unindo minha experiência em sustentação com a criação de
            novas soluções tecnológicas.
            <br />
            <br />
            Já desenvolvi em Java, Python, C e C++ em praticas universitárias
          </h4>
        </div>
        <div className="projetos">
          {repos?.length ? (
            <div>
              <h4 className="repositorio">Repositorios</h4>
              {repos.map((repo) => (
                <ItemList
                  key={repo.id}
                  title={repo.name}
                  description={repo.description}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
