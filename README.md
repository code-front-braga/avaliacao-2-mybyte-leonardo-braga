# MyByte Test 2

Teste 2 do MyByte que se refere a cálculos financeiros.

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd mybyte-test-2

# Instale as dependências
pnpm install
```

## 🚀 Como usar

```bash
# Executar em modo de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Executar testes
Individual:
pnpm simple-interest-test
pnpm compound-interest-test

Juntamente:
pnpm test
```

## 📊 Fórmulas

### Juros Simples
```
J = C × i × t
M = C + J
```

### Juros Compostos
```
M = C × (1 + i)^t
J = M - C
```

### Valor Presente
```
P = F / (1 + i)^t
```

Onde:
- **C** = Capital inicial
- **i** = Taxa de juros
- **t** = Tempo
- **J** = Juros
- **M** = Montante
- **P** = Valor Presente
- **F** = Valor Futuro

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
├── helpers/            # Funções utilitárias
└── tests/             # Arquivos de teste
```

## ❗Observações:
- Foram adicionados dois botões, um para exibir os resultados de juros simples e outro para exibir os resultados dos juros compostos.
- Foi necessário instalar o tsx para executar os testes.
