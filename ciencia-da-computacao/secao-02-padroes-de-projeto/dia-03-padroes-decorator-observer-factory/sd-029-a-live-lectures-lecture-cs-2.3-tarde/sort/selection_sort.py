def selection_sort(array: list[int]):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return array


if __name__ == "__main__":
    print(selection_sort([7, 2, 5, 4, 1, 6, 0, 3]))
