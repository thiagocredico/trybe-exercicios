players = {1: "Alisson", 5: "Casemiro", 10: "Neymar", 9: "Richarlison"}
# make a dict samples
dict_a = {}  # dict()
dict_b = {"one": 1, "two": 2, "three": 3}
dict_c = dict(one=1, two=2, three=3)
dict_d = dict(zip(["one", "two", "three"], [1, 2, 3]))
dict_e = dict([("one", 1), ("two", 2), ("three", 3)])
dict_f = dict({"one": 1, "two": 2, "three": 3})
dict_g = {x: x**2 for x in range(3)}

if __name__ == "__main__":
    print(type(players))
    print(players)
    print(players.keys())
    print(players.values())
    print(players.items())
    print(players[10])
    print("⚽")
