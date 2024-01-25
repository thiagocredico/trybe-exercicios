def bubble_sort(array: list[int]):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False
        for i in range(len(array) - num_of_iterations - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                has_swapped = True
        num_of_iterations += 1

    return array


if __name__ == "__main__":
    print(bubble_sort([7, 2, 5, 4, 1, 6, 0, 3]))
