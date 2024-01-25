"""
PROBLEMA:
Dada uma lista de números de tamanho 'n', substitua cada
número pelo maior valor possível que estiver à sua direita.

Caso não exista número maior à direita, manter o valor original.
"""
# Exemplo                           i
# Entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]
#                                   /\


# Saída:   [5, 5, 2, 3, 0, 5, 1, 2, 3]

DESCRIPTION = "Dois loops com slicing"

TIME_COMPLEXITY = "O(n^2)"
"""
(n - 1) + (n - 2) + (n - 3) + ... + 1

Soma de PA
(n - 1 + 1) * n / 2
n * n / 2
n^2/2
= O(n^2)
"""

SPACE_COMPLEXITY = "O(n)"


def number_substitution(numbers):
    for i, original_number in enumerate(numbers):
        right_max = original_number

        for candidate in numbers[i+1:]:
            if candidate > right_max:
                right_max = candidate

        numbers[i] = right_max


def test_number_substitution():
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]

    number_substitution(numbers_list)

    assert numbers_list == [5, 5, 5, 5, 5, 5, 3, 3, 3]
