package com.betrybe.variasactivitys

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.Toast
import com.google.android.material.textfield.TextInputEditText

class MainActivity : AppCompatActivity(), View.OnClickListener {

    private val oneActivityButton: Button by lazy { findViewById(R.id.one_activity_button) }
    private val twoActivityButton: Button by lazy { findViewById(R.id.two_activity_button) }
    private val campoTexto:TextInputEditText by lazy { findViewById(R.id.campo_texto) }

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        oneActivityButton.setOnClickListener(this)
        twoActivityButton.setOnClickListener(this)

        Log.i("App", " MainActivity onCreate()")

    }

    override fun onStart() {
        super.onStart()
        Log.i("App", "MainActivity  onStart()")
    }

    override fun onResume() {
        super.onResume()
        Log.i("App", "MainActivity onResume()")
    }

    override fun onPause() {
        super.onPause()
        Log.i("App", "MainActivity onPause()")
    }

    override fun onStop() {
        super.onStop()
        Log.i("App", "MainActivity onStop()")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.i("App", "MainActivity onDestroy()")
    }

    override fun onRestart() {
        super.onRestart()
        Log.i("App", "MainActivity onRestart()")
    }

    override fun onClick(view: View?) {

        when (view?.id) {

            R.id.one_activity_button -> {

                val valorCampoTexto = campoTexto.text.toString()

                val intent = Intent(baseContext, OneActivity::class.java)
                intent.putExtra("nome", valorCampoTexto)
                intent.putExtra("idade", 20)

                startActivity(intent)
            }

            R.id.two_activity_button -> {
                val intent = Intent(baseContext, TwoActivity::class.java)
                startActivity(intent)
            }

        }

    }
}