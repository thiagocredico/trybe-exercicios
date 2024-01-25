""""
Dada uma lista não vazia, unida individualmente
com o nó principal, retorne o node do meio da lista.
"""
from linked_list import LinkedList
from rich import print


def mid_element(linked_list):
    middle = len(linked_list) // 2
    node = linked_list.get_element_at(middle)
    return node


if __name__ == "__main__":
    my_linked_list = LinkedList()
    my_linked_list.insert_last("Eli")
    my_linked_list.insert_last("Ana")
    my_linked_list.insert_last("Pedro")
    print(mid_element(my_linked_list))
