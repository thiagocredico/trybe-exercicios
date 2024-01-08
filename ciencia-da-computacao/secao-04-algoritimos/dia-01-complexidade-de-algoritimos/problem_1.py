"""
Dada uma lista de frutas, retorne a fruta que possui a maior quantidade e seu total.
"""


def find_most_common_fruit(fruits: list[str]) -> tuple[str, int]:
    fruit_count = {}
    most_common = ""
    highest_count = 0

    for fruit in fruits:
        if fruit not in fruit_count:
            fruit_count[fruit] = 1
        else:
            fruit_count[fruit] += 1

        if fruit_count[fruit] > highest_count:
            highest_count = fruit_count[fruit]
            most_common = fruit

    return most_common, highest_count


if __name__ == "__main__":
    fruits = ["🍓", "🍎", "🍇", "🍓", "🍌", "🍓", "🍌", "🍎", "🍓", "🍎", "🍇", "🍇", "🍓"]
    most_common, count = find_most_common_fruit(fruits)
    print("A fruta mais frequente é:", most_common)
    print("Quantidade:", count)
