package com.betrybe.aula02

/*
Escreva um programa em Kotlin que preencha uma lista com dez números
inteiros, calcule e mostre duas listas resultantes. A primeira lista
deve conter os números positivos e a segunda, os números negativos.
 */

fun main() {


    val list = mutableListOf<Int>()

    while(list.size <= 10) {
        print("Digite um número: ")
        list.add(readln().toInt())
    }

    list.forEach { print("$it ") }

    println()
    list
        .filter { it >= 0 }
        .forEach { print("$it ") }

    println()
    list
        .filter { it < 0 }
        .forEach { print("$it ") }

}
