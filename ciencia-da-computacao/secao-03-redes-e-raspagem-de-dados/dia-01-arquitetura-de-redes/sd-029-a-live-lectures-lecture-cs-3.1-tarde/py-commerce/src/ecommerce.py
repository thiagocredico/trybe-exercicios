import re
import json
from dataclasses import dataclass


class Customer:
    def __init__(self, name, email, address):
        self.name = name
        self.__email = email
        self.address = address

    @property  # Getter
    def email(self):
        return self.__email

    @email.setter  # Setter
    def email(self, new_email):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", new_email):
            raise ValueError("Invalid email address")
        self.__email = new_email

    def show_details(self):
        print(f"Nome: {self.name} | Email: {self.email} | Endereço: {self.address}")

    def __repr__(self):
        return f"Customer({self.name}, {self.email}, {self.address})"

    def __str__(self):
        return f"Customer({self.name})"

    @classmethod
    def load_customers_from_json(cls, path: str):
        with open(path) as file:
            data = json.load(file)
        return [cls(**customer) for customer in data]


# kwargs


@dataclass  # init, repr str
class Product:
    name: str
    unit_price: float
    stock_quantity: int


# mypy biblioteca de tipos


class ShoppingCart:
    def __init__(self):
        self._items = []

    def add_item(self, product_quantity: tuple[Product, int]):
        self._items.append(product_quantity)

    def items_quantity(self):
        return sum(quantity for _, quantity in self._items)

    def total(self):
        return sum(product.unit_price * quantity for product, quantity in self._items)
