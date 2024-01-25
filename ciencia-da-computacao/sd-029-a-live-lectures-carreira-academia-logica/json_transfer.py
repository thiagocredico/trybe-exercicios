import json
from bank import create_account


def read_file():
    with open("data/bank_accounts.json") as file:
        accounts = json.load(file)
        return accounts


def verify_acc(origem, destino):
    account_numbers = [account["account_number"] for account in read_file()]
    if origem not in account_numbers:
        return print(f"A conta de origem número {origem} não existe.")
    elif destino not in account_numbers:
        print(f"A conta de destino número {destino} não existe.")
        return
    return True


def gather_data(acc):
    for account in read_file():
        if acc == account["account_number"]:
            return account


def update_data(acc: int) -> None:
    updated_data = read_file()
    for account in updated_data:
        if account["account_number"] == acc["account_number"]:
            account["funds"] = acc["funds"]

    create_account(updated_data)


def transfer(origem, destino, valor):
    if verify_acc(origem, destino):
        origem_acc = gather_data(origem)
        destino_acc = gather_data(destino)

        if origem_acc["funds"] < valor:
            return print("Saldo Insuficiente.")

        origem_acc["funds"] -= valor
        destino_acc["funds"] += valor

        update_data(origem_acc)
        update_data(destino_acc)

        return print(
            "\n\n"
            f"Transferência feita com sucesso.\n"
            f"O saldo final na conta {origem_acc['account_number']} "
            f"de {origem_acc['name']} "
            f"é de R${origem_acc['funds']:.2f}"
            "\n\n"
        )


transfer("0001", "0002", 50)
