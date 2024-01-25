import sys


def my_func():
    my_func()


if __name__ == "__main__":
    # my_func()
    print(sys.getrecursionlimit())
