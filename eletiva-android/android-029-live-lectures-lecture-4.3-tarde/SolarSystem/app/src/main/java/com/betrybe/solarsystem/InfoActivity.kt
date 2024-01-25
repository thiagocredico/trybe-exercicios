package com.betrybe.solarsystem

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import com.betrybe.solarsystem.common.SolarSystemDatabase

class InfoActivity : AppCompatActivity() {

    private val image: ImageView by lazy { findViewById(R.id.info_iv_photo) }
    private val name: TextView by lazy { findViewById(R.id.textView5) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_info)

        val planetId = intent.getIntExtra("planet_id", 0)
        val planet = SolarSystemDatabase.getPlanetById(planetId + 1)!!

        image.setImageResource(planet.photo)
        name.text = planet.name


    }
}