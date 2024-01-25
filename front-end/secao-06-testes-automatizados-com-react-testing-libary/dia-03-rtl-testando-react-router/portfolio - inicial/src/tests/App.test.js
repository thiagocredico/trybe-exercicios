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

      // Acessar

      // Interagir

      // Aferir
    });
  });

  describe('Teste o componente <About />', () => {

    it('Navega da home para o about', () => {

      // Acessar

      // Interagir

      // Aferir
    });

  });

  describe('Teste o componente <Project />', () => {

    it('Navega da Home para a Project', () => {

      // Acessar

      // Interagir

      // Aferir
    })
  });

  describe('Teste o componente <NotFound />', () => {

    it('Mostra a página 404 se nenhuma rota foi encontrada', () => {

      // Acessar

      // Interagir

      // Aferir
    })
  });

  describe('Teste o componente <Comments />', () => {

    it('Mostra se a página comments é renderizada e o comentário adicionado também é renderizado', async () => {

      // Acessar

      // Interagir

      // Aferir
    });
  });
});
