import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  login: string;
};

type User = {
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  followers: string;
  location: string;
};
/*
{
  "login": "acenelio",
  "id": 13897257,
  "node_id": "MDQ6VXNlcjEzODk3MjU3",
  "avatar_url": "https://avatars.githubusercontent.com/u/13897257?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/acenelio",
  "html_url": "https://github.com/acenelio",
  "followers_url": "https://api.github.com/users/acenelio/followers",
  "following_url": "https://api.github.com/users/acenelio/following{/other_user}",
  "gists_url": "https://api.github.com/users/acenelio/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/acenelio/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/acenelio/subscriptions",
  "organizations_url": "https://api.github.com/users/acenelio/orgs",
  "repos_url": "https://api.github.com/users/acenelio/repos",
  "events_url": "https://api.github.com/users/acenelio/events{/privacy}",
  "received_events_url": "https://api.github.com/users/acenelio/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nelio Alves",
  "company": "@devsuperior ",
  "blog": "https://devsuperior.com.br",
  "location": "Brazil",
  "email": null,
  "hireable": null,
  "bio": "Ajudo estudantes e profissionais de programação a ingressar ou se recolocar na carreira.\r\n20 anos de experiência profissional, mais de 160 mil alunos online. ",
  "twitter_username": null,
  "public_repos": 272,
  "public_gists": 0,
  "followers": 6398,
  "following": 1,
  "created_at": "2015-08-21T03:24:45Z",
  "updated_at": "2022-03-09T20:40:19Z"
}
{
  "cep": "09040-000",
  "logradouro": "Avenida Portugal",
  "complemento": "até 0650 - lado par",
  "bairro": "Centro",
  "localidade": "Santo André",
  "uf": "SP",
  "ibge": "3547809",
  "gia": "6269",
  "ddd": "11",
  "siafi": "7057"
}
*/
const UserSearch = () => {
  const [user, setUser] = useState<User>();

  const [formData, setFormData] = useState<FormData>({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //    console.log("Clicou no botão!")
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.login}`)
      .then((response) => {
        setUser(response.data);
/*        console.log(response.data);*/
      })
      .catch((error) => {
        setUser(undefined);
        console.log(error);
      });
  };
  return (
    <div className="user-search-container">
      <div className="container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="login"
              value={formData.login}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
        </div>
        {user && (
            <div className="user-content">
            <div className="img-container">
              <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className="user-content-details">
              <h6>Informações</h6>
              <ResultCard title="Perfil: " description={user.url} />
              <ResultCard title="Seguidores: " description={user.followers} />
              <ResultCard title="Localidade: " description={user.location} />
              <ResultCard title="Nome: " description={user.name} />
              </div>
          </div>
      )}
      </div>
    </div>
  );
};

/*
            <div className="user-content">
              <div className="img-container">
                <img src={user.avatar_url} alt={user.login} />
              </div>
              <div className="user-content-details">
                <ResultCard title="Perfil" description={user.url} />
                <ResultCard title="Seguidores" description={user.followers} />
                <ResultCard title="Localidade" description={user.location} />
                <ResultCard title="Nome" description={user.name} />
                </div>
            </div>
*/


export default UserSearch;
