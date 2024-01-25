from datetime import date


class Person:
    def __init__(self, nome, idade=18):
        self.name = nome
        self.age = idade

    # Método de Instância
    def age_group(self):
        if self.age > 18:
            return "Adult"
        else:
            return "Child"

    # Método de classe
    # Cria objeto a partir do ano de nascimento
    @classmethod
    def from_birth_year(cls, name, year):
        return cls(name, date.today().year - year)

    # Método Estático
    @staticmethod
    def verify_age(age):
        return age > 18


# objeto = Person("Iago")
# print(vars(objeto))
