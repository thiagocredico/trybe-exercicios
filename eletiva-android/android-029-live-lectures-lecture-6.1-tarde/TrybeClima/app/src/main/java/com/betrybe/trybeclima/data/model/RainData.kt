package com.betrybe.trybeclima.data.model

import android.renderscript.Double4
import com.google.gson.annotations.SerializedName

data class RainData (
    @SerializedName("1h")
    val oneHour: Double,
    @SerializedName("3h")
    val threeHour: Double
)
