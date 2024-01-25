/* eslint-disable no-undef */
import { drawCard, getNewDeck } from './api';
import fetch from 'node-fetch';

global.fetch = fetch;

describe('API', () => {
  describe('getNewDeck test', () => {
    it('Deve retornar um objeto com os dados da API', async () => {
      const data = await getNewDeck();
      expect(data).toHaveProperty('success');
      expect(data).toHaveProperty('deck_id');
      expect(data).toHaveProperty('shuffled');
      expect(data).toHaveProperty('remaining');
    });
  });

  describe('drawCard test', () => {
    it('Deve retornar um objeto com os dados da API ao passar um deckId correto', async () => {
      const deck = await getNewDeck();
      const result = await drawCard(deck.deck_id);
      const card = result.cards[0];
      expect(card).toHaveProperty('code');
      expect(card).toHaveProperty('image');
      expect(card).toHaveProperty('value');
      expect(card).toHaveProperty('suit');
    });

    it('Deve retornar um erro caso o deck_id seja inválido', async () => {
      const promise = drawCard('invalid-deck-id');
      await expect(promise).rejects.toThrow();
    });
  });
});