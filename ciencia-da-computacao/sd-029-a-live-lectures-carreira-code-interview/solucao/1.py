lista_frutas = [
    {
        "nome": "banana",
        "preco": 23.5
    },
    {
        "nome": "maca",
        "preco": 24
    },
    {
        "nome": "morango",
        "preco": 22.5
    },
    {
        "nome": "abacate",
        "preco": 25.5
    },
]

menor_preco = lista_frutas[0]["preco"]
maior_preco = lista_frutas[0]["preco"]

for fruta in lista_frutas:
    if fruta["preco"] == maior_preco:
        print(f"O maior preço é {fruta['nome']}")
    elif fruta["preco"] == menor_preco:
        print(f"O menor preço é {fruta['nome']}")

print(maior_preco, menor_preco)
