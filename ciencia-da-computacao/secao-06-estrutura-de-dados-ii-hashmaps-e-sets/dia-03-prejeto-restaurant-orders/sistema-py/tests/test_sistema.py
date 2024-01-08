from src.sistema import search_user
from src.sistema import search_by_name
from src.sistema import add_new_users

import pytest

mock_users = [
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


mock_users_failed = [
    ("Ana", "fjk2809"),
    ("Pedro", 2),
    ("Lais", "fjk2222"),
    ("Laura", "fjk9809"),
    (3232, "fjk2821"),
    ("Saulo", "fjk2119"),
    ("Thais", "fjk0101"),
    ("Maria", "fjk2031"),
    ("Carol", "fjk1809"),
]


def test_search_user():
    """
    Testa a função search_user com os parâmetros necessários e verifica se o retorno está correto.
    """
    # Verifica se a função retorna os usuários cujas senhas terminam com '1'
    assert (
        search_user(mock_users)
        == "As pessoas que tem a senha terminada em um: ['Italo', 'Thais', 'Maria']. O total de: 3 pessoas"
    )

    # Testa a função com uma chamada que deve levantar um TypeError

    with pytest.raises(TypeError):
        search_user(mock_users_failed)

    # Testa a função com uma chamada que deve levantar um TypeError devido a uma lista de usuários inválida

    with pytest.raises(TypeError):
        search_user()


def test_search_by_name():
    """
    Testa a função search_by_name com os parâmetros necessários e verifica se o retorno está correto.
    """
    # Verifica se a função retorna a senha correta para o usuário fornecido

    assert (
        search_by_name("Ana", mock_users)
        == "A senha fjk2809 foi encontrada para o usuário: Ana"
    )

    # Testa a função com uma chamada que deve levantar um TypeError

    with pytest.raises(TypeError):
        search_by_name(mock_users)

    # Testa a função com uma chamada que deve levantar um TypeError devido a uma lista de usuários inválida
    with pytest.raises(TypeError):
        search_by_name()


def test_add_new_user():
    """
    Testa a função add_new_users com os parâmetros necessários e verifica se o usuário foi adicionado corretamente.
    """
    # Adiciona um novo usuário e verifica se foi adicionado corretamente

    add_new_users("Ana", "12343", mock_users)

    assert mock_users == [
        ("Ana", "fjk2809"),
        ("Pedro", "fjk2203"),
        ("Lais", "fjk2222"),
        ("Laura", "fjk9809"),
        ("Italo", "fjk2821"),
        ("Saulo", "fjk2119"),
        ("Thais", "fjk0101"),
        ("Maria", "fjk2031"),
        ("Carol", "fjk1809"),
        ("Ana", "12343"),
    ]

    # Testa a função com uma chamada que deve levantar um TypeError

    with pytest.raises(TypeError):
        add_new_users()

    # Testa a função com uma chamada que deve levantar um TypeError devido a parâmetros inválidos
