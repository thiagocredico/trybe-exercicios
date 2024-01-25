package com.betrybe.aula04

import kotlin.math.pow

interface Forma2D {

    val area:Double

    // fun calcularArea(): Double

}

class Retangulo(val largura:Double, val altura:Double): Forma2D {


    //override fun calcularArea(): Double  = largura * altura
    override val area: Double
        get() {
            println("Ola")
            return largura * altura
        }

    var teste: Int
        get() {
            println("Receba!")
            return 5
        }

        set(value) {
            println("Valo antigo: $teste")
            teste = value
        }

}

class Circulo (val raio: Double):Forma2D {
    //override fun calcularArea(): Double  = Math.PI * raio.pow(2.0)
    override val area: Double
        get() {
            println("Ola")
            return Math.PI * raio.pow(2.0)
        }

}


fun main() {


    val ret = Retangulo(3.0, 5.0)
    //println(ret.calcularArea())
    println(ret.area)

    println(ret.teste)

    ret.teste = 100

    println(ret.teste)

}