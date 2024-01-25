package com.betrybe.aula01

/*
Escrever um programa que receba três números inteiros,
calcule e mostre a média aritmética simples entre os números.
 */

fun main() {

    print("Digite o primeiro número: ")
    var num1: Int = readln().toInt()

    print("Digite o segundo número: ")
    var num2: Int = readln().toInt()

    print("Digite o terceiro número: ")
    var num3: Int = readln().toInt()


    //var media = calcularMedia(num1, num2, num3)
    //println("A média aritmetica simples é $media")

    println("A média aritmetica simples é ${calcularMedia(num1, num2, num3)}")

}

//fun calcularMedia(a:Int, b:Int, c: Int): Int {
//    return (a + b + c) / 3
//}

fun calcularMedia(a: Int, b: Int, c: Int) = (a + b + c) / 3