""""
Aqui vamos criar a classe Personagem
cujos atributos são nome, raça e hp.
Vamos testar atributos protegidos e
privados e getters e setters.
"""
from personagem_interface import PersonagemInterface


class Personagem(PersonagemInterface):
    def __init__(self, nome, raca, hp) -> None:
        self.nome = nome
        self.raca = raca
        self.__hp = hp

    def get_hp(self):
        return self.__hp

    # @property
    # def hp(self):
    #     return self.__hp

    def set_hp(self, dano):
        self.__hp -= dano

    def falar(self):
        return "Busquem Conhecimento"


# objeto = Personagem("Ítalo", "Humano", 1000)
# print(f"Print do VARS: {vars(objeto)}")
# print(f"Print do atributo: {objeto.__hp}")
# objeto.set_hp(50)
# print(f"Print do método getter: {objeto.get_hp()}")
# print(f"Print do método getter c/decorador: {objeto.hp}")
