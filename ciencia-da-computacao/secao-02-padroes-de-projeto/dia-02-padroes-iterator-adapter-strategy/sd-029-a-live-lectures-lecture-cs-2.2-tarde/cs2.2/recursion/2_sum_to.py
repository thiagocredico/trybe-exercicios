def sum_to(number: int) -> int:
    if number == 1:
        return 1
    return number + sum_to(number - 1)


if __name__ == "__main__":
    # 4 + (3 + (2 + (1))) = 10
    total = sum_to(4)
    print(total)
