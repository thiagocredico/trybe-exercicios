"""
Reorganize os elementos de uma lista de inteiros
invertendo a ordem em que eles estão dispostos.
"""


def reverse(numbers: list[int]) -> list[int]:
    if len(numbers) == 0:
        return []
    last = numbers[-1]
    other_reversed = reverse(numbers[:-1])
    return [last] + other_reversed


if __name__ == "__main__":
    my_numbers = [1, 2, 3, 4, 5]
    print(reverse(my_numbers))  # saída: [5, 4, 3, 2, 1]
