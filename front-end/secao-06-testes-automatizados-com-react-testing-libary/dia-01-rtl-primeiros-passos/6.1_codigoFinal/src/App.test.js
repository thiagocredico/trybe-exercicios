
import React from 'react';
import { render, waitForElementToBeRemoved } from "@testing-library/react";

import App from './App';
import userEvent from '@testing-library/user-event';

// Describe é usado para descrever o meu teste
// it: usado para um único teste
// test: usado para mais de um teste

xdescribe("Renderizar o <APP /> e...", () => {

  test('se é renderizado um filme com o título "Kingsglaive"', async () => {

    // Acessar
    const { findByText } = render(<App />);
    const titleEl = await findByText("Kingsglaive");

    // Agir

    // Aferir
    expect(titleEl).toBeInTheDocument();
  });

  test('se é renderizado um filme com o título "Kingsglaive" com waitForElementToBeRemoved', async () => {

    // Acessar
    const { getByText } = render(<App />);
    const loadingEl = getByText(/Carregando.../i);

    // Interagir

    // Aferir
    await waitForElementToBeRemoved(loadingEl);

    // Acessar
    const titleEl = getByText(/kingsglaive/i);

    // Interagir

    // Aferir
    expect(titleEl).toBeInTheDocument();

  });

});

describe('Ao clicar no primeiro filme em ver detalhes uma nova tela é carregada e...', () => {

  test("o subtitulo 'Kingsglaive' aparece na tela", async () => {

    // 1. Entrar no App.js
      // Acessar
      const { getByText, getAllByText } = render(<App />);
      const loadingEl = getByText(/Carregando.../i);

      // Interagir

    // 2. Aparece o carregando
      // Aferir
      await waitForElementToBeRemoved(loadingEl);

    // 3. Os filmes são renderizados

    // 4. Clique no ver detalhes
      // Acessar
      // getAllByText: Retorna um Array de elementos
      const buttonsDetails = getAllByText(/Ver detalhes/i);

      // Interagir
      // buttonsDetails[0]: Vou clicar no primeiro elemento da lista retornada
      userEvent.click(buttonsDetails[0]);

    // 4. Muda a página

    // 5. Aparece o carregando
      // Aferir
        await waitForElementToBeRemoved(getByText(/Carregando.../i));


    // Renderiza os detalhes do filme

    // Faz as aferições
      // acessar
      const subTitleEl = getByText(/Subtitle: Final Fantasy XV/i);

      // Interagir

      // Aferir
      expect(subTitleEl).toBeInTheDocument();
  });
})
