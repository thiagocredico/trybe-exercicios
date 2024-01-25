"""
PROBLEMA - É possível criar uma progressão aritmética a partir de uma sequência?

Dada uma lista de números inteiros, retorne:
- True: se é possível criar uma progressão aritmética a partir de uma sequência.
- False: caso contrário

Nota: a lista sempre terá pelo menos 2 elementos.
5, 1, 3
"""

from sort.insertion_sort import insertion_sort as sorter


def can_make_arithmetic_progression(nums: list[int]) -> bool:
    # sorter(nums)  # O(n^2)
    nums.sort()  # O(n log n)
    common_diff = nums[1] - nums[0]

    for i in range(2, len(nums)):  # O(n)
        if nums[i] - nums[i - 1] != common_diff:
            return False
    return True


def test_can_make_arithmetic_progression():
    assert can_make_arithmetic_progression([1, 3, 5, 7, 9]) is True
    assert can_make_arithmetic_progression([3, 6, 1]) is False
    assert can_make_arithmetic_progression([7, 43, 19, 25, 1, 31, 37, 13]) is True
    assert can_make_arithmetic_progression([7, 43, 19, 25, 1, 32, 37, 13]) is False
    assert can_make_arithmetic_progression([1, 2]) is True
