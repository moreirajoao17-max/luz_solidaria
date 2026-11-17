# Evidências de testes

Data dos testes: 16/11/2026. Navegador: Google Chrome (computador 1366 × 800 e celular 390 × 844).

## 1. Navegação e links

| Teste | Resultado |
|---|---|
| As 10 páginas abrem e têm o mesmo menu | ✅ OK |
| Links internos e âncoras (`contato.html#parceria`) | ✅ Nenhum link quebrado |
| Imagens, vídeo, áudio e pôster existem nas pastas | ✅ OK |
| Página atual marcada no menu (`aria-current="page"`) | ✅ OK |
| Rolagem horizontal indesejada (computador e celular) | ✅ Nenhuma |

## 2. Formulário (contato.html)

| Teste | Resultado esperado | Resultado |
|---|---|---|
| Enviar vazio | Aviso "Corrija os campos destacados em vermelho", 6 campos com borda vermelha e foco no primeiro erro | ✅ OK — [print](prints/formulario-erros.jpg) |
| E-mail "maria@email" | "Digite um e-mail válido, como maria@email.com." | ✅ OK |
| Horas = 50 | "Digite um número inteiro de 1 a 40." | ✅ OK |
| Telefone digitado "11912345678" | Máscara vira "(11) 91234-5678" | ✅ OK |
| Preencher, recarregar a página | Campos voltam preenchidos (rascunho no `localStorage`) | ✅ OK |
| Envio correto | Mensagem de sucesso e rascunho apagado | ✅ OK |

## 3. Acessibilidade

| Teste | Resultado |
|---|---|
| 1º Tab da página foca "Pular para o conteúdo" | ✅ OK |
| Navegação só com teclado (Tab, Enter, Esc, setas no carrossel) | ✅ OK |
| Alto contraste ligado em uma página continua nas outras (`localStorage`) | ✅ OK — [print](prints/alto-contraste.jpg) |
| Tamanho da fonte (A-, A, A+) salvo entre páginas | ✅ OK |
| Todas as imagens com `alt`; iframe com `title`; campos com `label` | ✅ OK |
| Um único `h1` por página e títulos sem pular nível | ✅ OK |
| `lang="pt-BR"` em todas as páginas | ✅ OK |
| Carrossel pausa com o mouse em cima ou com o foco do teclado, e não troca sozinho para quem prefere menos movimento | ✅ OK |

## 4. Interações com JavaScript

| Teste | Resultado |
|---|---|
| Menu ☰ abre e fecha no celular (Esc também fecha) | ✅ OK — [print](prints/menu-celular.jpg) |
| Filtro de notícias "Energia no Brasil" mostra 2 notícias | ✅ OK |
| Galeria abre a imagem ampliada e fecha com Esc | ✅ OK — [print](prints/galeria-ampliada.jpg) |
| Nenhum erro no console do navegador | ✅ OK |

## 5. Validação W3C e Lighthouse (a equipe deve fazer com o site publicado)

| Página | W3C Validator (validator.w3.org) | Print |
|---|---|---|
| index.html | `[resultado]` | `[print]` |
| sobre.html | `[resultado]` | `[print]` |
| projetos.html | `[resultado]` | `[print]` |
| impacto.html | `[resultado]` | `[print]` |
| acessibilidade.html | `[resultado]` | `[print]` |
| galeria.html | `[resultado]` | `[print]` |
| midia.html | `[resultado]` | `[print]` |
| noticias.html | `[resultado]` | `[print]` |
| contato.html | `[resultado]` | `[print]` |
| orcamento_hospedagem.html | `[resultado]` | `[print]` |

Lighthouse (Chrome DevTools → Lighthouse → Acessibilidade): `[nota]` — `[print]`

Como validar: abra https://validator.w3.org/, escolha "Validate by URI", cole o endereço de cada página publicada e tire um print do resultado.
