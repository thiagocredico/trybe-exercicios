package com.betrybe.solarsystem.domain.planet

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.Adapter
import com.betrybe.solarsystem.R


class PlanetAdapter(val planets:List<Planet>) : Adapter<PlanetAdapter.PlanetViewHolder>() {

    private var planetListener: PlanetItemListener? = null

    fun setPlanetListener(listener: PlanetItemListener) {
        this.planetListener = listener
    }


    class PlanetViewHolder(view: View, planetListener: PlanetItemListener? ) : RecyclerView.ViewHolder(view) {
        val name: TextView = view.findViewById(R.id.item_planet_name)
        val image: ImageView = view.findViewById(R.id.item_planet_image)

        init {
            view.setOnClickListener {
                planetListener?.onPlanetClick(view, adapterPosition)
            }
        }

    }


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PlanetViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_planet, parent, false)
        return PlanetViewHolder(view, planetListener)
    }

    override fun onBindViewHolder(holder: PlanetViewHolder, position: Int) {
        holder.name.text = planets[position].name
        holder.image.setImageResource(planets[position].photo)
    }

    override fun getItemCount(): Int = planets.size
}