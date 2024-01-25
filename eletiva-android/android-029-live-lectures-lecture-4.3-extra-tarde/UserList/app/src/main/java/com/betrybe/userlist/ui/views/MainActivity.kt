package com.betrybe.userlist.ui.views

import android.content.DialogInterface
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.betrybe.userlist.R
import com.betrybe.userlist.data.UserDB
import com.betrybe.userlist.data.adapter.UserAdapter
import com.betrybe.userlist.ui.listener.UserItemListener
import com.google.android.material.dialog.MaterialAlertDialogBuilder


class MainActivity : AppCompatActivity(), UserItemListener {

    private val mUserList: RecyclerView by lazy { findViewById(R.id.main_rv_user_list) }

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val users = UserDB.findAll()

        val adapter = UserAdapter(users)
        adapter.setOnItemListener(this)

        mUserList.layoutManager = LinearLayoutManager(baseContext)
        mUserList.adapter = adapter

    }

    override fun onItemClick(view: View, position: Int) {
        MaterialAlertDialogBuilder(view.context)
            .setTitle("User List")
            .setMessage("Foi clicado no item $position")
            .setPositiveButton("Ok") { dialogInterface: DialogInterface, i: Int ->
                dialogInterface.dismiss()
            }
            .show()
    }
}