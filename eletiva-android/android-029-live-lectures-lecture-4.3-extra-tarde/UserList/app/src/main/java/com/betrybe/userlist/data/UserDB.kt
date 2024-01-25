package com.betrybe.userlist.data

import com.betrybe.userlist.R
import com.betrybe.userlist.data.model.User

object UserDB {

    private val users = listOf(
        User(1, "Tara Ellis", "tara.ellis@example.com", "(910) 380-8571", R.drawable.u01),
        User(2, "Ted Miles", "ted.miles@example.com", "(323) 200-2431", R.drawable.u02),
        User(3, "Patrick Duncan", "patrick.duncan@example.com", "(787) 572-7484", R.drawable.u03),
        User(4, "Lisa Clark", "lisa.clark@example.com", "(548) 782-3253", R.drawable.u04),
        User(5, "Georgia Neal", "georgia.neal@example.com", "(953) 626-2484", R.drawable.u05),
        User(6, "Vivan Hernandez", "vivan.hernandez@example.com", "(803) 365-145", R.drawable.u06),
        User(7, "Ken Matthews", "ken.matthews@example.com", "(548) 471-2463", R.drawable.u07),
        User(8, "Leroy Perez", "leroy.perez@example.com", "(428) 943-6680", R.drawable.u08),
        User(9, "Eugene Ward", "eugene.ward@example.com", "(299) 321-1360", R.drawable.u09),
        User(10, "Juanita Fox", "juanita.fox@example.com", "(442) 307-6193", R.drawable.u10),
        User(11, "Catherine Diaz", "catherine.diaz@example.com", "(766) 690-5304", R.drawable.u11),
        User(12, "Steve Ward", "steve.ward@example.com", "(214) 671-5425", R.drawable.u12),
        User(13, "Virgil Reid", "virgil.reid@example.com", "(514) 466-7285", R.drawable.u13),
        User(14, "Amanda Sanchez", "amanda.sanchez@example.com", "(406) 778-0507", R.drawable.u14),
        User(15, "Rodney Hanson", "rodney.hanson@example.com", "(570) 966-1396", R.drawable.u15),
    )

    fun findAll(): List<User> = users

    fun findById(id: Int): User? = users.find { it.id == id }

}