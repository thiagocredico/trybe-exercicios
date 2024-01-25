package com.betrybe.aula04

interface Notificacao {
    fun enviarMensagem(msg: String)
}

class NotificacaoEmail: Notificacao {
    override fun enviarMensagem(msg: String) {
        println("Enviando email: $msg")
    }
}

class NotificacaoSMS: Notificacao {
    override fun enviarMensagem(msg: String) {
        println("Enviando sms: $msg")
    }
}

class NotificacaoWhatsApp:Notificacao {
    override fun enviarMensagem(msg: String) {
        println("Enviando whatsapp: $msg")
    }

}

class SistemaNotificacao(val tipo: Notificacao): Notificacao{

    override fun enviarMensagem(msg: String) {
        tipo.enviarMensagem(msg)
    }

}

class SistemaNotificacaoDelegate(val tipo: Notificacao): Notificacao by tipo



fun main() {

    val nome:String by lazy {
        println("Ola")
        "Bruno"
    }

    println(nome)
    println(nome)


//    val tipo = NotificacaoEmail()
//    val sistemaNotificacaoDelegate = SistemaNotificacao(tipo)
//
//    sistemaNotificacaoDelegate.enviarMensagem("Um erro ocorreu")


}