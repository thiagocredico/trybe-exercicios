package com.betrybe.aula02


fun operacao(x:Int, y:Int, f:(Int, Int) -> Int) = f(x, y)

fun main() {


    val frutasList = listOf("Banana", "Banana", "Maçã", "Uva")

    frutasList.forEach {
        println(it)
    }

//    val soma = {a:Int, b:Int -> a + b }
//    val subtracao = {a:Int, b:Int -> a - b }
//    val divisao = {a:Int, b:Int -> a / b }
//    val multiplicacao = {a:Int, b:Int -> a * b }
//
//    println("${operacao(2, 3, multiplicacao)}")


//    val frutasList = listOf("Banana", "Banana", "Maçã", "Uva")
//    var frutasSet = mutableSetOf("Banana", "Banana", "Maçã", "Uva")
//
//
//    for( i in frutasList) {
//        println(i)
//    }
//
//    println()
//
//    for( i in frutasSet) {
//        println(i)
//    }

//    // Lista Imutável
//    val frutas = listOf("Banana", "Maçã", "Uva")
//    frutas = listOf("")
//
//    // Lista Mutável
//    val frutas2 = mutableListOf("Acerola", "Abacaxi", "Pêra")
//
//    val a = 3
//    a = 6
//    var b = 5
//    var c = a + b
//
//    frutas2.add("Cereja")
//    frutas2.removeAt(2)
//    frutas2[2] = ""
//
//    for(i in frutas2){
//        println(i)
//    }


//    var frutas = arrayOf("Banana", "Maçã", "Uva")
//
//    frutas[0] = "Acerola"
//
//    for(i in frutas.indices) {
//        println(frutas[i])
//    }
//
//    for( i in frutas) {
//        println(i)
//    }

}