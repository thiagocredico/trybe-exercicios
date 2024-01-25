package com.betrybe.trybeclima.ui.views

import android.content.Context
import android.inputmethodservice.InputMethodService
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.inputmethod.InputMethodManager
import android.widget.TextView
import com.betrybe.trybeclima.R
import com.betrybe.trybeclima.data.api.OpenWeatherServiceClient
import com.betrybe.trybeclima.data.api.model.CurrentWeatherData
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withContext
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainActivity : AppCompatActivity() {

    private val mTextInputLayout: TextInputLayout by lazy { findViewById(R.id.main_text_input_layout) }
    private val mTextField: TextInputEditText by lazy { findViewById(R.id.main_text_field) }
    private val mCityName: TextView by lazy { findViewById(R.id.main_tv_city_name) }
    private val mCityTemp: TextView by lazy { findViewById(R.id.main_tv_city_temp) }
    private val mCityMaxTemp: TextView by lazy { findViewById(R.id.main_tv_city_max_temp) }
    private val mCityMinTemp: TextView by lazy { findViewById(R.id.main_tv_city_min_temp) }
    private val mCityFeelsTemp: TextView by lazy { findViewById(R.id.main_tv_city_feels_temp) }
    private val mCityHumidity: TextView by lazy { findViewById(R.id.main_tv_city_humidity) }

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

        mTextInputLayout.setEndIconOnClickListener {

            val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
            imm.hideSoftInputFromWindow(mCityName.windowToken, 0)

            val cityName = mTextField.text.toString()


            CoroutineScope(Dispatchers.IO).launch {

                val responseCurrentWeatherData = mOpenWeatherService
                    .getCurrentWeatherData(OpenWeatherServiceClient.API_KEY, cityName)
                if (responseCurrentWeatherData.isSuccessful) {
                    withContext(Dispatchers.Main) {
                        val currentWeatherData = responseCurrentWeatherData.body()!!
                        mCityName.text = currentWeatherData.name
                        mCityTemp.text = "${currentWeatherData.main.temp}°C"
                        mCityMaxTemp.text = "${currentWeatherData.main.tempMax}°C"
                        mCityMinTemp.text = "${currentWeatherData.main.tempMin}°C"
                        mCityFeelsTemp.text = "${currentWeatherData.main.feelsLike}°C"
                        mCityHumidity.text = "${currentWeatherData.main.humidity}%"
                    }
                }
            }

//            val callCurrentWeatherData = mOpenWeatherService.getCurrentWeatherData(
//                OpenWeatherServiceClient.API_KEY,
//                cityName
//            )
//
//            callCurrentWeatherData.enqueue(object : Callback<CurrentWeatherData> {
//                override fun onResponse(
//                    call: Call<CurrentWeatherData>,
//                    response: Response<CurrentWeatherData>
//                ) {
//                    if (response.isSuccessful) {
//                        val currentWeatherData = response.body()
//                        if (currentWeatherData != null) {
//                            mCityName.text = currentWeatherData.name
//                            mCityTemp.text = "${currentWeatherData.main.temp}°C"
//                            mCityMaxTemp.text = "${currentWeatherData.main.tempMax}°C"
//                            mCityMinTemp.text = "${currentWeatherData.main.tempMin}°C"
//                            mCityFeelsTemp.text = "${currentWeatherData.main.feelsLike}°C"
//                            mCityHumidity.text = "${currentWeatherData.main.humidity}%"
//                        }
//                    } else {
//                        MaterialAlertDialogBuilder(this@MainActivity)
//                            .setTitle("Trybe Clima")
//                            .setMessage("Ocorreu um erro durante a requisição: ${response.message()}")
//                            .setCancelable(false)
//                            .setPositiveButton("Ok") { dialog, _ ->
//                                dialog.dismiss()
//                            }
//                            .show()
//                    }
//                }
//
//                override fun onFailure(call: Call<CurrentWeatherData>, t: Throwable) {
//                    Log.e("Trybe Clima", "Ocorreu um erro durante a requisição: ${t.message}")
//                }
//            })

        }

    }

}