import { useEffect, useState } from "react";
import img from "../../Assets/1766494627948.png";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import ItemList from "../../components/ItemList";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "RobertdeSMaio";

  const handleGetData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );
      if (!response.ok) throw new Error("Erro na requisição");
      const newRepos = await response.json();
      setRepos(newRepos);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Carregando...
      </div>
    );
  if (error) return <div className="text-red-500 p-10">Erro: {error}</div>;

  return (
    <div className="relative min-h-screen bg-brand-bg flex flex-col">
      <Header />

      <main className="relative z-10 flex-1 w-full bg-brand-bg pb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 mt-10 rounded-xl shadow-2xl">
          <section className="flex flex-col items-center">
            <img
              className="h-32 w-32 border-2 border-black rounded-full object-cover mb-6 shadow-md"
              src={img}
              alt="profileImg"
            />
            <h3 className="text-3xl font-bold text-black mb-8">Sobre Mim</h3>

            <article className="text-gray-800 leading-relaxed text-justify space-y-6">
              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Olá, sou <strong>Robert</strong>, atualmente busco aumentar meu
                conhecimento pelo mundo da tecnologia.
              </p>
              <p className=" arial hover:transition-transform duration-100 hover:translate-x-2">
                Com uma trajetória sólida em TI e Infraestrutura, atuo na
                resolução de problemas complexos, sustentação de sistemas e
                apoio direto ao desenvolvimento. Atualmente, na Ágape
                Consultoria e no Grupo Coutinho, foco em garantir a estabilidade
                de produtos digitais através de testes de QA, manipulação de
                JSON e suporte técnico especializado.
              </p>
              <p className=" arial  hover:transition-transform duration-100 hover:translate-x-2">
                Minha base técnica foi construída através de experiências em
                Field Service, Automação e Administração de Redes, gerenciando
                ambientes Windows/Linux, servidores e ferramentas como Active
                Directory e ERP TOTVS (Consinco). Essa bagagem me permite ter
                uma visão 360° do ciclo de vida de um software, desde a
                infraestrutura até a experiência do usuário final.
              </p>
              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Diferencial Militar: Servi por 4 anos no Exército Brasileiro,
                onde consolidei competências críticas de liderança, disciplina
                rigorosa, resiliência e a capacidade de tomar decisões rápidas
                sob pressão — habilidades que aplico diariamente na resolução de
                incidentes críticos de TI.
              </p>

              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Foco Tecnológico & Desenvolvimento: Atualmente, direciono minha
                carreira para o desenvolvimento de soluções robustas, com foco
                nas seguintes tecnologias:
              </p>

              <p className="arial hover:transition-transform duration-100 hover:translate-x-2">
                Back-end: C# / .NET, Java.
              </p>
              <p className=" arial  hover:transition-transform duration-100 hover:translate-x-2">
                Front-end: React.js e JavaScript.
              </p>
              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Dados: SQL, NoSQL, Power BI e Ciência de Dados (Pós-graduação em
                curso).
              </p>
              <p className=" arial hover:transition-transform duration-100 hover:translate-x-2">
                DevOps/Ferramentas: Git, Versionamento, JSON, Ambientes
                Virtualizados.
              </p>
              <p className=" arial  hover:transition-transform duration-100 hover:translate-x-2">
                Sou movido pela resolução de problemas através da tecnologia e
                pela busca constante de eficiência operacional.
              </p>

              <div className=" arial  hover:transition-transform duration-100 hover:translate-x-2">
                <strong>Objetivo:</strong> Atuar como Desenvolvedor de Software
                ou Analista de Sistemas, unindo minha experiência em sustentação
                com a criação de novas soluções tecnológicas.
              </div>
            </article>
          </section>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 mt-10 rounded-xl shadow-2xl">
          <div>
            <h4 className="text-3xl font-bold text-black text-center mb-8">
              Projetos em construção
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/RobertdeSMaio/sistema-notificacao-escolar-front"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 group-hover:text-blue-600">
                  sistema-notificacao-escolar-front
                </strong>
              </a>

              <a
                href="https://github.com/RobertdeSMaio/investdash"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 group-hover:text-blue-600">
                  InvestDash
                </strong>
              </a>
            </div>
          </div>
          <hr className="my-12 border-gray-200" />

          {repos?.length > 0 && (
            <section>
              <h4 className="text-3xl font-bold text-black text-center mb-8">
                Repositórios GitHub
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="hover:translate-x-2 transition-transform"
                  >
                    <ItemList
                      key={repo.id}
                      title={repo.name}
                      description={repo.description}
                      url={repo.html_url}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
