# 🚀 NLW Journey - Backend
Bem-vindo(a) ao backend do _plann.er_, um projeto desenvolvido durante o evento NLW Journey da [Rocketseat](https://app.rocketseat.com.br/)!

Esta aplicação é focada no gerenciamento de viagens, permitindo organizar participantes e atividades de forma prática e eficiente.

# 🛠 Tecnologias Utilizadas
As principais tecnologias usadas no projeto incluem:

- __Node.js__ e __TypeScript__ - Linguagem e ambiente de execução
- __Express__ - Framework para criação de APIs REST
- __Prisma__ - ORM para interações com o banco de dados SQLite
- __Day.js__ - Biblioteca para manipulação de datas
- __Nodemailer__ - Envio de e-mails

# 📁 Estrutura do Projeto
O backend está organizado da seguinte forma:

- `prisma/` - Esquema do banco de dados e migrações
- `src/` - Código fonte do projeto
  - `routes/` - Define as rotas da aplicação
  - `lib/` - Contém as configurações do Prisma e utilitários
  - `errors/` - Manipulação de erros

# ⚙️ Configuração e Instalação
### Pré-requisitos
- __Node.js__ (versão recomendada: 14 ou superior)
- __SQLite__ (já incluído no projeto via Prisma)
### Passos para instalação
1. Clone o repositório:

```bash
git clone https://github.com/albert-rafa/nlw-journey.git
cd nlw-journey/backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.

4. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev
```

# ▶️ Executando o Projeto
Para rodar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

O backend estará disponível em `http://localhost:3000`.

# 📌 Endpoints Disponíveis
Aqui está uma visão geral dos principais endpoints:

- `POST /create-trip` - Criação de nova viagem
- `GET /get-trip-details` - Detalhes de uma viagem específica
- `POST /create-activity` - Adicionar atividade a uma viagem
- `GET /get-participants` - Listagem de participantes
Nota: Detalhes completos sobre as rotas estão no arquivo routes.http.

# 📜 Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).