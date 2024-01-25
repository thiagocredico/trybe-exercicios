import time
import number_substitution1
import number_substitution2a
import number_substitution2b
import number_substitution3

solutions = [
    number_substitution1,
    number_substitution2a,
    number_substitution2b,
    number_substitution3,
]


def benchmark(func):
    # 100 (cem) números
    one_hundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 10
    # 1.000 (mil) números
    one_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 100
    # 10.000 (dez mil) números
    ten_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 1000

    start_time = time.time()
    func(one_hundred)
    print(f"Cem: {(time.time() - start_time):.4f} segundos")

    start_time = time.time()
    func(one_thousand)
    print(f"Mil: {(time.time() - start_time):.4f} segundos")

    start_time = time.time()
    func(ten_thousand)
    print(f"Dez mil: {(time.time() - start_time):.4f} segundos")

    # 100.000 (cem mil) números
    # hundred_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 10000
    # start_time = time.time()
    # func(hundred_thousand)
    # print(f"Cem mil: {(time.time() - start_time):.4f} segundos")


if __name__ == "__main__":
    for sol in solutions:
        print("=" * 30)
        print(f"* Solução: {sol.DESCRIPTION}")
        print(f"* Complexidade de tempo: {sol.TIME_COMPLEXITY}")
        print(f"* Complexidade de espaço: {sol.SPACE_COMPLEXITY}")
        print()
        benchmark(sol.number_substitution)
        print()
