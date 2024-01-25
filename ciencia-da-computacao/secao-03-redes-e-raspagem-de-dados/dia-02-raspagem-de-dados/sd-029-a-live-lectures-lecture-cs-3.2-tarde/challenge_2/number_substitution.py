"""
Dada uma lista de números de tamanho `n`.

Para cada um de seus números, substitua-o pelo maior número
possível à sua direita na lista. Por exemplo:

Entrada:  [2, 1, 2, 3, 0, 5, 1, 2, 3]
Saída:    [5, 5, 5, 5, 5, 5, 3, 3, 3]

Faça a análise de complexidade.
"""


# def substitute_numbers(numbers: list[int]) -> list[int]:
#     result = []
#     for index, item in enumerate(numbers):  # N * O(N) = O(N^2)
#         max_right = max(numbers[index:])  # O(N)
#         result.append(max_right)  # O(1)

#     return result


def substitute_numbers(numbers: list[int]) -> list[int]:  # Total: O(N)
    result = [0] * len(numbers)  # O(N)
    index = -1
    max_num = numbers[index]
    result[index] = max_num
    while index > -len(numbers):  # O(N)
        if numbers[index - 1] < max_num:
            result[index - 1] = max_num
        else:
            max_num = numbers[index - 1]
            result[index - 1] = numbers[index - 1]
        index -= 1

    return result


def test_number_substitution():
    ini = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    res = [5, 5, 5, 5, 5, 5, 3, 3, 3]

    assert substitute_numbers(ini) == res
