from fastapi import FastAPI
from src.ecommerce import Customer

app = FastAPI()

customers = Customer.load_customers_from_json("data/customers.json")


@app.get("/")
async def root():
    return {"message": "Hello World API T29"}


@app.get("/customers/")
async def get_customers(customer_id: int):
    return customers


@app.get("/customers/{customer_id}")
async def get_customer(customer_id: int):
    return customers[customer_id - 1]


# Comando para rodar o servidor: uvicorn api:app --reload
# por padrão utiliza a porta 8000
