package com.betrybe.userlist.data.adapter

import android.content.DialogInterface
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import com.betrybe.userlist.R
import com.betrybe.userlist.data.model.User
import com.betrybe.userlist.ui.listener.UserItemListener
import com.betrybe.userlist.ui.views.MainActivity
import com.google.android.material.dialog.MaterialAlertDialogBuilder

class UserAdapter(private val users: List<User>):Adapter<UserAdapter.UserViewHolder>() {

    private var mainActivity:UserItemListener? = null


    class UserViewHolder(view: View, mainActivity: UserItemListener?) : ViewHolder(view) {
        val image: ImageView = view.findViewById(R.id.item_user_image)
        val name: TextView = view.findViewById(R.id.item_user_name)
        val email: TextView = view.findViewById(R.id.item_user_email)

        init {
            view.setOnClickListener {
                mainActivity?.onItemClick(view, adapterPosition)
            }
        }

    }

    fun setOnItemListener(mainActivity: UserItemListener) {
        this.mainActivity = mainActivity
    }

    override fun getItemCount(): Int  = users.size

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UserViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_user, parent, false)
        return UserViewHolder(view, mainActivity)
    }

    override fun onBindViewHolder(holder: UserViewHolder, position: Int) {
        holder.image.setImageResource(users[position].image)
        holder.name.text = users[position].name
        holder.email.text = users[position].email
    }

}