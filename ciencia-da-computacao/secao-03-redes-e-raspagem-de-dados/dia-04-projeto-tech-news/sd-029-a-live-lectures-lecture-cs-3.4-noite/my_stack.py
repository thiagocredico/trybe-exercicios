class Stack:
    """Implementação da ED Pilha usando list"""

    def __init__(self):
        self._data = []

    def __repr__(self):
        return str(self._data)

    def __str__(self):
        # return self.__repr__()
        str_stack = "PILHA:\n"
        # range: start, stop, step
        for index in range(self.size() - 1, -1, -1):
            value = self._data[index]
            str_stack += "  |" + str(value) + "|\n"
        return str_stack

    def __len__(self):
        return self.size()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if not self.is_empty():
            return self._data.pop()
        else:
            return None

    def peek(self):
        if self.is_empty():
            return None
        return self._data[-1]


if __name__ == "__main__":
    pilha = Stack()
