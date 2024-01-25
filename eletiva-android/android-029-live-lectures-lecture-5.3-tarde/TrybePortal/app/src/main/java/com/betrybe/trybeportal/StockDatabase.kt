package com.betrybe.trybeportal

object StockDatabase {

    private val stockList = listOf(
        Stock(1, "PETR4", "Petrobras", 25.80, 1.2, 1200000),
        Stock(2, "VALE3", "Vale", 92.50, -0.5, 800000),
        Stock(3, "ITUB4", "Itaú Unibanco", 32.75, 0.8, 550000),
        Stock(4, "BBDC4", "Banco Bradesco", 28.40, -0.3, 400000),
        Stock(5, "ABEV3", "Ambev", 17.90, 0.6, 700000),
        Stock(6, "BBAS3", "Banco do Brasil", 38.20, 1.5, 600000),
        Stock(7, "B3SA3", "B3", 65.10, -0.1, 300000),
        Stock(8, "WEGE3", "WEG", 120.80, 2.3, 250000),
        Stock(9, "MGLU3", "Magazine Luiza", 112.30, 0.9, 180000),
        Stock(10, "GGBR4", "Gerdau", 32.50, -1.0, 120000),
        Stock(11, "IRBR3", "IRB Brasil Resseguros", 7.60, -2.5, 95000),
        Stock(12, "SUZB3", "Suzano", 60.75, 1.8, 105000),
        Stock(13, "CIEL3", "Cielo", 3.40, 0.2, 70000),
        Stock(14, "ELET3", "Eletrobras", 45.20, -0.8, 85000),
        Stock(15, "BRML3", "BR Malls", 11.90, 0.5, 60000)
    )

    fun findAll() = stockList

    fun findById(id: Int) = stockList.find { it.id == id }

    fun findbySymbol(symbol: String) = stockList.find { it.symbol == symbol }

}