from timeit import timeit

from number_substitution import substitute_numbers
from rich import print


def benchmark(func):
    # 100 (cem) números
    one_hundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 10
    # 1.000 (mil) números
    one_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 100
    # 10.000 (dez mil) números
    ten_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 1000

    print(
        "Cem: ",
        f"{(timeit(lambda: func(one_hundred), number=1)):.4f} segundos",
    )

    print(
        "Mil: ",
        f"{(timeit(lambda: func(one_thousand), number=1)):.4f} segundos",
    )

    print(
        "Dez mil: ",
        f"{(timeit(lambda: func(ten_thousand), number=1)):.4f} segundos",
    )


if __name__ == "__main__":
    print("=" * 30)
    benchmark(substitute_numbers)
    print()
