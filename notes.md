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
  `npx prisma init --datasource-provider SQLite`

# Prisma 
- Criação de tabelas
  ```prisma
    model TabelaNome {
      id String @id @default(uuid())
      
      @@map("nome_costumizado")
    }
  ```
  - No terminal: `npx prisma migrate dev`