# Reeveew Frontend

Frontend em React, TypeScript e Vite para a plataforma Reeveew.

## Desenvolvimento

```bash
npm install
npm run dev
```

Crie um arquivo `.env` a partir de `.env.example` e configure `VITE_API_URL`.

## Scripts

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: verificacao TypeScript e build de producao
- `npm run lint`: lint do projeto
- `npm run test`: testes automatizados
- `npm run preview`: preview do build

## Estrutura

- `src/app`: composicao raiz da aplicacao
- `src/components/ui`: componentes reutilizaveis
- `src/features`: modulos de negocio
- `src/layouts`: layouts compartilhados
- `src/lib`: clientes e utilitarios
- `src/pages`: paginas globais
- `src/types`: tipos globais
