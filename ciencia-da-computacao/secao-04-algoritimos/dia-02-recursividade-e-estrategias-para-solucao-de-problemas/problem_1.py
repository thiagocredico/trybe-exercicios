POSITIVE_WORDS = {
    "incrível",
    "ótimo",
    "super",
    "divetido",
    "bacana",
    "legal",
    "gostei",
    "bom",
}
NEGATIVE_WORDS = {
    "tedioso",
    "chato",
    "inútil",
    "ruim",
    "terrível",
    "péssimo",
    "estúpido",
    "odiei",
}

# & e demais operadores ( | ˆ etc ) funcionam apenas entre conjuntos,
# para conjuntos + iteraveis use os métodos


def detect_positive(review: str) -> bool:
    words = review.split()
    count_positive = len(POSITIVE_WORDS.intersection(words))
    count_negative = len(NEGATIVE_WORDS.intersection(words))

    return count_positive >= count_negative


if __name__ == "__main__":
    good_review = "Esse filme é incrível"
    print(good_review, detect_positive(good_review))
    bad_review = "Eu odiei esse filme"
    print(bad_review, detect_positive(bad_review))
