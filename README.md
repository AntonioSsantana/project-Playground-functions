# Projeto Playground Function

Este é um projeto que envolve a resolução de problemas de lógica utilizando javaScript.

## Dependências

O projeto utiliza as seguintes dependências:

- "jest": "26.1.0"
- "eslint": "6.8.0"
- "eslint-config-airbnb": "18.2.0"
- "eslint-plugin-editorconfig": "2.1.3"
- "eslint-plugin-import": "2.22.1"
- "eslint-plugin-sonarjs": "0.5.0"
- "eslint-config-trybe-fundamentals": "1.1.0"

```json
  "devDependencies": {
    "jest": "26.1.0",
    "eslint": "6.8.0",
    "eslint-config-airbnb": "18.2.0",
    "eslint-plugin-editorconfig": "2.1.3",
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-sonarjs": "0.5.0"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `test`: Executa os testes utilizando o Jest.
- `lint`: Executa a verificação de linting utilizando o ESLint.

```json
 "scripts": {
    "test": "jest",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js, .jsx"
  }
```

## Como Utilizar

1. Clone o repositório em sua máquina local.
2. Instale as dependências do projeto utilizando o comando `npm install`.
3. Execute os testes utilizando o comando `npm test`.
4. Verifique o linting do código utilizando o comando `npm run lint`.
