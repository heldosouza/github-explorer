import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/34147803?s=460&u=087df2e74b8478181ade286069e948f38b4a7f33&v=4"
            alt="Heldo Souza"
          />
          <div>
            <strong>heldosouza/github-explorer</strong>
            <p>Description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/34147803?s=460&u=087df2e74b8478181ade286069e948f38b4a7f33&v=4"
            alt="Heldo Souza"
          />
          <div>
            <strong>heldosouza/github-explorer</strong>
            <p>Description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/34147803?s=460&u=087df2e74b8478181ade286069e948f38b4a7f33&v=4"
            alt="Heldo Souza"
          />
          <div>
            <strong>heldosouza/github-explorer</strong>
            <p>Description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
