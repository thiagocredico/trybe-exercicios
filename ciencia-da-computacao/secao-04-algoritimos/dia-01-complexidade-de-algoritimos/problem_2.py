""""
Problema - Qual é a fila?

P1->P2->P3->P4->P5->P6->P7->P8

Obs: para rodar a solução O(1), descomente as linhas 13 e 20 e comente a linha 19 (atenção a identação)

"""


def get_order(orders: list[tuple[str, str]]) -> list[str]:
    orders_map = {pair[0]: pair[1] for pair in orders}  # O(n)
    # reverse_orders_map = {pair[1]: pair[0] for pair in orders}
    # print(orders_map)

    next_in_line = ""

    for person in orders_map:  # O(n) ======= total: O(n^2)
        if person not in orders_map.values():  # O(n)
            # if person not in reverse_orders_map:  # O(1):
            next_in_line = person

    result = [next_in_line]

    while next_in_line in orders_map:
        result.append(orders_map[next_in_line])
        next_in_line = orders_map[next_in_line]

    return result


def test_get_order():
    orders = [
        ("carol", "rafa"),
        ("ana", "rodrigo"),
        ("julia", "lud"),
        ("eli", "bux"),
        ("setinha", "carol"),
        ("rafa", "ana"),
        ("rodrigo", "julia"),
        ("lud", "eli"),
    ]

    assert get_order(orders) == [
        "setinha",
        "carol",
        "rafa",
        "ana",
        "rodrigo",
        "julia",
        "lud",
        "eli",
        "bux",
    ]
    print(get_order(orders))
