package com.betrybe.trybeportal

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {

    private val mBottomNavigation: BottomNavigationView by lazy { findViewById(R.id.main_bottom_navigation) }
    private val newsFragment = NewsFragment()
    private val stockFragment = StockFragment()

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        supportFragmentManager.beginTransaction()
            .replace(R.id.main_fragment_container, newsFragment)
            .commit()

        mBottomNavigation.setOnItemSelectedListener {

            when(it.itemId) {
                R.id.bottom_navigation_news -> {
                    supportFragmentManager.beginTransaction()
                        .replace(R.id.main_fragment_container, newsFragment)
                        .commit()
                }

                R.id.bottom_navigation_stock -> {
                    supportFragmentManager.beginTransaction()
                        .replace(R.id.main_fragment_container, stockFragment)
                        .commit()
                }
            }

            true
        }

    }
}