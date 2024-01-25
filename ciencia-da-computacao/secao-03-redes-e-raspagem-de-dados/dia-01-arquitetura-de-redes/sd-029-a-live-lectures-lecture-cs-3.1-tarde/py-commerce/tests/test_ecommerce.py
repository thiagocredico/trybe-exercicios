from src.ecommerce import Customer


def test_customer():
    customer = Customer("John Doe", "johndoe@example.com", "123 Main St")
    assert customer.name == "John Doe"
    assert customer.email == "johndoe@example.com"
    assert customer.address == "123 Main St"
