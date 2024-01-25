package com.example.fragmentexample

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.fragment.app.FragmentContainerView

class MainActivity : AppCompatActivity(), View.OnClickListener {

    private val mFragmentOneButton: Button by lazy { findViewById(R.id.main_fragment_one) }
    private val mFragmentTwoButton: Button by lazy { findViewById(R.id.main_fragment_two) }
    private val mButton: Button by lazy { findViewById(R.id.button3) }

    private val fragmentOne = FragmentOne()
    private val fragmentTwo = FragmentTwo()

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mFragmentOneButton.setOnClickListener(this)
        mFragmentTwoButton.setOnClickListener(this)
        mButton.setOnClickListener(this)

    }

    override fun onClick(view: View?) {
        when(view?.id) {

            R.id.main_fragment_one -> {
                supportFragmentManager.beginTransaction()
                    .replace(R.id.main_fragment_container, fragmentOne)
                    .commit()
            }

            R.id.main_fragment_two -> {
                supportFragmentManager.beginTransaction()
                    .replace(R.id.main_fragment_container, fragmentTwo)
                    .commit()
            }

            R.id.button3 -> {
                val it = Intent(baseContext, NewActivity::class.java)
                startActivity(it)
            }

        }
    }
}