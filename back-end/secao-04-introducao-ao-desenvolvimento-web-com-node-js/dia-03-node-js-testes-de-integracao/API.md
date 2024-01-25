### **GET** _`/chocolates`_

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: `200 - OK`;
- Body (exemplo):

```json
[
  { "id": 1, "name": "Mint Intense", "brandId": 1 },
  { "id": 2, "name": "White Coconut", "brandId": 1 },
  { "id": 3, "name": "Mon Chéri", "brandId": 2 },
  { "id": 4, "name": "Mounds", "brandId": 3 }
]
```

### **GET** _`/chocolates/:id`_

- Objetivo: Buscar um chocolate específico pelo ID.
- Código HTTP: `200 - OK`;
- Body (exemplo):

```json
{
  "id": 4,
  "name": "Mounds",
  "brandId": 3
}
```

### **GET** _`/chocolates/brand/:brandId`_

- Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
- Código HTTP: `200 - OK`;
- Body (exemplo):

```json
[
  {
    "id": 1,
    "name": "Mint Intense",
    "brandId": 1
  },
  {
    "id": 2,
    "name": "White Coconut",
    "brandId": 1
  }
]
```

### **POST** _`/chocolates`_

- Objetivo: Adicionar chocolate aos dados.

- Body requisição (exemplo):

```json
{
  "name": "Mint NOT So Intense",
  "brandId": 2
}
```

- Código HTTP: `201 - CREATE`;
- Body da resposta (exemplo):

```json
{
  "chocolate": {
    "id": 5,
    "name": "Mint NOT So Intense",
    "brandId": 2
  }
}
```

### **DELETE** _`/chocolates/:id`_

- Objetivo: Deletar chocolate dos dados.

- Chocolate existe

  - Código HTTP: `204 - NOT CONTENT`;
  - Body da resposta (exemplo):

  ```json

  ```

- Chocolate Não existe

  - Código HTTP: `404 - NOT FOUND`;
  - Body da resposta (exemplo):

  ```json
  {
    "message": "Chocolate not found"
  }
  ```
