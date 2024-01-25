package com.betrybe.aula03

import kotlin.math.pow

interface Forma2D {

    var area:Double

    //fun calcularArea(): Double

}

class Retangulo(val altura:Double, val largura:Double): Forma2D {
    //override fun calcularArea(): Double = altura * largura

    private var foo = 0.0
    override var area: Double
        get() = foo
        set(value)  {
            println("Valor antigo: $area, valo novo: $value")
            foo = value
        }


}

//class Circulo(val raio:Double): Forma2D {
//    //override fun calcularArea(): Double  = Math.PI * raio.pow(2.0)
//    override val area: Double
//        get() = Math.PI * raio.pow(2.0)
//}


fun main() {

    val ret = Retangulo(3.0, 4.0)
    //println("Área do retângulo: ${ret.calcularArea()}")
    ret.area =  10.0
    println("Área do retângulo: ${ret.area}")

    ret.area =  100.0
    println("Área do retângulo: ${ret.area}")

//    val cir = Circulo(4.0)
//    //println("Área do circulo: ${cir.calcularArea()}")
//    println("Área do circulo: ${cir.area}")

}