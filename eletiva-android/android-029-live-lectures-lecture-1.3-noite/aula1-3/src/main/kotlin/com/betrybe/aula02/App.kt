package com.betrybe.aula02

fun main() {

    val numeros = listOf(1, 2, 3, 4, 5)

    numeros
        .filter { it > 2 }
        .map { it * it }
        .forEach { println(it) }

}