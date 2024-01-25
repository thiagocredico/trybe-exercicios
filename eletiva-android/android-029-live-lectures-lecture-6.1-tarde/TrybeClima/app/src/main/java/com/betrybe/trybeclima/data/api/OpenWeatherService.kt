package com.betrybe.trybeclima.data.api

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object OpenWeatherService {

    val instance: OpenWeatherServiceApi by lazy {
        val retrofit = Retrofit.Builder()
            .baseUrl("https://api.openweathermap.org/data/2.5/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        retrofit.create(OpenWeatherServiceApi::class.java)
    }

}