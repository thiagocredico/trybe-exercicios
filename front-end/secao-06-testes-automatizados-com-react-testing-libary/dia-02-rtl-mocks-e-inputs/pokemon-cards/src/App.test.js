import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('Renderize o <App /> e...', () => {

  xtest('verifica se a imagem do logo aparece na tela', () => {

    // Acessar
    render(<App />)
    const logoImg = screen.getByRole("img", {
      name: /logo/i,
    });

    // Interagir

    // Aferir
    expect(logoImg).toBeInTheDocument();
  })

  xtest('verifica se o título "Pesquise um Pokemon" aparece na tela', () => {
    // Acessar
    render(<App />)
    const textEl = screen.getByRole("textbox");

    // Interagir
    userEvent.type(textEl, "pikachu");

    // Aferir
    expect(textEl).toHaveValue("pikachu");
  });



  test('Verifica se informar um pokemon, e clicar em buscar renderiza os detalhes', async () => {

    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            cards: [
              {
                name: "Pikachu",
                imageUrl: "https://images.pokemontcg.io/base1/1.png",
              },
            ],
          }),
      });
    });


    // Acessar
    render(<App />);
    const textEl = screen.getByRole("textbox");
    const buttonEl = screen.getByRole("button", {
      name: /pesquisar/i,
    });

    // Interagir
    userEvent.type(textEl, "pikachu");
    userEvent.click(buttonEl);

    // Aferir

    // Acessar
    const pokemonEl = await screen.findByRole("heading", {
      name: /pikachu/i,
    });

    // Agir

    // Aferir
    expect(pokemonEl).toBeInTheDocument();
  });

})

