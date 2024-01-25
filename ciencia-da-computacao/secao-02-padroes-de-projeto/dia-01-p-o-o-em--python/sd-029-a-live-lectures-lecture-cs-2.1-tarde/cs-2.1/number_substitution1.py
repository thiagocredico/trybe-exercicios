"""
PROBLEMA:
Dada uma lista de números de tamanho 'n', substitua cada
número pelo maior valor possível que estiver à sua direita.

Caso não exista número maior à direita, manter o valor original.
"""
# Exemplo                  i
# Entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]
#                                   j


# Saída:   [5, 5, 2, 3, 0, 5, 1, 2, 3]

DESCRIPTION = "Dois loops ingênuos"

TIME_COMPLEXITY = "O(n^2)"
"""
n * (1 + 3n + 1)
n * (2 + 3n)
2n + 3n^2
= O(n^2)
"""

SPACE_COMPLEXITY = "O(1)"


def number_substitution(numbers):
    for i, original_number in enumerate(numbers):  # n iterações
        right_max = original_number

        for j, candidate in enumerate(numbers):  # n iterações
            if j > i and candidate > right_max:
                right_max = candidate

        numbers[i] = right_max


def test_number_substitution():
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]

    number_substitution(numbers_list)

    assert numbers_list == [5, 5, 5, 5, 5, 5, 3, 3, 3]
