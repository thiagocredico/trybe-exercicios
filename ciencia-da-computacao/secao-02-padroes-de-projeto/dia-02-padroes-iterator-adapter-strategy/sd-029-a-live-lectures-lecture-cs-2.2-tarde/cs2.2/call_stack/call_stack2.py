def first(param: int) -> int:
    plus_one = param + 1
    f_value = second(plus_one)
    return f_value


def second(param: int) -> int:
    plus_one = param + 1
    s_value = third(plus_one)
    return s_value


def third(param: int) -> int:
    plus_one = param + 1
    t_value = plus_one
    return t_value


if __name__ == "__main__":
    result = first(10)
    print(f"Resultado final: {result}")
