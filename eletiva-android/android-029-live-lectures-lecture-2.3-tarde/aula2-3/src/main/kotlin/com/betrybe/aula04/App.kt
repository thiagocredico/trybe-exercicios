package com.betrybe.aula04


interface OnClickListener {
    fun onClick()
}


//class Main {
//
//
//    init {
//
//        button.setOnCLickListener(object : OnClickListener{
//            override fun onClick() {
//                TODO("Not yet implemented")
//            }
//        })
//
//    }
//}

class Bruno

// Singleton Pattern
object DBConn {

    var instance: Bruno? = null

    fun teste():Bruno = Bruno()


    fun init():Bruno{
        if(instance == null){
            instance = Bruno()
        }
        return instance!!
    }

}

enum class DiasDaSemana {
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA
}

enum class Cores (val hex:String) {
    VERMELHO("#FF0000"),
    VERDE("#00FF00"),
    AZUL("#0000FF"),
    BRANCO("#FFFFFF"),
    PRETO("#000000")
}

fun imprimirNomeDia(nome:DiasDaSemana){
    println(nome)
}


data class User(
    val name:String,
    val age:Int
)

fun main() {

    println(DBConn.init())
    println(DBConn.init())


    println(Cores.VERMELHO.hex)


    imprimirNomeDia(DiasDaSemana.SEGUNDA)


//    val bruno = User("Bruno Lopes", 20)
//
//    // Getter
//    println(bruno.name)
//
//
//    println(bruno)

}