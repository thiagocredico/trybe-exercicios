""""
Iremos aprimorar a estrutura da nossa classe LinkedList para otimizar
a operação de inserção (no final). Como essa operação possui,
até o momento, a complexidade O(n), nosso objetivo é torná-la O(1).
Para isso, nós criaremos uma nova classe, chamada LinkedListGuardian
para fazermos a refatoração.
"""

from linked_list import LinkedList
from rich import print


if __name__ == "__main__":
    my_linked_list = LinkedListGuardian()
    my_linked_list.insert_last("Rafa")
    my_linked_list.insert_last("Carol")
    my_linked_list.insert_last("Ana")
    print(my_linked_list)
