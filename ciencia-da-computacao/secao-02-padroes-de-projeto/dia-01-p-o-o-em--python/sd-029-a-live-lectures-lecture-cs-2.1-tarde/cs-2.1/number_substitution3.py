"""
PROBLEMA:
Dada uma lista de números de tamanho 'n', substitua cada
número pelo maior valor possível que estiver à sua direita.

Caso não exista número maior à direita, manter o valor original.
"""
# Exemplo
# Entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]

# Saída:   [5, 5, 5, 5, 5, 5, 3, 3, 3]

DESCRIPTION = "Um loop reverso"

TIME_COMPLEXITY = "O(n)"
"""
3 + n * 3
= O(n)
"""

SPACE_COMPLEXITY = "O(1)"


def number_substitution(numbers):
    if len(numbers) == 0:
        return

    last_pos = len(numbers) - 1
    right_max = numbers[last_pos]

    for i in range(last_pos, -1, -1):  # n iterações
        if right_max >= numbers[i]:
            numbers[i] = right_max
        else:
            right_max = numbers[i]


def test_number_substitution():
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]

    number_substitution(numbers_list)

    assert numbers_list == [5, 5, 5, 5, 5, 5, 3, 3, 3]
