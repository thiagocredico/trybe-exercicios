package com.betrybe.trybeclima.data.api

import com.betrybe.trybeclima.data.api.model.CurrentWeatherData
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Query

interface OpenWeatherService {

    @GET("weather")
    suspend fun getCurrentWeatherData(
        @Query("appid") apiKey: String,
        @Query("q") cityQuery:String,
        @Query("units") units:String = "metric"): Response<CurrentWeatherData>

}