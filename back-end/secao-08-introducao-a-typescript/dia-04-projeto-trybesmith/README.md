# Trybe Cast

Após a implementação da API Rest para a plataforma de podcast `Trybe Cast`, a equipe de desenvolvimento recebeu a solicitação de implementar testes de integração e unitários para a rota de login, assim como solicitaram que a senha seja criptografada. A ideia é garantir que a autenticação de pessoas apresentadoras seja realizada de forma segura e eficiente.

## Funcionalidades

- Realizar testes de integração para a rota de login;
- Realizar testes unitários para as camadas de Controller e Service na rota de login;
- Utilizar criptografia ao trabalhar com senha.

## Especificações

- A autenticação falhe ao não enviar um email ou senha;
- A autenticação falhe com email ou senha inválidos;
- A autenticação seja realizada corretamente com email e senha válidos;
- A API retorne um token de autenticação válido para as pessoas apresentadoras autenticadas.
