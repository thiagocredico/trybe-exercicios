"""
Reorganize os elementos de uma lista de inteiros
invertendo a ordem em que eles estão dispostos.
"""


def reverse(numbers: list[int]) -> list[int]:
    if len(numbers) == 0:
        return []
    return [numbers[-1]] + reverse(numbers[:-1])


if __name__ == "__main__":
    my_numbers = [1, 2, 3, 4, 5]
    print(reverse(my_numbers))  # saída: [5, 4, 3, 2, 1]

# Exemplo de reverse usando index para controlar a chamada recursiva
# atenção para a diferença no consumo de memória comparado com o slice (quantidade de listas criadas)
# https://pythontutor.com/render.html#code=def%20reverse%28numbers,%20last_index%29%3A%0A%20%20%20%20if%20last_index%20%3C%200%3A%0A%20%20%20%20%20%20%20%20return%20%5B%5D%0A%0A%20%20%20%20return%20%5Bnumbers%5Blast_index%5D%5D%20%2B%20reverse%28numbers,%20last_index%20-%201%29%0A%0A%0Aif%20__name__%20%3D%3D%20'__main__'%3A%0A%20%20%20%20my_numbers%20%3D%20%5B10,%2020,%2030,%2040%5D%0A%20%20%20%20my_reversed%20%3D%20reverse%28my_numbers,%20len%28my_numbers%29-1%29%0A%0A%20%20%20%20print%28my_numbers%29%0A%20%20%20%20print%28my_reversed%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false
