class Queue:
    """Implementação da ED Fila usando list"""

    def __init__(self):
        self._data = []

    def __repr__(self):
        return str(self._data)

    def __str__(self):
        # return self.__repr__()
        str_queue = ""
        for index in range(0, self.size()):
            value = self._data[index]
            str_queue += str(value)
            if index + 1 < self.size():
                str_queue += " <- "

        return "FILA: inicio |" + str_queue + "| fim"

    def __len__(self):
        return self.size()

    def is_empty(self):
        return self._data == []

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if not self.is_empty():
            return self._data.pop(0)  # O(n)
        else:
            return None

    def peek(self):
        if self.is_empty():
            return None
        return self._data[0]

    def size(self):
        return len(self._data)


if __name__ == "__main__":
    fila = Queue()
