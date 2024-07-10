# VSCode
### Extensões
- ESLint
- Prisma

### Configurações
- `settings.json`
  - ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
    "[prisma]": {
        "editor.formatOnSave": true
    },
    ```

# Packages
- TypeScript
  `npm i typescript @types/node -D`
- npx
  `npm i tsx -D`
- Fastify
  `npm i fastify`
- Prisma 
  `npm i prisma -D`
- Zod + Plugin para o fastify -> Validação de dados
  `npm i zod`
  `npm i fastify-type-provider-zod`
- dayjs -> Datas
  `npm i dayjs`
- nodemailer -> Envio de emails
  `npm i nodemailer`

# Prisma 
- Configurar o banco de dados a ser usado
  `npx prisma init --datasource-provider SQLite`
- Criação de tabelas
  ```prisma
    model TabelaNome {
      id String @id @default(uuid())
      
      @@map("nome_costumizado")
    }
  ```
  - No terminal: `npx prisma migrate dev`
- Visualizar o banco de dados
  `npx prisma studio`
- Transaction -> Forma de executar mais de uma ação no banco de dados e, se uma delas falhar, todas as que já executaram são desfeitas
  - Poderia ser usada em `create-trip.ts` na entrada de uma `trip` e `participant` no banco de dados
  - `await prisma.$transaction(tx => {/* Inserir "transações" aqui */})`

# Zod
```typescript
  app.withTypeProvider<ZodTypeProvider>().get('/route', {
    schema: {
      // Filtros de validação aqui
    }
  }, () => {})
```

# Nodemailer
- mailtrap.io
  - Cria um servidor SMTP fake
  - Para testes -> O email não é realmente enviado
- Nodemailer tem um "mailtrap" próprio
  - Criar um servidor de email fake
    `const account = await nodemailer.createTestAccount()`

# Fastify
- Plugin para configurar o acesso às rotas
  `npm i @fastify/cors`
  ```typescript
  app.register(cors, {
    origin: '*',
  })
  ```


# Where did I stop?
- Aula 2 - 08:15
