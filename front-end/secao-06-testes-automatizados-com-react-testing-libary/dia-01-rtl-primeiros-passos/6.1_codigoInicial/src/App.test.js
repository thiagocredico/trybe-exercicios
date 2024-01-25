
import React from 'react';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import App from './App';

// O que é o Describe describe("", () => {})
    // O describe é uma função que recebe 2 parametros
    // 1- Descrição do teste
    // 2- E uma callback

// utilizo o test("", () => {}) quando tenho mais de um teste no describe
// utilizo o it("", () => {}) quando eu tenho apenas 1 teste no describe


describe("Renderiza o componente <App /> e...", () => {

  test("deve conter o titulo 'Kingsglaive'", async () => {
    // Acessar
    render(<App />);
    const titleEl = await screen.findByText(/kInGsg/i);

    // Interagir

    // Aferir
    expect(titleEl).toBeInTheDocument();
  });

  test("deve conter o titulo 'Kingsglaive' com waitForElementToBeRemoved", async () => {
    // Acessar
    render(<App />);
    const loadingEl = screen.getByText(/carregan/i);

    // Interagir

    // Aferir
    await waitForElementToBeRemoved(loadingEl);

    // Acessar
    const titleEl = screen.getByText(/kInGsg/i);

    // Interagir

    // Aferir
    expect(titleEl).toBeInTheDocument();
  });
});

describe("Renderizar o <App /> e...", () => {

    test("Ao clicar no primeiro filme o titulo do filme clicado aparece", async () => {

    // Acessar
    const { getByText } = render(<App />);
    const loadingEl = getByText(/carregan/i);

    // Interagir


    // Aferir
    await waitForElementToBeRemoved(loadingEl);


    // Acessar
    const buttonDetails = screen.getAllByText(/ver detalhes/i)

    // Interagir
    userEvent.click(buttonDetails[0]);

    // Aferir


    // Acessar
    const loadingEle = screen.getByText(/carregan/i);

    // Interagir

    // Aferir
    await waitForElementToBeRemoved(loadingEle);


    // Acessar
    const titleElement = screen.getByText(/Final Fantasy/i);

    // Interagir

    // Aferir
    expect(titleElement).toBeInTheDocument()

    })
})
