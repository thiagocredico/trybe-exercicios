package com.betrybe.solarsystem

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.betrybe.solarsystem.common.SolarSystemDatabase
import com.betrybe.solarsystem.domain.planet.PlanetAdapter
import com.betrybe.solarsystem.domain.planet.PlanetItemListener

class MainActivity : AppCompatActivity(), PlanetItemListener {

    private val planetList: RecyclerView by lazy { findViewById(R.id.main_rv_planets) }

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val planets = SolarSystemDatabase.getPlanets()

        val adapter = PlanetAdapter(planets)
        adapter.setPlanetListener(this)

        planetList.layoutManager = LinearLayoutManager(baseContext)
        planetList.adapter = adapter

    }

    override fun onPlanetClick(view: View, position: Int) {
        val it = Intent(baseContext, InfoActivity::class.java)
        it.putExtra("planet_id", position)
        startActivity(it)
    }
}