

class Node:
    def __init__(self, info):
        self.info = info
        self.proximo = None

    def __repr__(self):
        return f'{self.info} -> {self.proximo}'

    def __str__(self):
        return self.__repr__()
