# -> Código desenvolvido no turno da tarde

ACCOUNTS = [
    {"number": 12345, "funds": 1000},
    {"number": 54321, "funds": 500},
    {"number": 98765, "funds": 2500},
]


def verify_acc(origem, destino):
    # account_numbers = []
    # for account in ACCOUNTS:
    #     account_numbers.append(account["number"])
    account_numbers = [account["number"] for account in ACCOUNTS]
    if origem not in account_numbers:
        return print(f"A conta de origem número {origem} não existe.")
    elif destino not in account_numbers:
        print(f"A conta de destino número {destino} não existe.")
        return
    return True


def transfer(origem, destino, valor):
    if verify_acc(origem, destino):
        for account in ACCOUNTS:
            if origem == account["number"]:
                origem_acc = account
            if destino == account["number"]:
                destino_acc = account

        if origem_acc["funds"] < valor:
            return print("Saldo Insuficiente.")

        origem_acc["funds"] -= valor
        destino_acc["funds"] += valor

        return print(
            f"Transferência feita com sucesso.\n"
            f"O saldo final na conta {origem_acc['number']} "
            f"é de R${origem_acc['funds']}"
        )

# -> Código desenvolvido no turno da noite

ACCOUNTS = [
    {"number": 12345, "funds": 1000},
    {"number": 54321, "funds": 500},
    {"number": 98765, "funds": 2500},
]


def verify_account(origem, destino):
    # list_account_numbers = []
    # for account in ACCOUNTS:
    #     list_account_numbers.append(account["number"])
    list_account_numbers = [account["number"] for account in ACCOUNTS]
    if origem in list_account_numbers and destino in list_account_numbers:
        return True
    else:
        return print("A conta de destino ou origem não existe")

# 🚨 Adivinhem qual era o erro??? 
# Estávamos usando o mesmo termo "account" no for e no parâmetro da função!! 
# Só prova o quanto a análise de variáveis é importante 🗣️
def gather_data(account):
    for acc in ACCOUNTS:
        if acc["number"] == account:
            return acc


def transfer(origem, destino, valor):
    if verify_account(origem, destino):
        origem_acc = gather_data(origem)
        destino_acc = gather_data(destino)

        if origem_acc["funds"] < valor:
            return print("Saldo Insuficiente")

        origem_acc["funds"] -= valor
        destino_acc["funds"] += valor

        return print(
            f"A transferência de R${valor} foi feita com sucesso.\n"
            f"A conta de número {origem_acc['number']} agora "
            f"possui o saldo de {origem_acc['funds']}"
        )
