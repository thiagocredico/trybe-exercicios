def my_sum(number1, number2):
    return number1 + number2


def test_my_sum_positive_numbers():
    assert my_sum(1, 2) == 3


def test_my_sum_negative_numbers():
    assert my_sum(-1, -2) == -3
