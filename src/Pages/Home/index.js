import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import "./styles.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "RobertdeSMaio";

  const handleGetData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newRepos = await response.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    } catch (err) {
      setError(err.message);
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
            Construí alguns projetos com algumas linguagens que tenho
            conhecimento e desejo aprimorar e afinar muito mais minhas
            habilidades.
            <br />
            <br />
            Sigo estudando C# utilizando em ASP.NET, API REST e TDD visando
            aprender mais sobre o backend e JavaScript utilizando a biblioteca
            ReactJS aplicando typescript para aprender mais sobre o frontend,
            utilizo integrações com banco de dados SQL ( MySQL, SQLServer ) e
            NoSQL ( MongoDB ).
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
export default App;
