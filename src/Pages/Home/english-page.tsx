import { useEffect, useState } from "react";
import img from "../../Assets/1766494627948.png";
import ItemList from "../../components/ItemList";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const REPOS_PER_PAGE = 9;

export default function English() {
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
                Hi, I'm <strong>Robert</strong>, I'm actually looking to improve
                my knowledge of the tech world.
              </p>
              <p className=" arial hover:transition-transform duration-100 hover:translate-x-2">
                With a solid background in IT Infrastructure and Systems
                Sustainability, I specialize in complex problem-solving, system
                maintenance, and providing direct support to development teams.
                Currently, at Ágape Consultoria and Grupo Coutinho, I focus on
                ensuring software stability through QA testing, JSON
                manipulation, and specialized technical support.
              </p>
              <p className=" arial  hover:transition-transform duration-100 hover:translate-x-2">
                My technical foundation was built through extensive experience
                in Field Service, Automation, and Network Administration,
                managing Windows/Linux environments, servers, and enterprise
                tools such as Active Directory and TOTVS (Consinco) ERP. This
                background allows me to have a 360° view of the software
                lifecycle, from infrastructure to the end-user experience.
              </p>
              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Military Background: I served for 4 years in the Brazilian Army,
                where I consolidated critical soft skills: leadership, rigorous
                discipline, resilience, and the ability to make rapid decisions
                under pressure—skills I apply daily when handling critical IT
                incidents.
              </p>

              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Technical Focus & Development: Currently, I am pivoting my
                career toward building robust technological solutions, focusing
                on the following stack:
              </p>

              <p className="arial hover:transition-transform duration-100 hover:translate-x-2">
                Back-end: C# / .NET.
              </p>
              <p className=" arial  hover:transition-transform duration-100 hover:translate-x-2">
                Front-end: React.js e JavaScript.
              </p>
              <p className="arial  hover:transition-transform duration-100 hover:translate-x-2">
                Data: SQL, NoSQL, Power BI, Data Science and Python
                (Post-graduate studies in progress);
              </p>
              <p className=" arial hover:transition-transform duration-100 hover:translate-x-2">
                DevOps & Tools: Git, Versioning, JSON, and Virtualized
                Environments.
              </p>
            </article>
          </section>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 mt-10 rounded-xl shadow-2xl">
          <div>
            <h4 className="text-3xl font-bold text-black text-center mb-8">
              In Progress
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/RobertdeSMaio/investdash"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 hover:text-blue-600">
                  InvestDash
                </strong>
              </a>
            </div>
          </div>
          <hr className="my-12 border-gray-200" />
          <div>
            <h4 className="text-3xl font-bold text-black text-center mb-8">
              Finished Projects
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://github.com/RobertdeSMaio/pokedex_flutter"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 hover:text-blue-600">
                  Teste Grupo Carone - PokeDex
                </strong>
              </a>
              <a
                href="https://github.com/RobertdeSMaio/sistema-notificacao-escolar-front"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 hover:text-blue-600">
                  School System
                </strong>
              </a>
              <a
                href="https://github.com/RobertdeSMaio/Desafio-Jitterbit-API-de-Pedidos"
                className="hover:bg-gray-50 p-4 rounded-lg border border-transparent hover:border-gray-200 transition-transform duration-300 hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong className="block text-2xl text-black mb-2 hover:text-blue-600">
                  Jitterbit challenge - Order API
                </strong>
              </a>
            </div>
          </div>
          <hr className="my-12 border-gray-200" />

          {repos?.length > 0 && (
            <section>
              <h4 className="text-3xl font-bold text-black text-center mb-8">
                GitHub Repos
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

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    ← Previous
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
                    Next →
                  </button>
                </div>
              )}
              <p className="text-center text-sm text-gray-400 mt-3">
                Page {currentPage} of {totalPages} · {repos.length} Repos
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
