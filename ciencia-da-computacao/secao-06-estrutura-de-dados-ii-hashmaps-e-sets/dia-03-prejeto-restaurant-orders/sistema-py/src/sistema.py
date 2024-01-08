# Não esqueça de iniciar um ambiente virtual <3

users = [
    ("Ana", "fjk2809"),
    ("Pedro", "fjk2203"),
    ("Lais", "fjk2222"),
    ("Laura", "fjk9809"),
    ("Italo", "fjk2821"),
    ("Saulo", "fjk2119"),
    ("Thais", "fjk0101"),
    ("Maria", "fjk2031"),
    ("Carol", "fjk1809"),
]

# Aqui temos os nomes de todas as pessoas que possuem um cadastro no sitema de uma empresa.


# Você foi contratado para:
# 1 - Devido a uma falha no sistema o cliente precisa que você crie uma funcionalidade
# que encontre todos os usuários que o ultimo digito da senha é 1, e retorne o nome da pessoa em uma lista,
# devemos também fazer a contagem de quantas pessoas tinham a senha finalizando em 1 e imprimir na tela.


# Percorrer a lista...


def search_user(list_users):
    if not list_users:
        raise TypeError
    result = list()
    for name, password in list_users:
        if not isinstance(name, str) or not isinstance(password, str):
            raise TypeError
        if password.endswith("1"):
            result.append(name)
    
    return f"As pessoas que tem a senha terminada em um: {result}. O total de: {len(result)} pessoas"


# Desafio 2 - Crie uma função que busque a senha do usuário pelo nome.
# deve retorna a seguinte string; A senha {password} foi encontrada para o usuário: {name}'


def search_by_name(name_user, list_users):
    if not list_users:
        raise TypeError
    for name, password in list_users:
        if not isinstance(name, str) or not isinstance(password, str):
            raise TypeError
        if name == name_user:
            return f"A senha {password} foi encontrada para o usuário: {name}"



    
# Agora precisamos implementar uma função que receba nome, senha do usuário e adicione a nossa lista users


def add_new_users(name, password, list_users):
    if not isinstance(name, str) or not password or not list_users:
        print('aaaaaa')
        raise TypeError

    tupla = (name, password)
    print("AQUI:", tupla)
    list_users.append(tupla)


add_new_users(None, "12323", users)



