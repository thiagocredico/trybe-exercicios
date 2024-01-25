package com.betrybe.aula04

import kotlin.properties.Delegates

// Delegate Pattern

interface Notificacao {
    fun enviarMensagem(msg: String)
}

class NotificacaoEmail : Notificacao {
    override fun enviarMensagem(msg: String) {
        println("Enviando email: $msg")
    }
}

class NotificacaoSMS : Notificacao {
    override fun enviarMensagem(msg: String) {
        println("Enviando sms: $msg")
    }

}

class NotificacaoWhatsApp: Notificacao {
    override fun enviarMensagem(msg: String) {
        println("Enviando whatsapp: $msg")
    }

}

//class SistemaDeNotificacao(val tipo: Notificacao) : Notificacao {
//    override fun enviarMensagem(msg: String) {
//        tipo.enviarMensagem(msg)
//    }
//}

class SistemaDeNotificacao(val tipo: Notificacao) : Notificacao by tipo

fun main() {

    var nome: String by Delegates.observable("<SEM_NOME>") { property, oldValue, newValue ->
       println("A propriedade ${property.name} está sendo alterada de $oldValue para $newValue")
    }

    nome = "Bruno Lopes"
    nome = "João da Silva"

//    val nome: String by lazy {
//        println("Passei aqui")
//        "Bruno Lopes"
//    }
//
//    println(nome)
//    println("---------------")
//    println(nome)


//    val tipo = NotificacaoWhatsApp()
//
//    val sistemaDeNotificacao = SistemaDeNotificacao(tipo)
//    sistemaDeNotificacao.enviarMensagem("Finalizar compra!")

}