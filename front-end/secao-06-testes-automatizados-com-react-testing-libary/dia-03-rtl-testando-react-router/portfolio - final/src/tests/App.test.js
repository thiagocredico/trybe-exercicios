import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from "react-router-dom";
import App from '../App';
import Comments from '../pages/Comments';
import renderWithRouter from './renderWithRouter';

describe('Testando nosso portfolio', () => {

  describe('Renderiza o componente <Home />', () => {

    it('Verifica se a Home renderiza o título e o subtítulo', () => {

      // Criei uma memória virtual de navegação
      const history = createMemoryHistory();

      // Acessar
      render(
        <Router history={history}>
          <App />
        </Router>
      );
      const titleEl = screen.getByRole("heading", {
        name: /home page/i,
      });
      const subTitleEl = screen.getByText(/essa é a homepage/i);

      // Interagir

      // Aferir
      expect(titleEl).toBeInTheDocument();
      expect(subTitleEl).toBeInTheDocument();
    });
  });

  describe('Teste o componente <About />', () => {

    it('Navega da home para o about', () => {
      // Acessar
        // Não funciona pq quando acessei era estava na rota "/"
        // const { history: { location } } = renderWithRouter(<App />);

      const navgation = renderWithRouter(<App />);
      const buttonAbout = screen.getByRole("link", {
        name: /sobre/i,
      });

      // Interagir
      userEvent.click(buttonAbout);

      // Aferir
        // Aqui posso descontruir pq a rota já mudou
      const { history: { location } } = navgation;
      expect(location.pathname).toBe("/about");
    });

  });

  describe('Teste o componente <Project />', () => {

    it('Navega da Home para a Project', () => {

      // Acessar
      const navgation = renderWithRouter(<App />);
      const buttonProject = screen.getByRole("link", {
        name: /projetos/i,
      });

      // Interagir
      userEvent.click(buttonProject);

      // Aferir
        // Aqui posso descontruir pq a rota já mudou
      const { history: { location } } = navgation;
      expect(location.pathname).toBe("/projects")

      // Acessar
      const titleEl = screen.getByRole("heading", {
        name: /meus projetos/i,
      });

      // Interagir

      // Aferir
      expect(titleEl).toBeInTheDocument()
    })
  });

  describe('Teste o componente <NotFound />', () => {

    it('Mostra a página 404 se nenhuma rota foi encontrada', () => {

      // Acessar
      const { history } = renderWithRouter(<App />)

      // Interagir
      history.push("xablau")

      // Aferir
      const { location } = history;
      expect(location.pathname).toBe("/xablau");


      // Acessar
      const imgEl = screen.getByRole("img", {
        name: /erro 404/i,
      });

      // Interagir

      // Aferir
      expect(imgEl).toBeInTheDocument()
    })
  });

  describe.only('Teste o componente <Comments />', () => {

    it('Mostra se a página comments é renderizada e o comentário adicionado também é renderizado', async () => {
      const TEXT = "A aula ta top";

      // Acessar
      render(<Comments />);
      const textBoxEl = screen.getByRole("textbox");

      // Interagir
      userEvent.type(textBoxEl, TEXT);

      // Aferir
      expect(textBoxEl).toHaveValue(TEXT);

      // Acessar
      const buttonEl = screen.getByRole("button", {
        name: /deixe um comentário/i,
      });

      userEvent.click(buttonEl);

      // Acessar
      // const commentEl = await screen.findAllByRole("listitem");
      const commentEl = await screen.findByText(TEXT);

      // Interagir

      // Aferir
      // expect(commentEl[0].innerHTML).toBe(TEXT);
      expect(commentEl).toBeInTheDocument();
    });
  });
});
