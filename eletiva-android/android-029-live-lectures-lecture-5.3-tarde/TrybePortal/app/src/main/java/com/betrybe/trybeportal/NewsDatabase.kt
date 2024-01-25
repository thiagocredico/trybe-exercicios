package com.betrybe.trybeportal

object NewsDatabase {

    private val newsList = listOf(
        // Notícias de Economia
        News(
            1,
            "economia",
            "Crescimento econômico global atinge níveis recordes",
            "Os mercados financeiros registram um notável crescimento, impulsionado pela recuperação econômica pós-pandemia e investimentos robustos."
        ),
        News(
            2,
            "economia",
            "Inovações tecnológicas impulsionam setores financeiros",
            "Avanços tecnológicos transformam a paisagem financeira, com empresas adotando soluções inovadoras para melhorar eficiência e segurança."
        ),
        News(
            3,
            "economia",
            "Desafios econômicos em meio a tensões comerciais globais",
            "As tensões comerciais entre grandes potências afetam os mercados, gerando preocupações sobre o impacto nas economias locais e globais."
        ),
        News(
            4,
            "economia",
            "Criptomoedas ganham destaque como alternativa de investimento",
            "O interesse crescente em criptomoedas como Bitcoin e Ethereum levanta questões sobre o papel desses ativos no cenário financeiro tradicional."
        ),
        News(
            5,
            "economia",
            "Desafios e oportunidades na era pós-COVID para pequenas empresas",
            "Pequenas empresas enfrentam desafios persistentes, mas também encontram oportunidades de inovação e adaptação no cenário pós-COVID."
        ),
        News(
            6,
            "economia",
            "Investimentos sustentáveis ​​ganham popularidade entre os investidores",
            "O interesse em investimentos socialmente responsáveis ​​cresce à medida que os investidores buscam oportunidades alinhadas com preocupações ambientais e sociais."
        ),
        // Notícias de Política
        News(
            7,
            "politica",
            "Reformas políticas visam fortalecer a democracia",
            "Novas reformas políticas são propostas e debatidas com o objetivo de fortalecer as instituições democráticas e aumentar a participação cívica."
        ),
        News(
            8,
            "politica",
            "Negociações comerciais internacionais buscam estabilidade",
            "Líderes globais buscam acordos comerciais que promovam a estabilidade econômica e reduzam as tensões geopolíticas."
        ),
        News(
            9,
            "politica",
            "Debates sobre políticas de imigração ganham destaque",
            "As políticas de imigração estão no centro dos debates políticos, com discussões sobre questões humanitárias e impactos econômicos."
        ),
        News(
            10,
            "politica",
            "Desafios ambientais impulsionam agendas políticas",
            "A preocupação com as mudanças climáticas e a sustentabilidade molda as agendas políticas, levando a propostas e ações para abordar questões ambientais."
        ),
        News(
            11,
            "politica",
            "Tendências populistas e seus impactos nas democracias",
            "O surgimento de movimentos populistas levanta questões sobre o futuro das democracias em todo o mundo, com debates sobre representatividade e participação pública."
        ),
        News(
            12,
            "politica",
            "Desafios na gestão de crises de saúde pública",
            "A gestão de crises de saúde pública continua a ser um ponto crítico nas agendas políticas, com enfoque em estratégias para prevenção e resposta a pandemias."
        ),
        News(
            13,
            "esportes",
            "Evento esportivo internacional celebra conquistas atléticas",
            "Atletas de todo o mundo se reúnem para um grande evento esportivo, destacando conquistas notáveis ​​e histórias inspiradoras."
        ),
        News(
            14,
            "esportes",
            "Novos recordes estabelecidos em competições de alto nível",
            "Atletas superam expectativas, estabelecendo novos recordes em competições esportivas de destaque, impressionando fãs e especialistas."
        ),
        News(
            15,
            "esportes",
            "Investimentos em infraestrutura esportiva impulsionam o desempenho",
            "A melhoria da infraestrutura esportiva em várias regiões do mundo contribui para o aumento do desempenho atlético e a popularidade de certas modalidades esportivas."
        ),
        News(
            16,
            "esportes",
            "Iniciativas de inclusão promovem a diversidade no esporte",
            "Esforços para promover a diversidade e inclusão no esporte são destacados, destacando a importância da representatividade e igualdade de oportunidades."
        ),
        News(
            17,
            "esportes",
            "Desafios logísticos e emocionantes momentos em eventos esportivos",
            "Eventos esportivos enfrentam desafios logísticos, mas continuam a proporcionar momentos emocionantes e inesquecíveis para os fãs."
        ),
        News(
            18,
            "esportes",
            "Impacto econômico de megaeventos esportivos em cidades-sede",
            "O impacto econômico de sediar megaeventos esportivos é analisado, destacando benefícios e desafios para as cidades anfitriãs."
        )
    )

    fun findAll() = newsList

    fun findById(id: Int) = newsList.find { it.id == id }

    fun findByCategory(category: String) = newsList.find { it.category == category }

}