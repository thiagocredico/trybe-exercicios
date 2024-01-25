from my_stack import Stack


def is_valid(string: str) -> bool:
    if not string or len(string) % 2 != 0:
        return False

    stack = Stack()

    for char in string:  # O(n)
        if char not in ["(", ")", "[", "]", "{", "}"]:
            return False

        if char in ["(", "[", "{"]:
            stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
        else:
            return False

    return stack.is_empty()


def test_is_valid():
    assert is_valid("()") is True
    assert is_valid("{)") is False
    assert is_valid("()[]{}") is True
    assert is_valid("(]") is False
    assert is_valid("([)]") is False
    assert is_valid("{[]}") is True
    assert is_valid("{{}[][[[]]]}") is True
    assert is_valid("{{({})}}") is True
    assert is_valid("[[[]]]") is True
    assert is_valid("())") is False
    assert is_valid("") is False
