package com.betrybe.aula04


data class User(
    val name: String
)

enum class DiaDaSemana {
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA
}

enum class HttpCodes(val code: Int) {
    NOT_FOUND(404),
    OK(200),
    CREATED(201)
}

enum class Cores(val hex: String) {
    VERMELHO("#FF0000"),
    VERDE("#00FF00"),
    AZUL("#0000FF"),
    BRANCO("#FFFFFF"),
    PRETO("#000000")
}

fun imprimirDiaDaSemana(dia: DiaDaSemana) {
    println(dia)
}

// Singleton Pattern
object DBConnection {

    private var instance: String? = null

    fun getInstance(): String {
        if( instance == null) {
            println("Entrei aqui!")
            instance = "Conectado ao banco"
        }

        return instance!!
    }

}

interface OnClickListener{
    fun onClick()
}


fun main() {

//    button.setOnclickListenr(object: OnClickListener{
//        override fun onClick() {
//           println("Ola")
//        }
//    })

    println(DBConnection.getInstance())

    println(DBConnection.getInstance())

//    println(Cores.VERMELHO.hex)
//
//    imprimirDiaDaSemana(DiaDaSemana.QUINTA)

//    val bruno = User("Bruno Lopes")
//
//    println(bruno)

}