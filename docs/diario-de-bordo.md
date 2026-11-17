# Diário de Bordo — Luz Solidária

Registro das decisões, aprendizados, dificuldades e do uso de IA no projeto.
As partes entre `[colchetes]` devem ser completadas pela equipe com o que aconteceu de verdade.

---

## Entradas da equipe (antes do uso de IA)

### `[data]` — Escolha do tema
- **Decisão:** `[por que escolhemos energia solar comunitária]`
- **Aprendizado:** `[...]`
- **Dificuldade:** `[...]`

### `[data]` — Primeira versão (MVP)
- **Decisão:** site em uma página só, com seções (versão 3).
- **Aprendizado:** `[...]`
- **Dificuldade:** `[...]`

---

## 14/11/2026 — Análise do MVP com IA

- **O que fizemos:** enviamos o zip da versão 3 para a IA analisar.
- **Prompt usado:** "Descompile esse arquivo, abre e veja o que tem nele."
- **O que a IA encontrou:**
  - O vídeo da seção Mídia era um link do YouTube para a música "Never Gonna Give You Up", e não um vídeo do projeto.
  - Sobrava um botão "›" solto e tags `</div></section>` fechando elementos que já estavam fechados.
  - Links do menu para seções que não existiam (`#parceria`, `#comoFunciona`).
  - 12 arquivos sem uso e imagens repetidas (zip com cerca de 24 MB).
  - Erros de texto: "Lúz", "SejaUmVoluntário", logo com alt "EcoVida".
- **Aceitamos:** a lista de problemas, que conferimos abrindo o site.
- **Aprendizado:** revisar o que copiamos de exemplos antes de publicar, porque um link errado passou despercebido.

## 15/11/2026 — Correções no site com IA

| Prompt (como pedimos) | O que a IA fez | Decisão da equipe |
|---|---|---|
| "Essa parte [imagem do Sobre] eu quero que fique parada" | Removeu a animação `flutuar` do CSS | Aceito |
| "Nessa parte eu quero que vocês façam em Java e coloque número de telefone" | Explicou que no navegador se usa **JavaScript**, não Java; criou o campo Telefone com máscara e validação | Aceito, e corrigimos nosso entendimento: Java e JavaScript são linguagens diferentes |
| "Coloque essa imagem [balão 'Preencha este campo'] também no campo telefone" | Usou `setCustomValidity` e `reportValidity` | Aceito |
| "O exemplo que você colocou no telefone, coloca também nos outros" | Adicionou `placeholder` com exemplo em todos os campos | Aceito |
| "Coloque uma seção dedicada à parceria voluntária no mesmo formato do site" | Criou a seção com 3 cards e 3 passos | Aceito; `[revisamos os textos? o que mudamos?]` |
| "Aumente o menu um pouco" / "deixe o logo um pouco menor" | Ajustou `font-size` do menu e `height` do logo | Aceito |
| "Está aparecendo para aumentar o campo, isso está errado" | `textarea{resize:none}` | Aceito |
| "O link do vídeo não tem vídeo, não tem um vídeo que mostra o intuito da página" | Montou um vídeo de 48 s com as fotos do projeto e textos | Aceito; `[conferimos os textos do vídeo]` |

- **Dificuldade:** algumas mudanças não apareciam no navegador. A IA explicou que era o cache e ensinou o **Ctrl + Shift + R**.

## 16/11/2026 — Reestruturação para a entrega final com IA

- **Prompt usado:** "Com o que eu te mandei aí, analise o trabalho e veja o que falta" (enviamos os PDFs da Atividade A2, da Atividade A1 e do tutorial GitHub + Railway).
- **O que a IA apontou:** o site tinha 1 página, e eram pedidas 10; faltavam as páginas de acessibilidade e de orçamento, áudio, iframe, campos `date` e `number`, `localStorage`, menu de celular, responsividade, pasta `/docs` e a estrutura de pastas exigida.
- **Segundo prompt:** "Pode começar o que tiver faltando, você me avisa que a gente vai arrumando."
- **O que a IA fez:**
  - Separou o site em 10 páginas com o mesmo cabeçalho, menu e rodapé.
  - Criou as pastas `css/`, `js/`, `img/`, `assets/` e `docs/` e otimizou as imagens (de cerca de 16 MB para 2,6 MB).
  - Escreveu o CSS responsivo e o JavaScript (validação com borda vermelha, rascunho e preferências em `localStorage`, menu de celular, alto contraste, carrossel acessível, galeria e filtro de notícias).
  - Pesquisou dados com fonte (IEMA, IBGE, MME) e preços de hospedagem e domínio.
  - Gerou uma trilha instrumental para o áudio e o vídeo.
  - Escreveu os rascunhos desta documentação.
- O que a equipe revisou ou corrigiu: pedimos para tirar as setas do carrossel e voltar ao indicador de antes, tirar o logo do topo e colocar o botão Menu no lugar, corrigir os números da seção "Nossa trajetória" e deixar o site mais fluido.
- O que a equipe recusou e por quê: recusamos códigos que vinham quebrados, páginas sem sentido para o tema e partes sem necessidade. Só entrou no site o que a equipe testou e entendeu.
---

## Regras que seguimos ao usar IA

1. Todo código da IA foi lido e testado antes de entrar no site, e cada integrante sabe explicar a parte que apresenta.
2. Dados com números só entram com fonte citada na página.
3. A IA não faz commits por nós: cada integrante sobe a própria parte no GitHub.
4. Tudo o que a IA produziu está registrado neste diário.

## Aprendizados gerais

- Publicar um site com GitHub e Railway e validar o HTML no W3C.
## 17/11/2026 — João Pedro
- O que fiz: HTML, acessibilidade, layout, JavaScript, slides e publicação no Railway.
- O que aprendi: publicar um site com GitHub e Railway.
- Dificuldade: organizar o site em 10 páginas.

## 17/11/2026 - Lucas Moreira
- O que fiz: paginas de formulário e artigos em HTML, CSS
- O que aprendi: tags HTML , JavaScript
- Dificuldade: acessibilidade e JavaScript
  
## Próximos passos

- Gravar um depoimento real em áudio para substituir a trilha instrumental.
- Guardar as mensagens do formulário em um banco MySQL no Railway.
- Registrar o domínio luzsolidaria.org.br (R$ 40/ano no Registro.br), como previsto no orçamento.
