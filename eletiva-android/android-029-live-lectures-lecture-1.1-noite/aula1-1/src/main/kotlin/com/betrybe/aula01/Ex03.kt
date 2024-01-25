package com.betrybe.aula01

import kotlin.math.pow

/*
Escreva um programa que receba a altura e o peso de uma pessoa,
calcule e mostre o IMC correspondente sabendo-se que o cálculo do IMC é
igual o peso, em quilos, dividido pela altura, em metros, ao quadrado.
 */

fun main() {

    print("Digite a sua altura: ")
    var altura = readln().toDouble()

    print("Digite o seu peso: ")
    var peso = readln().toDouble()

    var imc = calcularIMC(peso, altura)

    println("Seu IMC é igual a $imc")

}

fun calcularIMC(peso: Double, altura: Double) = peso / (altura * altura)