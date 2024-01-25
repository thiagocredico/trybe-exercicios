package com.betrybe.aula03


interface PodeVoar {
    fun voar()
}

abstract class Animal(nome: String) {

    abstract fun comer()
}

class Aguia : Animal("Aguia"), PodeVoar {

    override fun voar() {
        TODO("Not yet implemented")
    }

    override fun comer() {
        TODO("Not yet implemented")
    }

}

class Coelho(nome: String) : Animal(nome) {
    override fun comer() {
        println("Comi cenoura!")
    }
}

class Gato : Animal("Gato") {
    override fun comer() {
        println("Comi ração!")
    }

}

class Pessoa(val nome: String, val idade: Int, val email: String = "") {

    init {
        if (email.isNotEmpty()) {
            println("Enviar email!")
        }
    }

    fun imprimirNome() {
        println("$nome")
    }

}

fun main() {

    val bruno = Pessoa("Bruno", 20)
    bruno.imprimirNome()


    println("--------------")

    val joao = Pessoa("João", 25, "joao@trybe.com")
    joao.imprimirNome()

}