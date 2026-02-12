import { useEffect, useState } from "react";
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
    <div className="relative min-h-screen bg-[#233338] flex flex-col">
      <Header />

      <main className="relative z-10 flex-1 w-full bg-[#233338] pb-10">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 mt-10 rounded-xl shadow-2xl">
          <section className="flex flex-col items-center">
            <img
              className="h-32 w-32 border-2 border-black rounded-full object-cover mb-6 shadow-md"
              src="https://media.licdn.com/dms/image/v2/D5603AQFkWpZRbrM8Kw/profile-displayphoto-crop_800_800/B56ZtLSOLzIcAI-/0/1766494627857?e=1770854400&v=beta&t=Mldtp2Ll3pRPBf8JIEjD4kyA4pvvz4uDyVaYvd7XkIA"
              alt="profileImg"
            />
            <h3 className="text-3xl font-bold text-black mb-8">Sobre Mim</h3>

            <article className="text-gray-800 leading-relaxed text-justify space-y-6">
              <p>
                Olá, sou <strong>Robert</strong>, atualmente busco aumentar meu
                conhecimento pelo mundo da tecnologia.
              </p>
              <p>
                Com uma trajetória sólida em TI e Infraestrutura, atuo na
                resolução de problemas complexos, sustentação de sistemas e
                apoio direto ao desenvolvimento. Atualmente, na Ágape
                Consultoria e no Grupo Coutinho, foco em garantir a estabilidade
                de produtos digitais através de testes de QA, manipulação de
                JSON e suporte técnico especializado.
              </p>
              <p>
                Minha base técnica foi construída através de experiências em
                Field Service, Automação e Administração de Redes, gerenciando
                ambientes Windows/Linux, servidores e ferramentas como Active
                Directory e ERP TOTVS (Consinco). Essa bagagem me permite ter
                uma visão 360° do ciclo de vida de um software, desde a
                infraestrutura até a experiência do usuário final.
              </p>
              <p>
                Diferencial Militar: Servi por 4 anos no Exército Brasileiro,
                onde consolidei competências críticas de liderança, disciplina
                rigorosa, resiliência e a capacidade de tomar decisões rápidas
                sob pressão — habilidades que aplico diariamente na resolução de
                incidentes críticos de TI.
              </p>

              <p>
                Foco Tecnológico & Desenvolvimento: Atualmente, direciono minha
                carreira para o desenvolvimento de soluções robustas, com foco
                nas seguintes tecnologias:
              </p>

              <p>Back-end: C# / .NET, Java.</p>
              <p>Front-end: React.js e JavaScript.</p>
              <p>
                Dados: SQL, NoSQL, Power BI e Ciência de Dados (Pós-graduação em
                curso).
              </p>
              <p>
                DevOps/Ferramentas: Git, Versionamento, JSON, Ambientes
                Virtualizados.
              </p>
              <p>
                Sou movido pela resolução de problemas através da tecnologia e
                pela busca constante de eficiência operacional.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black italic">
                <strong>Objetivo:</strong> Atuar como Desenvolvedor de Software
                ou Analista de Sistemas, unindo minha experiência em sustentação
                com a criação de novas soluções tecnológicas.
              </div>
            </article>
          </section>

          <hr className="my-12 border-gray-200" />

          {repos?.length > 0 && (
            <section>
              <h4 className="text-3xl font-bold text-black text-center mb-8">
                Repositórios GitHub
              </h4>
              <div className="grid grid-cols-1 gap-4">
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
