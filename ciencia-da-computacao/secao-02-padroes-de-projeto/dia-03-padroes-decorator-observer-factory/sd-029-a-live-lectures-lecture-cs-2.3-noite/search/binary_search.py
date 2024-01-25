def binary_search(array: list[int], low_index: int, high_index: int, value: int) -> int:
    if high_index < low_index:
        raise ValueError(f"{value} is not in list")
    middle_index = (high_index + low_index) // 2

    if array[middle_index] == value:
        return middle_index

    elif array[middle_index] > value:
        return binary_search(array, low_index, middle_index - 1, value)
    else:
        return binary_search(array, middle_index + 1, high_index, value)


if __name__ == "__main__":
    array = [2, 3, 4, 10, 40]
    target = 3

    result = binary_search(array, 0, len(array) - 1, target)
    print(f"Elemento encontrado na posição: {result}")
