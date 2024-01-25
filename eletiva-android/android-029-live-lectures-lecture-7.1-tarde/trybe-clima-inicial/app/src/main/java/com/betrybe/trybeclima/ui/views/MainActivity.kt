package com.betrybe.trybeclima.ui.views

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.inputmethod.InputMethodManager
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import com.betrybe.trybeclima.R
import com.betrybe.trybeclima.data.api.OpenWeatherServiceClient
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter

class MainActivity : AppCompatActivity() {

    private val mTextInputLayout: TextInputLayout by lazy { findViewById(R.id.main_text_input_layout) }
    private val mTextField: TextInputEditText by lazy { findViewById(R.id.main_text_field) }
    private val mCityName: TextView by lazy { findViewById(R.id.main_tv_city_name) }
    private val mCityTemp: TextView by lazy { findViewById(R.id.main_tv_city_temp) }
    private val mCityMaxTemp: TextView by lazy { findViewById(R.id.main_tv_city_max_temp) }
    private val mCityMinTemp: TextView by lazy { findViewById(R.id.main_tv_city_min_temp) }
    private val mCityFeelsTemp: TextView by lazy { findViewById(R.id.main_tv_city_feels_temp) }
    private val mCityHumidity: TextView by lazy { findViewById(R.id.main_tv_city_humidity) }
    private val mCityForecastContainer: ConstraintLayout by lazy { findViewById(R.id.main_cl_forecast) }
    private val mCityForecast01Temp: TextView by lazy { findViewById(R.id.main_tv_forecast_01_temp) }
    private val mCityForecast01Date: TextView by lazy { findViewById(R.id.main_tv_forecast_01_date) }
    private val mCityForecast02Temp: TextView by lazy { findViewById(R.id.main_tv_forecast_02_temp) }
    private val mCityForecast02Date: TextView by lazy { findViewById(R.id.main_tv_forecast_02_date) }
    private val mCityForecast03Temp: TextView by lazy { findViewById(R.id.main_tv_forecast_03_temp) }
    private val mCityForecast03Date: TextView by lazy { findViewById(R.id.main_tv_forecast_03_date) }
    private val mCityForecast04Temp: TextView by lazy { findViewById(R.id.main_tv_forecast_04_temp) }
    private val mCityForecast04Date: TextView by lazy { findViewById(R.id.main_tv_forecast_04_date) }
    private val mCityForecast05Temp: TextView by lazy { findViewById(R.id.main_tv_forecast_05_temp) }
    private val mCityForecast05Date: TextView by lazy { findViewById(R.id.main_tv_forecast_05_date) }

    private val mOpenWeatherService = OpenWeatherServiceClient.instance

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        mCityName.text = ""
        mCityTemp.text = ""
        mCityMaxTemp.text = "-"
        mCityMinTemp.text = "-"
        mCityFeelsTemp.text = "-"
        mCityHumidity.text = "-"
        mCityForecastContainer.visibility = View.INVISIBLE

        mTextInputLayout.setEndIconOnClickListener {
            val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
            imm.hideSoftInputFromWindow(mCityName.windowToken, 0)
            val cityName = mTextField.text.toString()
            CoroutineScope(Dispatchers.IO).launch {
                val currentWeatherDataResponse = mOpenWeatherService.getCurrentWeatherData(
                    OpenWeatherServiceClient.API_KEY,
                    cityName
                )
                val forecastDailyDataResponse = mOpenWeatherService.getForecastDailyData(
                    OpenWeatherServiceClient.API_KEY,
                    cityName,
                    5
                )
                if (currentWeatherDataResponse.isSuccessful && forecastDailyDataResponse.isSuccessful) {
                    val currentWeatherData = currentWeatherDataResponse.body()
                    if (currentWeatherData != null) {
                        withContext(Dispatchers.Main) {
                            mCityName.text = currentWeatherData.name
                            mCityTemp.text = "${currentWeatherData.main.temp}°C"
                            mCityMaxTemp.text = "${currentWeatherData.main.tempMax}°C"
                            mCityMinTemp.text = "${currentWeatherData.main.tempMin}°C"
                            mCityFeelsTemp.text = "${currentWeatherData.main.feelsLike}°C"
                            mCityHumidity.text = "${currentWeatherData.main.humidity}%"
                        }
                    }
                    val forecastDailyData = forecastDailyDataResponse.body()
                    if (forecastDailyData != null) {
                        withContext(Dispatchers.Main) {
                            mCityForecastContainer.visibility = View.VISIBLE

                            val zoneId = ZoneId.systemDefault()
                            val formatter = DateTimeFormatter.ofPattern("dd/yy")

                            mCityForecast01Temp.text =
                                "${forecastDailyData.list[0].temp.day.toInt().toString()}°C"
                            val instant01 = Instant.ofEpochSecond(forecastDailyData.list[0].dt)
                            val forecast01Date = instant01.atZone(zoneId).toLocalDate()
                            mCityForecast01Date.text = "${forecast01Date.format(formatter)}"

                            mCityForecast02Temp.text =
                                "${forecastDailyData.list[1].temp.day.toInt().toString()}°C"
                            val instant02 = Instant.ofEpochSecond(forecastDailyData.list[1].dt)
                            val forecast02Date = instant02.atZone(zoneId).toLocalDate()
                            mCityForecast02Date.text = "${forecast02Date.format(formatter)}"

                            mCityForecast03Temp.text =
                                "${forecastDailyData.list[2].temp.day.toInt().toString()}°C"
                            val instant03 = Instant.ofEpochSecond(forecastDailyData.list[2].dt)
                            val forecast03Date = instant03.atZone(zoneId).toLocalDate()
                            mCityForecast03Date.text = "${forecast03Date.format(formatter)}"

                            mCityForecast04Temp.text =
                                "${forecastDailyData.list[3].temp.day.toInt().toString()}°C"
                            val instant04 = Instant.ofEpochSecond(forecastDailyData.list[3].dt)
                            val forecast04Date = instant04.atZone(zoneId).toLocalDate()
                            mCityForecast04Date.text = "${forecast04Date.format(formatter)}"

                            mCityForecast05Temp.text =
                                "${forecastDailyData.list[4].temp.day.toInt().toString()}°C"
                            val instant05 = Instant.ofEpochSecond(forecastDailyData.list[4].dt)
                            val forecast05Date = instant05.atZone(zoneId).toLocalDate()
                            mCityForecast05Date.text = "${forecast05Date.format(formatter)}"
                        }
                    }
                } else {
                    withContext(Dispatchers.Main) {
                        MaterialAlertDialogBuilder(this@MainActivity)
                            .setTitle("Trybe Clima")
                            .setMessage("Ocorreu um erro durante a requisição: ${currentWeatherDataResponse.message()}")
                            .setCancelable(false)
                            .setPositiveButton("Ok") { dialog, _ ->
                                dialog.dismiss()
                            }
                            .show()
                    }
                }
            }
        }
    }
}