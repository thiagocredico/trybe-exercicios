package com.betrybe.welcometrybe

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.textfield.TextInputEditText

class MainActivity : AppCompatActivity(){

    private val campoNome:TextInputEditText by lazy { findViewById(R.id.campo_nome) }
    private val cliqueAqui:Button by lazy { findViewById(R.id.botao_clique_aqui) }
    private val exibirMensagem:TextView by lazy { findViewById(R.id.exibir_mensagem) }
    private val imagemGus:ImageView by lazy { findViewById(R.id.imagem_gus_cs)}


    private var estaExibindoMensagem = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Mudar visibilidade da imagem e do texto
        mudarExibicao(false)

        cliqueAqui.setOnClickListener {

            if(!estaExibindoMensagem) {
                val texto = campoNome.text.toString()

                exibirMensagem.text = "Boas vindas a Trybe $texto"
                mudarExibicao(true)

                cliqueAqui.text = "Limpar"
                campoNome.isEnabled = false

                estaExibindoMensagem = true

            } else {
                cliqueAqui.text = "Clique aqui"
                campoNome.text?.clear()
                campoNome.isEnabled = true

                mudarExibicao(false)

                estaExibindoMensagem = false
            }

        }


    }

    private fun mudarExibicao(exibir:Boolean) {
        if(exibir) {
            exibirMensagem.visibility = View.VISIBLE
            imagemGus.visibility = View.VISIBLE
        } else {
            exibirMensagem.visibility = View.GONE
            imagemGus.visibility = View.GONE
        }
    }

}