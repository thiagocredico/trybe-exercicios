import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Renderiza o <App /> e...", () => {

  test("verifica se o titulo esta na tela", () => {

    // Acessar
    render(<App />)
    // const titleEl = screen.getByText(/Piadas do Chuck/i);
    const titleEl = screen.getByRole("heading", { name: /Piadas do Chuck/i, level: 1 });

    // Interagir

    // Aferir
    expect(titleEl).toBeInTheDocument();
  })

  test("renderiza uma piada na tela.", async () => {

    // global.fetch = async () => ({
    //   json: async () => ({
    //     value: "O que o pagodeiro foi fazer na missa? Cantar pá god",
    //     icon_url:
    //       "https://firebasestorage.googleapis.com/v0/b/prints-aula-ao-vivo.appspot.com/o/prints-aula-ao-vivo%2FCaptura%20de%20Tela%202023-03-24%20a%CC%80s%2017.01.13.png?alt=media&token=4effbdf0-75d9-4a1c-aed3-9aa023dd688e",
    //   }),
    // });

    // jest.spyOn(global, "fetch").mockImplementation(() => {
    //   return Promise.resolve({
    //     json: () =>
    //       Promise.resolve({
    //         value: "O que o Pagodeiro foi fazer na igreja? Cantar Pá god",
    //         icon_url: "",
    //       }),
    //   });
    // });

    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          value: "O que o Pagodeiro foi fazer na igreja? Cantar Pá god",
          url_icon: "",
        }),
    });



    // Acessar
    render(<App />);
    const joke = await screen.findByText(/O que o pagodeiro foi fazer/i);

    // Aferir

    // Interagir
    expect(joke).toBeInTheDocument();
  })

});
