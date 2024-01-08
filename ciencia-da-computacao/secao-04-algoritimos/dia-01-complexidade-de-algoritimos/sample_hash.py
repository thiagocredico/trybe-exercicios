def my_hash(string: str) -> int:
    result = 0
    for char in string:
        result += ord(char)
    return result


def get_position(id: int) -> int:
    return id % 10
