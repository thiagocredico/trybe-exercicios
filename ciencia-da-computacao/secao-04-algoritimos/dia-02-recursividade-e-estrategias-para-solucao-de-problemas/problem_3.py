def num_students(friends: list[tuple[str, str]]) -> int:
    unique_students = set()

    for pair in friends:
        unique_students.update(pair)

    return len(unique_students)


if __name__ == "__main__":
    friends = [
        ("Dani", "Ali"),
        ("Fabi", "Zizu"),
        ("Gabi", "Ito"),
        ("Fabi", "Rafa"),
        ("Ali", "Fabi"),
        ("Rafa", "Lulu"),
        ("Gabi", "Hos"),
        ("Eli", "Hos"),
        ("Hos", "Dani"),
        ("Zizu", "Gabi"),
        ("Fabi", "Gabi"),
    ]
    print(num_students(friends))
