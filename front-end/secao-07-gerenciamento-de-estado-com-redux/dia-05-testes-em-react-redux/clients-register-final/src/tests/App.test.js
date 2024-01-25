import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import renderWithRouter from './helpers/renderWithRouter';

describe('Cadastro de clientes', () => {
  test('Verifica se a tela Home é renderizada corretamente', () => {
    renderWithRouter(<App />);

    const headingElement = screen.getByRole('heading', { level: 1, name: /cadastro de clientes/i });
    const linkElement = screen.getByRole('link', { name: /faça seu login/i });

    expect(headingElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  test('Verifica se a tela Login é renderizada corretamente', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/login'] });
    const titleElement = screen.getByRole('heading', { level: 1, name: /login/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('Verifica se a tela Customers mostra "Login não efetuado"', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/customers'] });

    const titleElement = screen.getByRole('heading', { level: 1, name: /Login não efetuado!/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('Verifica se a tela Customers renderiza "Nenhum cliente cadastrado"', async () => {
    const initialState = {
      customers: [],
      login: {
        name: 'Turma',
        email: 'turma@test.com',
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/customers'], initialState });

    const titleElement = screen.getByRole('heading', { level: 1, name: /Nenhum cliente cadastrado/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('Verifica se a tela Customers renderiza os customers', async () => {
    const initialState = {
      customers: [
        {
          name: 'Redux',
          age: '8',
          email: 'redux@test.com',
        },
      ],
      login: {
        name: 'Turma',
        email: 'turma@test.com',
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/customers'], initialState });

    const emailElement = screen.getByText(/redux@test.com/);
    const nameElement = screen.getByTestId('client-name');

    expect(emailElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
