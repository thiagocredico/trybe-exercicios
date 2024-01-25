"""
Dado um array de números inteiros,
verifique se o array possui algum elemento duplicado.

A função deve retornar
- `True` se algum valor aparece pelo menos duas vezes no array e
- `False` caso todos os elementos sejam distintos.

Faça a análise de complexidade.
"""


# def contains_duplicate(numbers: list[int]) -> bool:  # Total: O(N^2)
#     for item in numbers:  # N * O(N) = O(N^2)
#         if numbers.count(item) > 1:  # O(N)
#             return True  # O(1)
#     return False


def contains_duplicate(numbers: list[int]) -> bool:  # Total: O(N log N)

    numbers.sort()  # O(N log N) -> Tim Sort

    for index in range(len(numbers) - 1):  # N * O(1) = O(N)
        if numbers[index] == numbers[index + 1]:  # O(1)
            return True

    return False


def test_contains_duplicate():
    assert contains_duplicate([1]) is False
    assert contains_duplicate([1, 5]) is False
    assert contains_duplicate([1, 5, 4, 8, 4]) is True
    assert contains_duplicate([1, 5, 4, 8, 2, 3, 9, 6, 7]) is False
    assert contains_duplicate([1, 5, 5, 3, 2, 6, 9, 5, 3]) is True
