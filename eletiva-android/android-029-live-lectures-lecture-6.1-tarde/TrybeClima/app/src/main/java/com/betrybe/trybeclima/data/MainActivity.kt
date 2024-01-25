package com.betrybe.trybeclima.data

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.betrybe.trybeclima.R
import com.betrybe.trybeclima.data.api.OpenWeatherService
import com.betrybe.trybeclima.data.model.CurrentWeatherData
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val openWeatherService = OpenWeatherService.instance

        val callOpenWeatherService = openWeatherService
            .getCurrentWeatherData("Fortaleza", "2dbf6a905778a62678f46bbc0db92ed4")

        callOpenWeatherService.enqueue(object : Callback<CurrentWeatherData> {
            override fun onResponse(
                call: Call<CurrentWeatherData>,
                response: Response<CurrentWeatherData>
            ) {

                val weatherData = response.body()
                Log.i("Trybe Clima", "$weatherData")

            }

            override fun onFailure(call: Call<CurrentWeatherData>, t: Throwable) {
                Log.e("Trybe Clima", "Ocorreu um erro durante a requisição: ${t.message}")
            }
        })

    }

}