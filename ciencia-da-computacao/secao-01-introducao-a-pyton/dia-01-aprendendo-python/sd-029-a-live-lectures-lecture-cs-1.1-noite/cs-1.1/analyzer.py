from collections import Counter


def analyze(text: str) -> str:
    report = ""

    word_count = len(text.split(" "))
    report += f"Número de palavras: {word_count}\n"

    # char_counter = dict()  # {}
    # for char in text:
    #     if char in char_counter:
    #         char_counter[char] += 1
    #     else:
    #         char_counter[char] = 1

    char_counter = dict(Counter(text))

    report += f"Ocorrência por caracter: {char_counter}"

    return report


if __name__ == "__main__":
    text_to_analyze = "Três tigres tristes comendo trigo no trilho do trem"

    print(
        analyze(text_to_analyze)
    )
