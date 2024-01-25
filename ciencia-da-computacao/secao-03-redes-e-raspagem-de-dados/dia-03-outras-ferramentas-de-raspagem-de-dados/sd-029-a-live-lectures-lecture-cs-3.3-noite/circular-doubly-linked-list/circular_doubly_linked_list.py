from doubly_node import DoublyNode


class CircularDoublyLinkedList:
    def __init__(self):
        self.head = DoublyNode("HEAD")
        self.head.previous = self.head
        self.head.next = self.head
        self.__length = 0

    def __str__(self):
        my_self = map(str, self.to_list())
        return f"CircularDoublyLinkedList(HEAD, {', '.join(my_self)}, HEAD)"

    def __len__(self):
        return self.__length

    def to_list(self):
        linked_list = []
        if self.head is None:
            return linked_list
        current = self.head.next
        while current != self.head:
            linked_list.append(current.value)
            current = current.next
        return linked_list

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        node_value = DoublyNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length += 1

    def insert_last(self, value):
        node_value = DoublyNode(value)
        node_value.previous = self.head.previous
        node_value.next = self.head
        self.head.previous = node_value
        node_value.previous.next = node_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.head.next
            element_later_than_removed = value_to_be_removed.next
            self.head.next = element_later_than_removed
            element_later_than_removed.previous = self.head
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.head.previous
            element_later_than_removed = value_to_be_removed.previous
            self.head.previous = element_later_than_removed
            element_later_than_removed.next = self.head
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed


if __name__ == "__main__":
    doubly = CircularDoublyLinkedList()
