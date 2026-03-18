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

const REPOS_PER_PAGE = 9;

export default function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "RobertdeSMaio";
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE);
  const paginatedRepos = repos.slice(
    (currentPage - 1) * REPOS_PER_PAGE,
    currentPage * REPOS_PER_PAGE,
  );

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 text-sm">Carregando...</p>
        </div>
      </div>
    );

  if (error) return <div className="text-red-500 p-10">Erro: {error}</div>;

  return (
    <div className="relative min-h-screen bg-brand-bg flex flex-col">
      <Header />
      {/* Parte da apresentação */}
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
                Back-end: C# / .NET.
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
        {/* Parte de projetos */}
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 mt-10 rounded-xl shadow-2xl">
          <div>
            <h4 className="text-3xl font-bold text-black text-center mb-8">
              Projetos em Finalizado
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/RobertdeSMaio/sistema-notificacao-escolar-front"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 group-hover:text-blue-600">
                  Sistema escolar
                </strong>
              </a>
              <a
                href="https://github.com/RobertdeSMaio/Desafio-Jitterbit-API-de-Pedidos"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Desafio Jitterbit - API de Pedidos</strong>
              </a>
            </div>
          </div>
          <hr className="my-12 border-gray-200" />
          <div>
            <h4 className="text-3xl font-bold text-black text-center mb-8">
              Projetos em construção
            </h4>
            <div className="grid grid-cols-3 gap-4">
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
                {paginatedRepos.map((repo) => (
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

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    ← Anterior
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-lg text-sm font-medium transition ${
                          currentPage === page
                            ? "bg-black text-white"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    Próximo →
                  </button>
                </div>
              )}
              <p className="text-center text-sm text-gray-400 mt-3">
                Página {currentPage} de {totalPages} · {repos.length}{" "}
                repositórios
              </p>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
