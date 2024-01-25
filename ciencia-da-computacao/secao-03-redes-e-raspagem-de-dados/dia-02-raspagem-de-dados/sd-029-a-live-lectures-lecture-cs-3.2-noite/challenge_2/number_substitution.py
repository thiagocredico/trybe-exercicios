"""
Dada uma lista de números de tamanho `n`.

Para cada um de seus números, substitua-o pelo maior número
possível à sua direita na lista. Por exemplo:

Entrada:  [2, 1, 2, 3, 0, 5, 1, 2, 3]
Saída:    [5, 5, 5, 5, 5, 5, 3, 3, 3]

Faça a análise de complexidade.
"""


def substitute_numbers(numbers: list[int]) -> list[int]:
    for index, item in enumerate(numbers):  # N * O(N) = O(N^2)
        max_right = item
        for other in numbers[index:]:  # N * O(1) = O(N)
            if max_right < other:
                numbers[index] = other
                max_right = other
    return numbers


# index = 1
# item = 5


def test_number_substitution():
    ini = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    res = [5, 5, 5, 5, 5, 5, 3, 3, 3]

    assert substitute_numbers(ini) == res
