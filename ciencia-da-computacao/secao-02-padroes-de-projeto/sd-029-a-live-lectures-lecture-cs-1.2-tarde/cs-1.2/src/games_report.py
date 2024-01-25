import json
from collections import Counter


def load_games_from_json(file_path):
    games = []

    try:
        with open(file_path, "r") as file:
            games = json.load(file)
    except FileNotFoundError:
        # print("Arquivo não encontrado")
        raise FileNotFoundError("Arquivo não encontrado")
    except json.decoder.JSONDecodeError:
        print("Arquivo com formato inválido")

    return games


def get_all_consoles(game_data):
    consoles = set()

    for game in game_data:
        consoles.add(game["Release"]["Console"])

    return consoles


def get_consoles_count(game_data):
    consoles = list()

    for game in game_data:
        consoles.append(game["Release"]["Console"])

    return Counter(consoles)


def get_sales_by_console(game_data):
    result = dict()

    for game in game_data:
        console = game["Release"]["Console"]
        sales = game["Metrics"]["Sales"]

        if console in result:
            result[console] += sales
        else:
            result[console] = sales

    return result


if __name__ == "__main__":
    video_games = load_games_from_json("data/video_games.json")

    consoles = get_all_consoles(video_games)
    print("Consoles:")
    print(consoles)

    consoles_count = get_consoles_count(video_games)
    print("Consoles count:")
    print(consoles_count)

    sales = get_sales_by_console(video_games)
    print("Sales:")
    print(sales)
