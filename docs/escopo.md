# Escopo do Projeto — Site Luz Solidária

## 1. Identificação

| Item | Descrição |
|---|---|
| Nome da equipe | `[nome da equipe]` |
| Nome do projeto/site | Luz Solidária |
| Integrantes | Danilo Gomes; Grazielle Pinheiro Barreto; João Pedro Moreira Dias Pereira; Lucas Moreira Lima |
| Data | 16/11/2026 |
| Professor / disciplina | Prof. Paulo Fratta — Desenvolvimento Front-End para Web (UNICID) |

## 2. Contexto e justificativa

- **Problema:** cerca de 990 mil brasileiros viviam sem energia elétrica na Amazônia Legal, segundo o IEMA. Mesmo com 99,8% dos domicílios do país atendidos (IBGE, Censo 2022), comunidades isoladas continuam usando lampião ou geradores a diesel.
- **Relevância:** sem energia não há geladeira, estudo à noite, celular carregado nem segurança. Em julho de 2024, 993 escolas e 217 unidades de saúde de regiões remotas da Amazônia Legal ainda estavam sem energia (MME, via Idec).
- **Relação com sustentabilidade e impacto social:** o projeto troca diesel e querosene por energia solar (ambiental) e leva um serviço básico a famílias excluídas, com prioridade para pessoas com deficiência (social).

## 3. Objetivos

**Geral:** divulgar o projeto Luz Solidária e captar voluntários e apoiadores, com um site acessível para todas as pessoas.

**Específicos (mensuráveis):**
1. Publicar 10 páginas interligadas, sem links quebrados.
2. Oferecer um formulário de voluntariado validado com JavaScript, que guarda o rascunho no navegador.
3. Atender a acessibilidade WCAG 2.2 nível AA: alto contraste, ajuste de fonte, navegação por teclado e texto alternativo em 100% das imagens.
4. Apresentar pelo menos 4 dados reais com fonte citada sobre acesso à energia no Brasil.
5. Manter o site leve: todas as imagens juntas com menos de 3 MB.

## 4. Público-alvo

- **Voluntários:** estudantes e profissionais de 16 a 60 anos, principalmente das áreas de elétrica, engenharia e TI.
- **Empresas e doadores** interessados em responsabilidade social.
- **Famílias e comunidades rurais** que querem conhecer o projeto.
- **Pessoas com deficiência (público prioritário):** pessoas cegas ou com baixa visão (leitor de tela, contraste, fonte maior), pessoas com deficiência motora (teclado) e pessoas surdas (conteúdo do vídeo em texto e transcrição).
- **Localização:** Brasil, com foco em quem acessa pelo celular.

## 5. Escopo funcional

| Página | Função |
|---|---|
| index.html | Apresentação, carrossel, problema, ODS e menu principal |
| sobre.html | História, missão, visão e valores |
| projetos.html | Etapas, diagrama do sistema e frentes de trabalho |
| impacto.html | Tabelas de resultados e dados do Brasil |
| acessibilidade.html | Recursos de acessibilidade e inclusão de PCD |
| galeria.html | Imagens com legenda, fonte e ampliação |
| midia.html | Vídeo, áudio e iframe (mapa) |
| noticias.html | Notícias com filtro por categoria |
| contato.html | Parceria voluntária, apoio, formulário validado, dados fictícios e equipe |
| orcamento_hospedagem.html | Comparativo de hospedagem e domínio |

Além disso: menu principal igual em todas as páginas, menu de celular, barra de acessibilidade e rodapé com contato.

## 6. Escopo não funcional

- **Acessibilidade:** `alt` descritivo, contraste AA, foco visível, link "Pular para o conteúdo", ARIA nos componentes (menu, carrossel, filtros, formulário), `lang="pt-BR"`.
- **Sustentabilidade:** conteúdo educativo sobre energia limpa; imagens otimizadas (de cerca de 16 MB para 2,6 MB); hospedagem verificada no Green Web Foundation antes de contratar.
- **Responsividade:** layouts para celular (até 620 px), tablet (até 900 px) e computador.
- **Desempenho:** imagens comprimidas, carregamento sob demanda (`loading="lazy"`), um único arquivo CSS e um único JS.
- **SEO básico:** `title` e `meta description` próprios em cada página e títulos em ordem (h1 → h2 → h3).

## 7. Mapa do site

```text
index.html (Início)
├── sobre.html
├── projetos.html
├── impacto.html
├── acessibilidade.html
├── galeria.html
├── midia.html
├── noticias.html
├── contato.html  ← botões "Seja voluntário" de todas as páginas levam para cá (#parceria)
└── orcamento_hospedagem.html
```

Todas as páginas têm o mesmo menu, então de qualquer página é possível ir para qualquer outra com um clique.

## 8. Conteúdo e identidade visual

- **Tom de voz:** acolhedor, direto e esperançoso, em linguagem simples.
- **Cores:** verde `#1a6b2f` (natureza e energia limpa), verde-escuro `#0f4a20`, amarelo `#ffcc00` (sol e destaque dos botões), branco e cinza-claro.
- **Tipografia:** Inter (Google Fonts), com Arial como reserva.
- **Logotipo:** globo cercado de folhas com o nome "Luz Solidária".
- **Fontes:** dados reais com fonte citada na página; imagens do acervo da equipe (ilustrativas); vídeo e trilha produzidos para o projeto.

## 9. Tecnologias e ferramentas

HTML5, CSS3, JavaScript; VS Code; Git e GitHub; Railway; W3C Markup Validation Service; Lighthouse (Chrome DevTools); IA (Claude) como apoio, registrada no diário de bordo.

## 10. Cronograma e divisão de tarefas

| Etapa | Data | Responsável |
|---|---|---|
| Escopo e planejamento | `[data]` | `[nome]` |
| Pesquisa de conteúdo, dados e fontes | `[data]` | Danilo Gomes |
| Páginas HTML | `[data]` | Lucas Moreira Lima e João Pedro Moreira Dias Pereira |
| Integração do layout (CSS) | `[data]` | Grazielle Pinheiro Barreto e João Pedro Moreira Dias Pereira |
| JavaScript | `[data]` | João Pedro Moreira Dias Pereira |
| Acessibilidade e testes | `[data]` | João Pedro Moreira Dias Pereira |
| Documentação | `[data]` | `[nome]` |
| GitHub e deploy no Railway | `[data]` | `[nome]` |
| Slides | `[data]` | João Pedro Moreira Dias Pereira |
| Ensaio da apresentação | `[data]` | Todos |

Ferramenta de gestão: `[Trello / Notion / GitHub Projects]`.

## 11. Riscos e restrições

- Prazo curto entre a 1ª e a 2ª entrega.
- Integrantes com horários diferentes (trabalho e aulas).
- Pouca experiência com Git (conflitos de merge).
- Crédito gratuito do Railway pode acabar; plano B: GitHub Pages.
- Internet instável na apresentação; plano B: vídeo e prints da demonstração.

## 12. Critérios de aceitação

- 10 páginas navegáveis, sem links quebrados, online com HTTPS.
- Formulário validado com JavaScript (mensagens de erro e borda em destaque) e rascunho salvo com `localStorage`.
- Alto contraste e tamanho de fonte funcionando e salvos entre as páginas.
- Navegação completa só com o teclado.
- W3C Validator sem erros nas 10 páginas.
- Documentação completa em `/docs`.

## 13. Aprovação

| Responsável pela validação | Data | Assinatura |
|---|---|---|
| `[nome]` | `[data]` | `[assinatura]` |
