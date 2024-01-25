from node import Node


class LinkedListGuardian:
    def __init__(self):
        self.head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head

        if self.is_empty():
            self.tail = first_value  # self.head

        self.head = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)

        self.tail.next = new_last_value
        self.tail = new_last_value
