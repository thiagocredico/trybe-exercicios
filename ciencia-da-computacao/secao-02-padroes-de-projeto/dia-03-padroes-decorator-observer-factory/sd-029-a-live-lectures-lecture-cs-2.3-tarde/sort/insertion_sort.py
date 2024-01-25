def insertion_sort(array: list[int]):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        while (current_position > 0) and (
            array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        array[current_position] = current_value
    return array


if __name__ == "__main__":
    print(insertion_sort([5, 2, 7, 1, 8, 6, 4, 9]))
