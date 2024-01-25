package com.betrybe.solarsystem.domain.planet

data class Planet(
    val id:Int,
    val name:String,
    val meanDiameter:Double,
    val surfaceArea:Double,
    val meanDensity:Double,
    val volume:Double,
    val mass:Double,
    val surfaceGravity:Double,
    val description:String,
    val photo:Int
)
