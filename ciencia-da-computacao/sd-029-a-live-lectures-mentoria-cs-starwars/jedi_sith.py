""""
Aqui vamos criar as classes Jedi e Sith
que possuirão os métodos contra atacar, defender e atacar.
Vamos aprender sobre tipos de métodos.
"""
from personagem import Personagem
from sabre import Sabre
from random import choice


class Jedi(Personagem):
    def __init__(self, nome, raca, hp, poder) -> None:
        super().__init__(nome, raca, hp)
        self.sabre_de_luz = Sabre("azul", poder)

    def defesa(self):
        defesa = choice([True, False])
        return defesa

    def contra_ataca(self, personagem):
        personagem.set_hp(self.sabre_de_luz.poder)

    def falar(self):
        if self.get_hp() <= 0:
            return print(f"{self.nome} foi derrotado. Noooooooooooooo")
        return "Derrubar o Império. Gostoso demais"


class Sith(Personagem):
    def __init__(self, nome, raca, hp, poder) -> None:
        super().__init__(nome, raca, hp)
        self.sabre_de_luz = Sabre("vermelho", poder)

    def ataque(self, personagem):
        if not personagem.defesa():
            personagem.set_hp(self.sabre_de_luz.poder)

    def falar(self):
        if self.get_hp() <= 0:
            return print(f"{self.nome} foi derrotado. Adeus mundo cruel!")
        return "How you doing"
