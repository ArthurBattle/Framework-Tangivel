# Framework Tangível — Montando Sites com QR Codes

Um mini framework web que você controla com objetos físicos: cada **QR Code** é uma peça de um site. Mostrou o QR para a câmera, o framework reconhece, decide onde e como renderizar o componente e o site vai sendo montado na tela, ao vivo.

Projeto desenvolvido para o **Portas Abertas 2026 (Fatec Jundiaí)**, como demonstração prática do artigo *"Frameworks como mecanismo de reuso"*, escrito para uma das matérias do curso de Análise e Desenvolvimento de Sistemas.

## O problema que resolvi

Explicar **Inversão de Controle (IoC)** e **reuso de componentes** só com slides é abstrato demais, ainda mais para o público de uma feira, que passa pelo estande em poucos minutos.

A ideia foi tornar o conceito *tangível*: em vez de falar que "o framework chama o seu código, e não o contrário", deixar a pessoa ver isso acontecendo. Quem visita segura uma carta, aponta para a câmera e o framework é quem decide como encaixar aquela peça no site. O visitante não escreve código nenhum.

## O conceito por trás (do artigo)

O artigo que deu origem ao projeto defende dois pontos, e cada um virou uma parte do sistema:

- **Framework ≠ biblioteca:** numa biblioteca, você chama o código quando quer. Num framework, ele fornece os "encaixes" e é ele quem chama o que você colocou. Aqui, o QR Code é o "encaixe" e o framework controla a renderização (inversão de controle).
- **Reuso de componentes:** blocos independentes (cabeçalho, banner, sobre, galeria, contato, rodapé) que encapsulam estrutura e estilo e podem ser reaproveitados em vários contextos. Trocar o tema muda o resultado de todas as peças ao mesmo tempo, sem reescrever nenhuma delas.

## Como funciona

1. A **câmera** lê o QR Code em tempo real (biblioteca `jsQR`)
2. O texto do QR é interpretado por um *parser* tolerante: ignora acentos e maiúsculas, aceita separadores diferentes (`:`, `=`, `-`, `_`, `/`) e vários apelidos para a mesma coisa
3. O framework identifica o tipo da carta e decide o que fazer:
   - **Peça** (`peca:galeria`): monta o componente na posição correta da página, mesmo que as cartas sejam apresentadas fora de ordem
   - **Tema** (`tema:academia`): redesenha todas as peças já montadas no novo contexto visual
   - **Estado** (`estado:escuro`): altera o modo de visualização do site
4. O site aparece em **tela cheia**, e o **log do framework** e a **árvore de componentes** mostram o que foi montado e quantos re-renders aconteceram
5. Quando o site está pronto, um clique em **📦 Extrair Site** gera um único `.html` pronto para hospedar

### Tipos de carta

| Tipo | Exemplos de QR | O que faz |
|---|---|---|
| Peça | `peca:cabecalho`, `peca:banner`, `peca:sobre`, `peca:galeria`, `peca:contato`, `peca:rodape` | Monta o componente no site |
| Tema | `tema:banda`, `tema:lanche`, `tema:pet`, `tema:portfolio`, `tema:academia`, `tema:games` | Aplica um contexto visual e de conteúdo |
| Estado | `estado:escuro`, `estado:contraste`, `estado:mobile`, `estado:desktop` | Alterna modo escuro, alto contraste e simulação mobile/desktop |

Cada peça, tema e estado também aceita apelidos (por exemplo `header`, `hero`, `dark`, `celular`), então o QR funciona mesmo que o texto não seja exatamente o esperado.

## Funcionalidades

### Cartas de estado e interatividade
- Reconhecimento de QR Codes de modificação: `estado:escuro`, `estado:contraste`, `estado:mobile` e `estado:desktop`
- Injeção automática de botões SVG minimalistas (🌓 e 👁️) no cabeçalho do site para alternar modo escuro e alto contraste, inclusive no site já extraído

### Painel de configuração avançada de blocos (⚙️)
Cada bloco montado ganha uma engrenagem que abre um painel de personalização:
- Espaçamento interno (padding) em grade compacta: cima, baixo, esquerda e direita, sem barra de rolagem horizontal
- Alinhamento do conteúdo (esquerda, centro, direita)
- Cores de fundo, texto e botões, padronizadas para funcionar em todos os componentes
- Correção do cálculo de altura que escondia a engrenagem em blocos curtos, como "Sobre" e "Contato"

### Gerenciamento dinâmico de mídia local
- Integração com as pastas locais de imagens de cada tema (`Banda`, `Lanches`, `Pets`, `Portfolio`, `Academia`, `Jogo`), tratando nomes com espaços via `encodeURI`, com regras de fallback
- Seletor visual de **miniaturas roláveis e clicáveis** dentro do painel, no lugar de campos de texto para URLs
- **Galeria dinâmica:** é possível adicionar quantos itens quiser ou excluir os indesejados (🗑️) na hora

### Personalização exclusiva do cabeçalho
- Checkbox para ocultar o menu de navegação padrão imposto pelo tema
- Campo livre para criar novos links de navegação, separados por vírgula

### Temas e motor responsivo
- **Academia:** estética *brutalista* (fundo preto profundo, verde neon agressivo, tipografia pesada em itálico e botões com corte chanfrado)
- **Games:** estética *cyberpunk/synthwave* (fundo com scanlines, bordas brilhantes, glassmorphism e tipografia monoespaçada)
- Migração de `@media` queries para **`@container` queries**: a visualização mobile do simulador empilha os blocos de verdade, sem precisar redimensionar a janela do navegador
- Botão invisível de acesso à "Central" realocado para o canto inferior esquerdo

### Motor de compilação e exportação
- Botão **📦 Extrair Site** (verde, em destaque na raiz da Central)
- O framework junta toda a árvore de componentes instanciada, embute o CSS reativo e injeta os scripts de interação em **um único `.html` autossuficiente**, pronto para hospedagem

### Outros recursos
- Câmera flutuante, arrastável e minimizável
- Painéis **Central** e **Log** que aparecem ao passar o mouse e podem ser reposicionados (a posição fica salva no navegador)
- **Navegação interna** entre páginas do site (início, serviços, contato etc. conforme o tema)
- Visualização do código gerado (HTML e CSS) com opção de copiar ou baixar
- Personalizador de cores por seleção direta do elemento na tela

## Tecnologias e bibliotecas usadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da aplicação e do site gerado |
| CSS3 (`@container`, variáveis, `clip-path`) | Temas, responsividade por contêiner e efeitos visuais |
| JavaScript (vanilla) | Todo o framework: parser de QR, renderização, estado, exportação |
| `jsQR` (via CDN) | Leitura de QR Codes a partir da câmera |
| `getUserMedia` (Web API) | Acesso à câmera do dispositivo |
| `localStorage` | Persistência da posição dos botões da interface |
| `MutationObserver`, `Blob`, `Clipboard API` | Reatividade do personalizador, download e cópia de código |

## Estrutura do projeto

```
teste.html           → página principal: interface da Central, Log, câmera e modal de código
portas_abertas.js    → o "framework": componentes, temas, parser de QR, renderização e exportação
portas_abertas.css   → estilos base, temas e regras responsivas com @container
qr-codes/            → imagens dos QR Codes das cartas, prontas para imprimir e escanear
imagens-framework/   → imagens padrão dos temas (pastas Banda, Lanches, Pets, Portfolio, Academia e Jogo)
```

> Os nomes das pastas `qr-codes/` e `imagens-framework/` são ilustrativos: ajuste para os nomes reais do repositório.

## Desafios técnicos que resolvi

- **QR Codes imperfeitos:** o texto lido pela câmera nem sempre vem limpo. Criei um parser que normaliza acentos e caixa, aceita vários separadores e apelidos, e até tenta reconhecer o conteúdo mesmo sem prefixo.
- **Ordem das peças:** o visitante pode mostrar as cartas em qualquer ordem. O framework mantém uma ordem fixa de componentes e insere cada peça no lugar certo, tomando como referência a próxima peça já montada.
- **Responsividade simulada:** `@media` queries dependem da largura da janela, então não dá para "ver o mobile" dentro do próprio simulador. A solução foi migrar para `@container` queries, que reagem à largura do contêiner do site.
- **Botão de engrenagem sumindo:** blocos curtos ("Sobre", "Contato") escondiam o gatilho por um erro no cálculo de altura. Corrigido no cálculo de altura usado para posicionar o gatilho.
- **Imagens locais com espaços no nome:** nomes de arquivo com espaços quebravam o carregamento. Resolvido com `encodeURI` e regras de fallback.
- **Exportar um site que funcione sozinho:** o site gerado não pode depender do framework. O botão de extração empacota HTML, CSS e os scripts mínimos de interação (modo escuro e contraste) em um só arquivo.

## Como rodar

1. Baixe ou clone o repositório e mantenha na mesma pasta `teste.html`, `portas_abertas.css`, `portas_abertas.js` e a pasta `imagens-framework/`.
2. A câmera só funciona em **`localhost` ou HTTPS**, então abrir o arquivo com duplo clique pode bloquear o acesso. Sirva a pasta com um servidor local, por exemplo:

```bash
python -m http.server 8000
```

3. Acesse `http://localhost:8000/teste.html` e permita o uso da câmera.
4. Aponte os QR Codes para a câmera (veja a tabela de [tipos de carta](#tipos-de-carta)). Passe o mouse pelos cantos da tela para abrir **⚙️ Central**, **📋 Log** e o botão de tema.
5. Quando estiver satisfeito com o resultado, use **📦 Extrair Site** para baixar o `.html` final.

> **Dica:** as imagens dos QR Codes das cartas ficam na pasta de QR Codes do repositório. Para criar novas cartas, use qualquer gerador gratuito com os textos da tabela (por exemplo `tema:games`).

## Demonstração

<!-- Adicione aqui prints ou vídeos do projeto funcionando -->

## Contexto acadêmico

Projeto apresentado no **Portas Abertas 2026** da **Fatec Jundiaí**, no curso de Tecnologia em Análise e Desenvolvimento de Sistemas, baseado no artigo *"Frameworks como mecanismo de reuso"*.

**Autores do artigo:** André Felipe Rosa da Silva, Arthur Piovesan Fonseca, Enzo Biason Manha
**Orientação:** Profa. Adani Cusin Sacilotti

## Nota

Parte da evolução recente do projeto (cartas de estado, painel de configuração de blocos, mídia local, temas Academia e Games, `@container` queries e exportação) foi desenvolvida com auxílio de IA (Gemini).

---

Projeto desenvolvido para tornar visível um conceito abstrato de engenharia de software, combinando inversão de controle, reuso de componentes, visão computacional no navegador e geração de código.
