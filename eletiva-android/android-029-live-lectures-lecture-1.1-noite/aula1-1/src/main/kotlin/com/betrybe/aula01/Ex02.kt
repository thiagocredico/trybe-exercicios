package com.betrybe.aula01

/*
Escreva um programa que receba o salário base de um funcionário, calcule
e mostre o salário a receber, sabendo-se que o funcionário tem gratificação
de 5% sobre o salário base e paga imposto de 7% também sobre o salário base.
 */

fun main() {

    print("Digite o salário base: ")
    var salario = readln().toDouble()

    var imposto = calcularImposto(salario)
    var gratificacao = calcularGratificacao(salario)

    println("O salario a receber é igual a ${salario + gratificacao - imposto}")

}

fun calcularGratificacao(salarioBase: Double) = salarioBase * 0.05

fun calcularImposto(salarioBase: Double) = salarioBase * 0.07