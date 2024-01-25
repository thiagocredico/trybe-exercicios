"""
Aqui é onde vamos criar os personagens.
"""
from personagem import Personagem
from jedi_sith import Jedi, Sith


p1 = Personagem("Mateus", "Humano", 1000)
p2 = Jedi("Sherly", "Humano", 1000, 100)
p3 = Sith("Darth Maul", "Dathomirian", 1000, 100)

print("----------------")
print("BATALHA")
print(f"{p3.nome}: {p3.falar()}")
print(f"{p2.nome}: {p2.falar()}\n\n")

while p3.get_hp() > 0:
    print(
        f"{p3.nome} (HP {p3.get_hp()}) " f"ataca {p2.nome} (HP {p2.get_hp()})"
    )
    p3.ataque(p2)
    p2.falar()
    if p2.get_hp() > 0:
        print(
            f"{p2.nome} (HP {p2.get_hp()}) "
            f"contra-ataca {p3.nome} (HP {p3.get_hp()})"
        )
        p2.contra_ataca(p3)
        p3.falar()
    else:
        break
