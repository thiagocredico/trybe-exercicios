from no import Node


class Queue:
    def __init__(self):
        self.primeiro = None
        self.ultimo = None
        self._tamanho = 0

    def __len__(self):
        return self._tamanho

    def __repr__(self):
        if self._tamanho > 0:
            texto = ""
            aux_ponteiro = self.primeiro
            while aux_ponteiro:
                texto = texto + str(aux_ponteiro.info) + "\n"
                aux_ponteiro = aux_ponteiro.proximo
            return texto
        return "Fila vazia!"

    def __str__(self):
        return self.__repr__()

    def push(self, info):
        no = Node(info)
        if self.ultimo is None:
            self.ultimo = no
        else:
            self.ultimo.proximo = no
            self.ultimo = no

        if self.primeiro is None:
            self.primeiro = no

        self._tamanho += 1

    def pop(self):
        if self._tamanho > 0:
            info = self.primeiro.info
            self.primeiro = self.primeiro.proximo

            if self.primeiro is None:
                self.ultimo = None

            self._tamanho -= 1
            return info
        raise IndexError("A fila está vazia")

    # observar o primeiro da fila
    def peek(self):
        if self._tamanho > 0:
            info = self.primeiro.info
            return info
        raise IndexError("A fila está vazia")
