from faker import Faker
import json
import random


def create_fake_data():
    n = input("Quantos usuários falsos deseja criar? ")
    faker = Faker(locale="pt_BR")

    accounts = []
    for i in range(1, int(n)+1):
        accounts.append(
            {
                "account_number": f"000{i}",
                "name": faker.name(),
                "cpf": faker.cpf(),
                "birthday": str(faker.date_of_birth(None, 19, 80)),
                "adress": faker.address(),
                "funds": float("{:.2f}".format(random.uniform(0, 10000)))
            }
        )
    return accounts


def create_account(file_to_write):
    with open("data/bank_accounts.json", "w") as file:
        json_to_write = json.dumps(file_to_write, indent=2, ensure_ascii=False)
        file.write(json_to_write)


# create_account(create_fake_data())
