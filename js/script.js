/* =========================================================
   LUZ SOLIDÁRIA — JavaScript do site
   1. Preferências de acessibilidade (localStorage)
   2. Menu no celular
   3. Carrossel da página inicial
   4. Galeria com imagem ampliada
   5. Filtro de notícias
   6. Formulário: validação, máscara e rascunho (localStorage)
   7. Fluidez: blocos surgem ao rolar e sombra no cabeçalho
   ========================================================= */

// Lê e grava no localStorage sem quebrar se o navegador bloquear
function lerPreferencia(chave) {
  try { return localStorage.getItem(chave); } catch (e) { return null; }
}
function salvarPreferencia(chave, valor) {
  try { localStorage.setItem(chave, valor); } catch (e) { /* navegador sem localStorage */ }
}
function apagarPreferencia(chave) {
  try { localStorage.removeItem(chave); } catch (e) { /* ignora */ }
}

// Avisa o CSS que o JavaScript está ligado (usado nas animações de entrada)
document.documentElement.classList.add('js');

/* ---------- 1. ACESSIBILIDADE: FONTE E ALTO CONTRASTE ---------- */
const TAMANHOS = ['', 'fonte-grande', 'fonte-maior'];
let nivelFonte = parseInt(lerPreferencia('ls-fonte') || '0', 10);

function aplicarFonte() {
  document.documentElement.classList.remove('fonte-grande', 'fonte-maior');
  if (TAMANHOS[nivelFonte]) document.documentElement.classList.add(TAMANHOS[nivelFonte]);
  salvarPreferencia('ls-fonte', String(nivelFonte));
}

const btnContraste = document.getElementById('alto-contraste');
function aplicarContraste(ligado) {
  document.body.classList.toggle('alto-contraste', ligado);
  if (btnContraste) btnContraste.setAttribute('aria-pressed', String(ligado));
  salvarPreferencia('ls-contraste', ligado ? 'sim' : 'nao');
}

aplicarFonte();
aplicarContraste(lerPreferencia('ls-contraste') === 'sim');

document.getElementById('fonte-maior')?.addEventListener('click', () => {
  nivelFonte = Math.min(nivelFonte + 1, TAMANHOS.length - 1); aplicarFonte();
});
document.getElementById('fonte-menor')?.addEventListener('click', () => {
  nivelFonte = Math.max(nivelFonte - 1, 0); aplicarFonte();
});
document.getElementById('fonte-normal')?.addEventListener('click', () => {
  nivelFonte = 0; aplicarFonte();
});
btnContraste?.addEventListener('click', () => {
  aplicarContraste(!document.body.classList.contains('alto-contraste'));
});

/* ---------- 2. MENU NO CELULAR ---------- */
const menuBotao = document.getElementById('menu-botao');
const menu = document.getElementById('menu-principal');

function fecharMenu() {
  menu.classList.remove('aberto');
  menuBotao.setAttribute('aria-expanded', 'false');
  menuBotao.textContent = '☰ Menu';
}

if (menuBotao && menu) {
  menuBotao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    menuBotao.setAttribute('aria-expanded', String(aberto));
    menuBotao.textContent = aberto ? '✕ Fechar' : '☰ Menu';
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('aberto')) {
      fecharMenu();
      menuBotao.focus();
    }
  });
}

/* ---------- 3. CARROSSEL ---------- */
const carrossel = document.getElementById('carrossel');
if (carrossel) {
  const slides = carrossel.querySelectorAll('.slide');
  const indicadores = document.getElementById('indicadores');
  const numero = document.getElementById('indicador-num');
  const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let atual = 0;
  let timer = null;

  // cria um botão indicador para cada slide
  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
    b.addEventListener('click', () => { mostrar(i); if (timer) reiniciar(); });
    indicadores.appendChild(b);
  });
  const bolinhas = indicadores.querySelectorAll('button');

  function mostrar(i) {
    slides[atual].classList.remove('ativo');
    bolinhas[atual].removeAttribute('aria-current');
    atual = (i + slides.length) % slides.length;
    slides[atual].classList.add('ativo');
    bolinhas[atual].setAttribute('aria-current', 'true');
    numero.textContent = '0' + (atual + 1); // 01, 02, 03, 04
  }
  function iniciar() {
    if (!timer && !reduzirMovimento) timer = setInterval(() => mostrar(atual + 1), 5000);
  }
  function parar() { clearInterval(timer); timer = null; }
  function reiniciar() { parar(); iniciar(); }

  carrossel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') mostrar(atual + 1);
    if (e.key === 'ArrowLeft') mostrar(atual - 1);
  });
  // pausa enquanto o mouse está em cima ou o teclado está dentro do carrossel
  carrossel.addEventListener('mouseenter', parar);
  carrossel.addEventListener('mouseleave', iniciar);
  carrossel.addEventListener('focusin', parar);
  carrossel.addEventListener('focusout', (e) => { if (!carrossel.contains(e.relatedTarget)) iniciar(); });

  bolinhas[0].setAttribute('aria-current', 'true');
  iniciar();
}

/* ---------- 4. GALERIA ---------- */
const janela = document.getElementById('janela-imagem');
if (janela) {
  const imgAmpliada = document.getElementById('imagem-ampliada');
  const legenda = document.getElementById('legenda-ampliada');
  let botaoOrigem = null;

  document.querySelectorAll('.abrir-imagem').forEach((botao) => {
    botao.addEventListener('click', () => {
      const img = botao.querySelector('img');
      imgAmpliada.src = botao.dataset.src;
      imgAmpliada.alt = img.alt;
      legenda.textContent = botao.dataset.legenda;
      botaoOrigem = botao;
      janela.showModal();
    });
  });
  document.getElementById('fechar-imagem').addEventListener('click', () => janela.close());
  janela.addEventListener('click', (e) => { if (e.target === janela) janela.close(); });
  janela.addEventListener('close', () => botaoOrigem?.focus());
}

/* ---------- 5. FILTRO DE NOTÍCIAS ---------- */
const filtros = document.querySelectorAll('.filtros button');
if (filtros.length) {
  const noticias = document.querySelectorAll('.noticia');
  const contador = document.getElementById('contador-noticias');
  filtros.forEach((botao) => {
    botao.addEventListener('click', () => {
      const filtro = botao.dataset.filtro;
      let visiveis = 0;
      filtros.forEach((b) => b.setAttribute('aria-pressed', String(b === botao)));
      noticias.forEach((n) => {
        const mostrar = filtro === 'todas' || n.dataset.categoria === filtro;
        n.hidden = !mostrar;
        if (mostrar) visiveis++;
      });
      contador.textContent = 'Mostrando ' + visiveis + (visiveis === 1 ? ' notícia.' : ' notícias.');
    });
  });
}

/* ---------- 6. FORMULÁRIO DE CONTATO ---------- */
const form = document.getElementById('form-contato');
if (form) {
  const aviso = document.getElementById('aviso-form');
  const campoTelefone = document.getElementById('telefone');
  const CHAVE_RASCUNHO = 'ls-rascunho-contato';
  const camposTexto = ['nome', 'email', 'telefone', 'assunto', 'data', 'horas', 'mensagem'];

  // Máscara do telefone: (11) 91234-5678 ou (11) 1234-5678
  function formatarTelefone(valor) {
    const n = valor.replace(/\D/g, '').slice(0, 11);
    if (n.length <= 2) return n.length ? '(' + n : '';
    if (n.length <= 6) return '(' + n.slice(0, 2) + ') ' + n.slice(2);
    if (n.length <= 10) return '(' + n.slice(0, 2) + ') ' + n.slice(2, 6) + '-' + n.slice(6);
    return '(' + n.slice(0, 2) + ') ' + n.slice(2, 7) + '-' + n.slice(7);
  }
  campoTelefone.addEventListener('input', () => {
    campoTelefone.value = formatarTelefone(campoTelefone.value);
  });

  // Mensagens de erro em português para cada campo
  function mensagemErro(campo) {
    const v = campo.validity;
    if (campo.id === 'aceite') return v.valueMissing ? 'Marque a autorização para podermos responder.' : '';
    if (v.valueMissing) return 'Este campo é obrigatório.';
    if (campo.id === 'nome' && v.tooShort) return 'Digite pelo menos 3 letras.';
    if (campo.id === 'email' && (v.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value))) return 'Digite um e-mail válido, como maria@email.com.';
    if (campo.id === 'telefone' && v.patternMismatch) return 'Digite o telefone com DDD, como (11) 91234-5678.';
    if (campo.id === 'horas' && (v.rangeUnderflow || v.rangeOverflow || v.badInput || v.stepMismatch)) return 'Digite um número inteiro de 1 a 40.';
    if (campo.id === 'mensagem' && v.tooShort) return 'Escreva pelo menos 10 caracteres.';
    if (campo.id === 'data' && campo.value) {
      const hoje = new Date().toISOString().slice(0, 10);
      if (campo.value < hoje) return 'Escolha uma data de hoje em diante.';
    }
    return '';
  }

  // Mostra ou limpa o erro de um campo (borda vermelha + texto)
  function validarCampo(campo) {
    const msg = mensagemErro(campo);
    const erro = document.getElementById('erro-' + campo.id);
    const caixa = campo.closest('.campo');
    if (erro) erro.textContent = msg;
    caixa?.classList.toggle('campo-erro', Boolean(msg));
    campo.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  const todosCampos = form.querySelectorAll('input, select, textarea');
  todosCampos.forEach((campo) => {
    campo.addEventListener('blur', () => { if (campo.value || campo.type === 'checkbox') validarCampo(campo); });
    campo.addEventListener('input', () => {
      if (campo.getAttribute('aria-invalid') === 'true') validarCampo(campo);
      salvarRascunho();
    });
    campo.addEventListener('change', salvarRascunho);
  });

  // Rascunho salvo no localStorage
  function salvarRascunho() {
    const dados = {};
    camposTexto.forEach((id) => { dados[id] = document.getElementById(id).value; });
    salvarPreferencia(CHAVE_RASCUNHO, JSON.stringify(dados));
  }
  function carregarRascunho() {
    const texto = lerPreferencia(CHAVE_RASCUNHO);
    if (!texto) return;
    try {
      const dados = JSON.parse(texto);
      let algum = false;
      camposTexto.forEach((id) => {
        if (dados[id]) { document.getElementById(id).value = dados[id]; algum = true; }
      });
      if (algum) document.getElementById('rascunho-info').textContent = 'Recuperamos o rascunho que você começou a escrever.';
    } catch (e) { apagarPreferencia(CHAVE_RASCUNHO); }
  }
  carregarRascunho();

  document.getElementById('limpar-form').addEventListener('click', () => {
    form.reset();
    apagarPreferencia(CHAVE_RASCUNHO);
    todosCampos.forEach((c) => {
      c.closest('.campo')?.classList.remove('campo-erro');
      c.removeAttribute('aria-invalid');
      const erro = document.getElementById('erro-' + c.id);
      if (erro) erro.textContent = '';
    });
    aviso.hidden = true;
    document.getElementById('rascunho-info').textContent = 'Seu rascunho é salvo automaticamente neste navegador.';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // não recarrega a página
    let primeiroErro = null;
    todosCampos.forEach((campo) => {
      if (!validarCampo(campo) && !primeiroErro) primeiroErro = campo;
    });

    aviso.hidden = false;
    if (primeiroErro) {
      aviso.className = 'aviso-form erro';
      aviso.textContent = 'Corrija os campos destacados em vermelho.';
      primeiroErro.focus();
      return;
    }
    aviso.className = 'aviso-form sucesso';
    aviso.textContent = 'Formulário validado com sucesso! Obrigado por querer fazer parte da Luz Solidária. (Neste projeto acadêmico o envio é simulado.)';
    form.reset();
    apagarPreferencia(CHAVE_RASCUNHO);
  });
}

/* ---------- 7. FLUIDEZ ---------- */
// Blocos aparecem suavemente quando entram na tela
const blocos = document.querySelectorAll(
  '.secao h2:not(.visualmente-oculto), .secao .subtitulo, .card, .numero, .passo, .galeria-grade figure, .dado-destaque, .tabela-rolagem, .chamada, .ods li, .dividido > img, .midia-bloco, .mapa iframe'
);
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const el = entrada.target;
      el.classList.add('visivel');
      // depois da animação, devolve as transições normais (ex.: card ao passar o mouse)
      const terminar = (e) => {
        if (e.target !== el) return; // ignora transições dos elementos de dentro
        el.classList.remove('revelar', 'visivel');
        el.style.transitionDelay = '';
        el.removeEventListener('transitionend', terminar);
      };
      el.addEventListener('transitionend', terminar);
      observador.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  blocos.forEach((el) => {
    // pequeno atraso em cascata entre itens lado a lado (ex.: 3 cards)
    const irmaos = [...el.parentElement.children].filter((c) => c.matches(el.tagName));
    const pos = Math.min(irmaos.indexOf(el), 4);
    el.style.transitionDelay = (pos > 0 ? pos * 0.08 : 0) + 's';
    el.classList.add('revelar');
    observador.observe(el);
  });
}

// Sombra no cabeçalho quando a página é rolada
const cabecalho = document.querySelector('.cabecalho');
if (cabecalho) {
  const atualizarCabecalho = () => cabecalho.classList.toggle('rolou', window.scrollY > 10);
  window.addEventListener('scroll', atualizarCabecalho, { passive: true });
  atualizarCabecalho();
}
