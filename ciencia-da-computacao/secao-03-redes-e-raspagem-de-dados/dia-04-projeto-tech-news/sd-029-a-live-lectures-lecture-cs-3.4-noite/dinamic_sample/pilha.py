from no import Node


class Stack:
    def __init__(self):
        self.topo = None
        self._tamanho = 0

    def __len__(self):
        return self._tamanho

    def __repr__(self):
        texto = ''
        aux = self.topo
        while (aux):
            texto = texto + str(aux.info) + '\n'
            aux = aux.proximo
        return texto

    def __str__(self):
        return self.__repr__()

    def push(self, info):
        no = Node(info)
        no.proximo = self.topo
        self.topo = no
        self._tamanho += 1

    def pop(self):
        if self._tamanho > 0:
            no = self.topo
            self.topo = self.topo.proximo
            self._tamanho -= 1
            return no.info
        else:
            return None

    def peek(self):
        if self._tamanho > 0:
            return self.topo.info
        else:
            return None
