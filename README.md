# Sistema de Consulta de Produtos - Documentação

## Descrição
Sistema web desenvolvido em React para consulta de produtos através de upload de planilhas Excel. Permite busca por múltiplos campos e exibição detalhada dos resultados.

## Funcionalidades Implementadas

### 1. Upload de Arquivo Excel
- Suporte para arquivos .xlsx e .xls
- Processamento automático dos dados
- Validação e tratamento de erros
- Indicador visual do arquivo carregado

### 2. Sistema de Busca
- Busca por múltiplos campos: código, descrição, quantidade, grupo, marca
- Busca parcial por palavras (como solicitado)
- Busca em tempo real
- Botão de limpar filtros

### 3. Exibição de Resultados
- Cards responsivos para cada produto
- Exibição de todas as informações: descrição, código, quantidade, grupo, marca, voltagem, corrente, tamanho, peso
- Layout adaptável para desktop e mobile
- Estados visuais para diferentes situações (sem dados, sem resultados, etc.)

### 4. Interface Moderna
- Design responsivo com Tailwind CSS
- Componentes UI profissionais (shadcn/ui)
- Ícones Lucide React
- Gradientes e efeitos visuais
- Hover states e transições suaves

## Estrutura dos Dados
A aplicação espera planilhas Excel com as seguintes colunas:
- `codigo`: Código do produto
- `descricao`: Descrição do produto
- `quantidade`: Quantidade em estoque
- `grupo`: Grupo/categoria do produto
- `marca`: Marca do produto
- `voltagem`: Voltagem do produto
- `corrente`: Corrente elétrica
- `tamanho`: Tamanho do produto
- `peso`: Peso do produto

## Tecnologias Utilizadas
- React 19.1.0
- Vite (bundler)
- Tailwind CSS (estilização)
- shadcn/ui (componentes)
- Lucide React (ícones)
- xlsx (processamento Excel)
- pnpm (gerenciador de pacotes)

## Como Usar

### 1. Upload de Dados
- Clique no campo de upload e selecione um arquivo Excel
- Ou use o botão "Carregar Dados de Exemplo" para testar

### 2. Buscar Produtos
- Digite no campo de busca (código, descrição, etc.)
- Clique em "Buscar" ou pressione Enter
- Use "Limpar" para remover filtros

### 3. Visualizar Resultados
- Os produtos são exibidos em cards
- Todas as informações são mostradas de forma organizada
- Layout responsivo para diferentes dispositivos

## Preparação para Deploy

### Configuração Atual
- Aplicação pronta para deploy
- Código otimizado para produção
- Responsiva para todos os dispositivos

### Para Deploy Futuro (como solicitado)
A aplicação está preparada para ser colocada em um domínio. Para ativar o deploy:

1. **Build de Produção:**
   ```bash
   pnpm run build
   ```

2. **Deploy Estático:**
   - A pasta `dist/` contém os arquivos para deploy
   - Pode ser hospedada em qualquer servidor web
   - Compatível com Netlify, Vercel, GitHub Pages, etc.

3. **Configurações de Servidor:**
   - Não requer backend
   - Funciona totalmente no frontend
   - Processamento de Excel feito no browser

## Arquivos Principais
- `src/App.jsx`: Componente principal da aplicação
- `src/App.css`: Estilos customizados
- `index.html`: Página HTML principal
- `package.json`: Dependências e scripts

## Comandos Úteis
- `pnpm run dev`: Iniciar servidor de desenvolvimento
- `pnpm run build`: Gerar build de produção
- `pnpm run preview`: Visualizar build de produção

## Observações
- Aplicação funciona offline após carregamento inicial
- Dados ficam apenas na memória do browser (não são salvos)
- Suporte completo para arquivos Excel padrão
- Interface intuitiva e fácil de usar

