# Boas-vindas ao repositório do Job Insights!

Os dados foram extraídos do site [Glassdoor](https://www.glassdoor.com.br/) e obtidos através do [Kaggle](https://www.kaggle.com/atharvap329/glassdoor-data-science-job-data), uma plataforma disponiblizando conjuntos de dados para cientistas de dados.


## Orientações

  1. Crie o ambiente virtual para o projeto

  `python3 -m venv .venv && source .venv/bin/activate`
  
  2. Instale as dependências

  `python3 -m pip install -r dev-requirements.txt`
  

## Requisitos 

### 1 - Implemente a função `read`
> **Implemente em:** src/insights/jobs.py

Para começarmos a processar os dados, devemos antes carregá-los em nossa aplicação. Esta função será responsável por abrir o arquivo CSV e retornar os dados no formato de uma lista de dicionários.

- A função deve receber um _path_ (uma string com o caminho para um arquivo).
- A função deve abrir o arquivo e ler seus conteúdos.
- A função deve tratar o arquivo como CSV.
- A função deve retornar uma lista de dicionários, onde as chaves são os cabeçalhos de cada coluna e os valores correspondem a cada linha.

<details>
  <summary>
    <b>📝 Exemplo</b>
  </summary>
  Se o conteúdo do arquivo for:
  
```
nome,cidade,telefone
Ana,Curitiba,1111111
Bernardo,Santos,999999
```

  O retorno da função deverá ser: 
  
```python
  [
    {"nome": "Ana", "cidade": "Curitiba", "telefone": "1111111"},
    {"nome": "Bernardo", "cidade": "Santos", "telefone": "999999"}
  ]
```
</details>

### 2 - Implemente a página de um job
> **Implemente em:** `src/flask_app/routes_and_views.py`

Para fechar com chave de ouro, que tal testar o quanto você consegue aprender de Flask apenas vendo como fizemos as páginas de `index` e de `jobs`, e tentar criar uma página que irá exibir todas as informações de um job em específico?

- A função deve se chamar `job`.
- A função deve ser decorada com a rota `/job/<index>`.
- A função deve receber um parâmetro `index`.
- A função deve chamar a `read` para ter uma lista com todos os jobs.
- A função deve chamar a `get_job`, declarada no arquivo `src/flask_app/more_insights.py`, para selecionar um job específico pelo `index`.
- A função deve renderizar o template `job.jinja2`, passando um parâmetro `job` contendo o job retornado pela `get_job`.

<details>
  <summary>
    <b>✍️ Teste manual</b>
  </summary>
  O comando para iniciar o flask é:

  `flask run`

  Após criar a view, cheque se, na página que lista os jobs, aparecem links para jobs específicos nos números que identificam cada job. Ao clicar em um destes links, você deve ser levado a uma página que lista todas as informações do job.
</details>


