package com.betrybe.trybeclima.ui.views

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.inputmethod.InputMethodManager
import android.widget.TextView
import androidx.activity.viewModels
import androidx.constraintlayout.widget.ConstraintLayout
import com.betrybe.trybeclima.R
import com.betrybe.trybeclima.data.api.OpenWeatherServiceClient
import com.betrybe.trybeclima.databinding.ActivityMainBinding
import com.betrybe.trybeclima.ui.viewmodel.MainActivityViewModel
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

    private lateinit var binding: ActivityMainBinding
    private val viewModel: MainActivityViewModel by viewModels()

    private val mOpenWeatherService = OpenWeatherServiceClient.instance

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        updateUI()

        binding.mainTextInputLayout.setEndIconOnClickListener {
            val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
            imm.hideSoftInputFromWindow(binding.mainTvCityName.windowToken, 0)
            val cityName = binding.mainTextField.text.toString()
            viewModel.getWeatherData(cityName)
            updateUI()
        }
    }

    private fun updateUI() {
        binding.mainTvCityName.text = viewModel.cityName
        binding.mainTvCityTemp.text = viewModel.temp.toString()
        binding.mainTvCityMaxTemp.text = viewModel.maxTemp.toString()
        binding.mainTvCityMinTemp.text = viewModel.minTemp.toString()
        binding.mainTvCityFeelsTemp.text = viewModel.feelsTemp.toString()
        binding.mainTvCityHumidity.text = viewModel.humidity.toString()
        binding.mainClForecast.visibility =
            if (viewModel.isForecastContainerVisible) View.VISIBLE else View.INVISIBLE

        binding.mainTvForecast01Temp.text = viewModel.forecast01Temp.toString()
        binding.mainTvForecast01Date.text = viewModel.forecast01Date

        binding.mainTvForecast02Temp.text = viewModel.forecast02Temp.toString()
        binding.mainTvForecast02Date.text = viewModel.forecast02Date

        binding.mainTvForecast03Temp.text = viewModel.forecast03Temp.toString()
        binding.mainTvForecast03Date.text = viewModel.forecast03Date

        binding.mainTvForecast04Temp.text = viewModel.forecast04Temp.toString()
        binding.mainTvForecast04Date.text = viewModel.forecast04Date

        binding.mainTvForecast05Temp.text = viewModel.forecast05Temp.toString()
        binding.mainTvForecast05Date.text = viewModel.forecast05Date
    }
}