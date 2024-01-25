# Use uma imagem base leve
FROM python:3.8-slim

# Crie um diretório de trabalho
WORKDIR /app

# Copie um arquivo index.html (apenas para exemplo)
COPY index.html .

# Exponha a porta 8000
EXPOSE 8000

# Comando para iniciar o servidor HTTP
CMD ["python", "-m", "http.server", "8000"]
