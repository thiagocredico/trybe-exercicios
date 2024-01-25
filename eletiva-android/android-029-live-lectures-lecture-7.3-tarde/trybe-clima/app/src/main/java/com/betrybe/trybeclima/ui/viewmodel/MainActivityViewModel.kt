package com.betrybe.trybeclima.ui.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
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

    private var _cityName = MutableLiveData("")
    val cityName: LiveData<String>
        get() = _cityName

    private var _temp = MutableLiveData(0.0)
    val temp: LiveData<Double>
        get() = _temp

    private var _maxTemp = MutableLiveData(0.0)
    val maxTemp: LiveData<Double>
        get() = _maxTemp

    private var _minTemp = MutableLiveData(0.0)
    val minTemp: LiveData<Double>
        get() = _minTemp

    private var _feelsTemp = MutableLiveData(0.0)
    val feelsTemp: LiveData<Double>
        get() = _feelsTemp

    private var _humidity = MutableLiveData(0)
    val humidity: LiveData<Int>
        get() = _humidity

    private var _isForecastContainerVisible = MutableLiveData(false)
    val isForecastContainerVisible: LiveData<Boolean>
        get() = _isForecastContainerVisible

    private var _forecast01Temp = MutableLiveData(0.0)
    val forecast01Temp: LiveData<Double>
        get() = _forecast01Temp

    private var _forecast01Date = MutableLiveData("")
    val forecast01Date: LiveData<String>
        get() = _forecast01Date

    private var _forecast02Temp = MutableLiveData(0.0)
    val forecast02Temp: LiveData<Double>
        get() = _forecast02Temp

    private var _forecast02Date = MutableLiveData("")
    val forecast02Date: LiveData<String>
        get() = _forecast02Date

    private var _forecast03Temp = MutableLiveData(0.0)
    val forecast03Temp: LiveData<Double>
        get() = _forecast03Temp

    private var _forecast03Date = MutableLiveData("")
    val forecast03Date: LiveData<String>
        get() = _forecast03Date

    private var _forecast04Temp = MutableLiveData(0.0)
    val forecast04Temp: LiveData<Double>
        get() = _forecast04Temp

    private var _forecast04Date = MutableLiveData("")
    val forecast04Date: LiveData<String>
        get() = _forecast04Date

    private var _forecast05Temp = MutableLiveData(0.0)
    val forecast05Temp: LiveData<Double>
        get() = _forecast05Temp

    private var _forecast05Date = MutableLiveData("")
    val forecast05Date: LiveData<String>
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
                _cityName.postValue(currentWeatherData.name)
                _temp.postValue(currentWeatherData.main.temp)
                _maxTemp.postValue(currentWeatherData.main.tempMax)
                _minTemp.postValue(currentWeatherData.main.tempMin)
                _feelsTemp.postValue(currentWeatherData.main.feelsLike)
                _humidity.postValue(currentWeatherData.main.humidity)
            }
            val forecastDailyData = getForecastDailyData(cityName)
            if (forecastDailyData != null) {
                val zoneId = ZoneId.systemDefault()
                val formatter = DateTimeFormatter.ofPattern("dd/yy")

                _forecast01Temp.postValue(forecastDailyData.list[0].temp.day)
                val instant01 = Instant.ofEpochSecond(forecastDailyData.list[0].dt)
                val forecast01Date = instant01.atZone(zoneId).toLocalDate()
                _forecast01Date.postValue(forecast01Date.format(formatter))

                _forecast02Temp.postValue(forecastDailyData.list[1].temp.day)
                val instant02 = Instant.ofEpochSecond(forecastDailyData.list[1].dt)
                val forecast02Date = instant02.atZone(zoneId).toLocalDate()
                _forecast02Date.postValue(forecast02Date.format(formatter))

                _forecast03Temp.postValue(forecastDailyData.list[2].temp.day)
                val instant03 = Instant.ofEpochSecond(forecastDailyData.list[2].dt)
                val forecast03Date = instant03.atZone(zoneId).toLocalDate()
                _forecast03Date.postValue(forecast03Date.format(formatter))

                _forecast04Temp.postValue(forecastDailyData.list[3].temp.day)
                val instant04 = Instant.ofEpochSecond(forecastDailyData.list[3].dt)
                val forecast04Date = instant04.atZone(zoneId).toLocalDate()
                _forecast04Date.postValue(forecast04Date.format(formatter))

                _forecast05Temp.postValue(forecastDailyData.list[4].temp.day)
                val instant05 = Instant.ofEpochSecond(forecastDailyData.list[4].dt)
                val forecast05Date = instant05.atZone(zoneId).toLocalDate()
                _forecast05Date.postValue(forecast05Date.format(formatter))

            }

            _isForecastContainerVisible.postValue(true)
        }

    }

}