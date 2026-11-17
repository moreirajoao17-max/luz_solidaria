# Melhorias desde o MVP (1ª entrega → entrega final)

Comparação entre a versão 3 (MVP, página única) e a versão final.
Se o professor apontou outros pontos na correção da 1ª entrega, acrescente-os na tabela: `[completar]`.

## Antes e depois

| Nº | Ponto do MVP | Antes | Depois |
|---|---|---|---|
| 1 | Número de páginas | 1 página com seções e links `#` | 10 páginas HTML interligadas com o mesmo menu |
| 2 | Estrutura de pastas | Tudo em `Projeto_Sustentavel/versao3/`, CSS e JS soltos na raiz, imagens em `images/` | `index.html` na raiz e pastas `css/`, `js/`, `img/`, `assets/` e `docs/` |
| 3 | Vídeo da Mídia | Link do YouTube para a música "Never Gonna Give You Up" | Vídeo próprio de 48 s sobre o projeto, com `poster` e transcrição |
| 4 | Áudio e iframe | Não havia áudio; o iframe era o vídeo errado | `<audio controls>` com trilha e `<iframe>` com mapa da Amazônia Legal |
| 5 | Formulário | Nome, e-mail e mensagem, com aviso simples | 8 campos (incluindo `tel`, `date`, `number`, `select` e `checkbox`), mensagens de erro por campo, borda vermelha, máscara de telefone e rascunho no `localStorage` |
| 6 | Acessibilidade | Imagens da galeria com `alt=""`, sem foco visível, sem página de acessibilidade | `alt` descritivo em todas as imagens, foco visível, "Pular para o conteúdo", alto contraste, ajuste de fonte e página `acessibilidade.html` |
| 7 | Responsividade | Grades fixas de 3 e 4 colunas que quebravam no celular | Layout para celular, tablet e computador, com menu ☰ no celular |
| 8 | HTML inválido | Botão "›" solto e `</div></section>` sobrando | Todas as tags fecham corretamente |
| 9 | Links quebrados | "Parceria Voluntária" (`#parceria`) e "Conheça o projeto" (`#comoFunciona`) não levavam a lugar nenhum | Todos os links conferidos (ver [testes](testes.md)) |
| 10 | Notícias | 4 notícias genéricas com imagens externas e etiqueta "Greenpeace" | 6 notícias do tema, com imagens próprias, fontes citadas e filtro por categoria |
| 11 | Peso das imagens | Cerca de 16 MB em imagens, com arquivos repetidos | 2,6 MB no total, sem repetição |
| 12 | Textos e cabeçalho | "Lúz", "SejaUmVoluntário", "© 2024", logo com alt "EcoVida" | Textos corrigidos; logo retirado do cabeçalho e botão Menu no lugar |
| 13 | Orçamento | Não existia | Página com 3 hospedagens, 3 domínios, custo e justificativa |
| 14 | Dados com fonte | Números do projeto sem contexto | Dados reais do IEMA, IBGE e MME com links para as fontes |

## Prints

**Antes (MVP):** [prints/antes-mvp-pagina-unica.jpg](prints/antes-mvp-pagina-unica.jpg)

**Depois:** [prints/home-desktop.jpg](prints/home-desktop.jpg) e [prints/home-celular.jpg](prints/home-celular.jpg)
