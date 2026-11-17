# Luz Solidária

Site da ONG fictícia **Luz Solidária**, criado para a disciplina de **Desenvolvimento Front-End para Web** (UNICID, 2026), com o professor Paulo Fratta.

> Energia solar comunitária e gratuita para famílias rurais que a rede elétrica nunca alcançou.

## Links

| Item | Endereço |
|---|---|
| Site publicado (HTTPS) | `[COLOCAR A URL DO RAILWAY, ex: https://luz-solidaria-production.up.railway.app]` |
| Repositório no GitHub | `[COLOCAR O LINK DO REPOSITÓRIO]` |

## Objetivo

Divulgar o projeto Luz Solidária, que cria fazendas solares isoladas (off-grid) para levar energia limpa e gratuita a famílias rurais sem acesso à rede elétrica, e captar voluntários e apoiadores. O site também é um exemplo de acessibilidade para pessoas com deficiência.

## Tema

Sustentabilidade e impacto social: **energia renovável** e **inclusão** (ODS 1, 4, 7, 10 e 13).

## Equipe e divisão de funções

| Integrante | RGM | Função |
|---|---|---|
| Danilo Gomes | 04933256-2 | Pesquisa de conteúdo, dados e fontes |
| Grazielle Pinheiro Barreto | 04940761-9 | Integração do layout da página (CSS) |
| João Pedro Moreira Dias Pereira | 04906709-5 | HTML, acessibilidade, layout, slides e JavaScript |
| Lucas Moreira Lima | 04928488-6 | Código HTML das páginas |


## As 10 páginas

| Nº | Página | Conteúdo |
|---|---|---|
| 1 | `index.html` | Resumo do tema, carrossel, dado do problema, ODS e menu principal |
| 2 | `sobre.html` | História, missão, visão e valores |
| 3 | `projetos.html` | Etapas do projeto, diagrama do sistema off-grid e frentes de trabalho |
| 4 | `impacto.html` | Tabelas de resultados, antes e depois e dados do Brasil com fontes |
| 5 | `acessibilidade.html` | Recursos de acessibilidade do site e inclusão de PCD no projeto |
| 6 | `galeria.html` | 9 imagens com legendas e fontes, com ampliação |
| 7 | `midia.html` | Vídeo com transcrição, áudio e mapa em iframe |
| 8 | `noticias.html` | Notícias com filtro por categoria |
| 9 | `contato.html` | Parceria voluntária, como apoiar, formulário validado, dados fictícios e equipe |
| 10 | `orcamento_hospedagem.html` | Comparativo de 3 hospedagens e 3 domínios, custo e justificativa |

## Estrutura de pastas

```text
luz-solidaria/
├── index.html
├── sobre.html  projetos.html  impacto.html  acessibilidade.html
├── galeria.html  midia.html  noticias.html  contato.html
├── orcamento_hospedagem.html
├── css/style.css
├── js/script.js
├── img/        (imagens otimizadas, nomes em minúsculas)
├── assets/     (vídeo e áudio)
└── docs/       (esta documentação)
```

## Tecnologias

- HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- CSS3 com Flexbox, Grid e media queries (celular, tablet e computador)
- JavaScript puro: validação do formulário, `localStorage`, menu no celular, alto contraste, carrossel, galeria e filtro de notícias
- Git e GitHub para versionamento; Railway para hospedagem
- IA (Claude) como apoio, registrada no [diário de bordo](docs/diario-de-bordo.md)

## Como rodar

1. Baixe ou clone o repositório: `git clone [LINK DO REPOSITÓRIO]`
2. Abra o arquivo `index.html` no navegador. Não precisa instalar nada.
3. Para publicar: suba os arquivos para o GitHub (com o `index.html` na raiz) e conecte o repositório ao Railway. Cada push na `main` atualiza o site.

## Documentação

- [Escopo do projeto](docs/escopo.md)
- [Diário de bordo e uso de IA](docs/diario-de-bordo.md)
- [Orçamento de hospedagem e domínio](docs/orcamento.md)
- [Evidências de testes](docs/testes.md)
- [Melhorias desde o MVP](docs/melhorias-mvp.md)
