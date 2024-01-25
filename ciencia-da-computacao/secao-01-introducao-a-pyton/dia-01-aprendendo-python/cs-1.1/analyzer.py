def analyze(text: str) -> str:
    word_count = len(text.split(" "))

    return f"Número de palavras: {word_count}"


if __name__ == "__main__":
    text_to_analyze = "Três tigres tristes comendo trigo no trilho do trem"

    print(
        analyze(text_to_analyze)
    )
