import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de clientes', () => {
  test('Verifica se a tela Home é renderizada corretamente', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { level: 1, name: /cadastro de clientes/i });
    expect(title).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /faça seu login/i });
    expect(link).toBeInTheDocument();
  });

  test('Verifica se a tela Login é renderizada corretamente', () => {
    // renderWithRouterAndRedux
    // const minhaStoreFake = createStore(rootReducers);
    // const history = createMemoryHistory({ initialEntries: ['/login'] });
    // render(
    //   <Router history={ history }>
    //     <Provider store={ minhaStoreFake }>
    //       <App />
    //     </Provider>
    //   </Router>,
    // );

    renderWithRouterAndRedux(<App />, { initialEntries: ['/login'] });

    const title = screen.getByRole('heading', { name: /login/i });
    expect(title).toBeInTheDocument();
  });

  test('Verifica se a tela Customers mostra "Login não efetuado"', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/customers'] });

    const title = screen.getByRole('heading', { name: /login não efetuado!/i });
    expect(title).toBeInTheDocument();
  });

  test('Verifica se a tela Customers renderiza "Nenhum cliente cadastrado"', () => {
    const initialState = {
      // customers: [],
      // dados de usuario logado
      login: {
        email: 'jensen@jensen.com',
        password: '13423423',
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/customers'], initialState });
    const title = screen.getByRole('heading', { name: /Nenhum cliente cadastrado/i });
    expect(title).toBeInTheDocument();
  });

  test('Verifica se a tela Customers renderiza os customers', () => {
    const initialStateFake = {
      customers: [
        {
          name: 'Sherly',
          age: '18',
          email: 'sherly@trybe.com',
        },
      ],
      login: {
        email: 'rods@trybe.com',
        password: '123456',
      },
    };
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/customers'],
      initialState: initialStateFake,
    });

    // screen.debug();
    const nameCustomer = screen.getByText(/Sherly/);
    expect(nameCustomer).toBeInTheDocument();

    const emailCustomer = screen.getByText(/sherly@trybe.com/);
    expect(emailCustomer).toBeInTheDocument();
  });
});
