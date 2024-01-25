for fruta in lista_frutas:
    if fruta["preco"] == maior_preco:
        print(f"O maior preço é {fruta['nome']}")
    elif fruta["preco"] == menor_preco:
        print(f"O menor preço é {fruta['nome']}")