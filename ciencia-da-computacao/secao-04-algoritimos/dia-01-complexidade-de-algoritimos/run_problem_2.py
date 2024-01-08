from problem_2 import get_order
from timeit import timeit

import data.hundred_thousand_names as hundred_thousand_names
import data.thousand_names as thousand_names

if __name__ == "__main__":
    print(
        "Tempo entrada pequena (1k): "
        + str(timeit(lambda: get_order(thousand_names.DATA), number=1))
    )
    print(
        "Tempo entrada grande (100k): "
        + str(timeit(lambda: get_order(hundred_thousand_names.DATA), number=1))
    )
