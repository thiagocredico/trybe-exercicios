package com.betrybe.aula04

abstract class Animal {

    abstract val raca:String

    open fun comer() {
        println("Comi!")
    }

}

class Coelho: Animal() {
    override val raca: String
        get() = TODO("Not yet implemented")

    override fun comer() {
        TODO("Not yet implemented")
    }
}

class Gato: Animal() {
    override val raca: String
        get() = TODO("Not yet implemented")
}

class Pessoa (val nome:String, val idade:Int, val email:String = "") {

    fun imprimirNome(mensagem:String = "Olá") {
        println("$mensagem $nome")
    }

}

fun main() {

    val animal = Coelho()

    val bruno = Pessoa("Bruno Lopes", 20,)

    println("Nome: ${bruno.nome}")
    println("Idade: ${bruno.idade}")
    println("Email: ${bruno.email}")

    bruno.imprimirNome()
    bruno.imprimirNome("Fala")


}