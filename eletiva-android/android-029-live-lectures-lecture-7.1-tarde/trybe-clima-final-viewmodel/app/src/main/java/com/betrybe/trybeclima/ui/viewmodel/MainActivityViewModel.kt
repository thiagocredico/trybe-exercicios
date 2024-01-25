package com.betrybe.trybeclima.ui.viewmodel

import androidx.lifecycle.ViewModel
import com.betrybe.trybeclima.data.api.OpenWeatherServiceClient
import com.betrybe.trybeclima.data.api.model.CurrentWeatherData
import com.betrybe.trybeclima.data.api.model.ForecastDailyData
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter

class MainActivityViewModel : ViewModel() {

    private val mOpenWeatherService = OpenWeatherServiceClient.instance

    private var _cityName = ""
    val cityName: String
        get() = _cityName

    private var _temp = 0.0
    val temp: Double
        get() = _temp

    private var _maxTemp = 0.0
    val maxTemp: Double
        get() = _maxTemp

    private var _minTemp = 0.0
    val minTemp: Double
        get() = _minTemp

    private var _feelsTemp = 0.0
    val feelsTemp: Double
        get() = _feelsTemp

    private var _humidity = 0
    val humidity: Int
        get() = _humidity

    private var _isForecastContainerVisible = false
    val isForecastContainerVisible: Boolean
        get() = _isForecastContainerVisible

    private var _forecast01Temp = 0.0
    val forecast01Temp: Double
        get() = _forecast01Temp

    private var _forecast01Date = ""
    val forecast01Date: String
        get() = _forecast01Date

    private var _forecast02Temp = 0.0
    val forecast02Temp: Double
        get() = _forecast02Temp

    private var _forecast02Date = ""
    val forecast02Date: String
        get() = _forecast02Date

    private var _forecast03Temp = 0.0
    val forecast03Temp: Double
        get() = _forecast03Temp

    private var _forecast03Date = ""
    val forecast03Date: String
        get() = _forecast03Date

    private var _forecast04Temp = 0.0
    val forecast04Temp: Double
        get() = _forecast04Temp

    private var _forecast04Date = ""
    val forecast04Date: String
        get() = _forecast04Date

    private var _forecast05Temp = 0.0
    val forecast05Temp: Double
        get() = _forecast05Temp

    private var _forecast05Date = ""
    val forecast05Date: String
        get() = _forecast05Date

    private suspend fun getCurrentWeatherData(cityName: String): CurrentWeatherData? {
        val currentWeatherDataResponse = mOpenWeatherService.getCurrentWeatherData(
            OpenWeatherServiceClient.API_KEY,
            cityName
        )
        return currentWeatherDataResponse.body()
    }

    private suspend fun getForecastDailyData(cityName: String): ForecastDailyData? {
        val forecastDailyDataResponse = mOpenWeatherService.getForecastDailyData(
            OpenWeatherServiceClient.API_KEY,
            cityName,
            5
        )
        return forecastDailyDataResponse.body()
    }

    fun getWeatherData(cityName: String) {

        CoroutineScope(Dispatchers.IO).launch {
            val currentWeatherData = getCurrentWeatherData(cityName)
            if (currentWeatherData != null) {
                _cityName = currentWeatherData.name
                _temp = currentWeatherData.main.temp
                _maxTemp = currentWeatherData.main.tempMax
                _minTemp = currentWeatherData.main.tempMin
                _feelsTemp = currentWeatherData.main.feelsLike
                _humidity = currentWeatherData.main.humidity
            }
            val forecastDailyData = getForecastDailyData(cityName)
            if (forecastDailyData != null) {
                val zoneId = ZoneId.systemDefault()
                val formatter = DateTimeFormatter.ofPattern("dd/yy")

                _forecast01Temp = forecastDailyData.list[0].temp.day
                val instant01 = Instant.ofEpochSecond(forecastDailyData.list[0].dt)
                val forecast01Date = instant01.atZone(zoneId).toLocalDate()
                _forecast01Date = forecast01Date.format(formatter)

                _forecast02Temp = forecastDailyData.list[1].temp.day
                val instant02 = Instant.ofEpochSecond(forecastDailyData.list[1].dt)
                val forecast02Date = instant02.atZone(zoneId).toLocalDate()
                _forecast02Date = forecast02Date.format(formatter)

                _forecast03Temp = forecastDailyData.list[2].temp.day
                val instant03 = Instant.ofEpochSecond(forecastDailyData.list[2].dt)
                val forecast03Date = instant03.atZone(zoneId).toLocalDate()
                _forecast03Date = forecast03Date.format(formatter)

                _forecast04Temp = forecastDailyData.list[3].temp.day
                val instant04 = Instant.ofEpochSecond(forecastDailyData.list[3].dt)
                val forecast04Date = instant04.atZone(zoneId).toLocalDate()
                _forecast04Date = forecast04Date.format(formatter)

                _forecast05Temp = forecastDailyData.list[4].temp.day
                val instant05 = Instant.ofEpochSecond(forecastDailyData.list[4].dt)
                val forecast05Date = instant05.atZone(zoneId).toLocalDate()
                _forecast05Date = forecast05Date.format(formatter)

            }

            _isForecastContainerVisible = true
        }

    }

}