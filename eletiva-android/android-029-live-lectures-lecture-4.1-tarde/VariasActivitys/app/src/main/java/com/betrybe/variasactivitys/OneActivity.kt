package com.betrybe.variasactivitys

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.TextView

class OneActivity : AppCompatActivity() {

    private val textView: TextView by lazy { findViewById(R.id.one_textview) }
    private val button: Button by lazy { findViewById(R.id.button) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_one)

        val nome = intent.getStringExtra("nome")
        val idade = intent.getIntExtra("idade", 0)

        textView.text = nome

        button.setOnClickListener {
            val it = Intent(baseContext, TwoActivity::class.java)
            startActivity(it)
        }

        Log.i("App", "OneActivity  onCreate()")

    }

    override fun onStart() {
        super.onStart()
        Log.i("App", "OneActivity  onStart()")
    }

    override fun onResume() {
        super.onResume()
        Log.i("App", "OneActivity onResume()")
    }

    override fun onPause() {
        super.onPause()
        Log.i("App", "OneActivity onPause()")
    }

    override fun onStop() {
        super.onStop()
        Log.i("App", "OneActivity onStop()")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.i("App", "OneActivity onDestroy()")
    }

    override fun onRestart() {
        super.onRestart()
        Log.i("App", "OneActivity onRestart()")
    }

}