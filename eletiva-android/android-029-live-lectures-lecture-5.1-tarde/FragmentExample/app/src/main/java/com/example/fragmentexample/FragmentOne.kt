package com.example.fragmentexample

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.google.android.material.textfield.TextInputEditText

class FragmentOne: Fragment() {

    private lateinit var mTextField: TextInputEditText
    private lateinit var mButton: Button
    private lateinit var mTextView: TextView

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val view = inflater.inflate(R.layout.fragment_one, container, false)

        mTextField = view.findViewById(R.id.fragment_one_input_text)
        mButton = view.findViewById(R.id.fragment_one_button)
        mTextView = view.findViewById(R.id.fragment_one_text_view)


        mButton.setOnClickListener {
            mTextView.text = mTextField.text
        }

        return view
    }

}