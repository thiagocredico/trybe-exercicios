""""
Aqui vamos trabalhar com interface
e herança.
"""
from abc import ABC, abstractmethod


class PersonagemInterface(ABC):
    @abstractmethod
    def falar(self):
        raise NotImplementedError(
            "Você está chamando o método de uma classe abstrata"
        )
