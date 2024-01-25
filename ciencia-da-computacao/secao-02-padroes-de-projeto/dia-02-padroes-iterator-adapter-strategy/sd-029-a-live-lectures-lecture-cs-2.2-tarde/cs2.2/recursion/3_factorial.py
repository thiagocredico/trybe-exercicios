def factorial(n):
    # return 1 if (n == 1 or n == 0) else n * factorial(n - 1)
    return 1 if (n <= 1) else n * factorial(n - 1)


if __name__ == "__main__":
    print(factorial(5))
    # 5! = 5 * 4 * 3 * 2 * 1 = 120
