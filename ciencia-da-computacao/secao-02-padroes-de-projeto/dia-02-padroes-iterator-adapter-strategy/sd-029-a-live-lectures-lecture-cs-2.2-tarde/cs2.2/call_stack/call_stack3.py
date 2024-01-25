def add(a: int, b: int) -> int:
    return a + b


def average(x: int, y: int) -> float:
    return add(x, y) / 2


if __name__ == "__main__":
    print("Média:", average(10, 7))
