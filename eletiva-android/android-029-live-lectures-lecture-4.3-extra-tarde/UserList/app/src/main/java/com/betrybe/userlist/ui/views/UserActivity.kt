package com.betrybe.userlist.ui.views

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.betrybe.userlist.R

class UserActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user)
    }
}