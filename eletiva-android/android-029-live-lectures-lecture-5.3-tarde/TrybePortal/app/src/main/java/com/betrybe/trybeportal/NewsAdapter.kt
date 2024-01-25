package com.betrybe.trybeportal

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder

class NewsAdapter(private val newsList: List<News>):Adapter<NewsAdapter.NewsViewHolder>() {

    class NewsViewHolder(view:View): ViewHolder(view) {
        val context: Context = view.context
        val title: TextView = view.findViewById(R.id.item_news_title)
        val summary:TextView = view.findViewById(R.id.item_news_summary)
        val category: TextView = view.findViewById(R.id.item_news_category)
        val categoryColor: View = view.findViewById(R.id.item_news_category_color)
    }

    override fun getItemCount() = newsList.size

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): NewsViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_news, parent, false)
        return NewsViewHolder(view)
    }

    override fun onBindViewHolder(holder: NewsViewHolder, position: Int) {
        holder.title.text = newsList[position].title
        holder.summary.text = newsList[position].summary
        holder.category.text = newsList[position].category

        when(newsList[position].category) {
            "economia" -> holder.categoryColor.setBackgroundColor(holder.context.getColor(R.color.economy_color))
            "politica" -> holder.categoryColor.setBackgroundColor(holder.context.getColor(R.color.politic_color))
            "esportes" -> holder.categoryColor.setBackgroundColor(holder.context.getColor(R.color.sport_color))
        }

    }

}
