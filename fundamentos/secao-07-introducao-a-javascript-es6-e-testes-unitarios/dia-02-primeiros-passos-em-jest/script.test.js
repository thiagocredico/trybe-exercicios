// const { describe } = require('yargs');
const { sum, summationOf } = require('./script');


describe('A função Sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('adds 5.1 + 6.55 to equal 11.65', () => {
        expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
    });

    it('adds 0 + 0 to equal 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('adds -5 + -39 to equal -44', () => {
        expect(sum(-5, -39)).toBe(-44);
    });

    it('adds 0 + -10 to equal -10', () => {
        expect(sum(0, -10)).toBe(-10);
    });

})

/**
* Implemente e teste a função `summationOf(number)` que recebe um número inteiro e retorna o seu somatório\
*
* Casos te teste:
* - `summationOf` é uma função?
* - `summationOf(1)` retorna 1: soma de 1 até 1 = 1
* - `summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
* - `summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
*/
describe('A função SummationOf', () => {
    it('testa se summationOf é uma função ', () => {
        expect(typeof summationOf).toBe('function');
    });

    it('testa se summationOf(1) retorna 1 ', () => {
        expect(summationOf(1)).toBe(1);
    });

    it('testa se summationOf(3) retorna 6 ', () => {
        expect(summationOf(3)).toBe(6);
    });
})