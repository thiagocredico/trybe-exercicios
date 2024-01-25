def quicksort(array: list[int], low: int, high: int):
    if len(array) == 1:
        return array

    if low < high:
        partition_index = partition(array, low, high)
        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)


def partition(array: list[int], low: int, high: int):
    i = low - 1
    pivot = array[high]

    for j in range(low, high):
        if array[j] <= pivot:
            i = i + 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]

    return i + 1


if __name__ == "__main__":
    array = [5, 2, 7, 1, 8, 6, 4, 9]
    quicksort(array, 0, len(array) - 1)
    print(array)
