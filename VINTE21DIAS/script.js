// Variável para armazenar o botão do menu
let menuBtn = document.querySelector('.menu-btn');

// Variável para armazenar o menu
let menu = document.querySelector('.menu');

// Variável para armazenar a lista de itens do menu
let menuItems = document.querySelectorAll('.menu li');

// Variável para armazenar o estado atual do menu
let menuOpen = false;

// Adicionar um evento de clique ao botão do menu
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuItems.forEach(item => item.classList.add('open'));
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuItems.forEach(item => item.classList.remove('open'));
    menuOpen = false;
  }
});

// Variável para armazenar o botão do formulário de contato
let formBtn = document.querySelector('#form-btn');

// Variável para armazenar o formulário de contato
let form = document.querySelector('.contact-form');

// Adicionar um evento de clique ao botão do formulário de contato
formBtn.addEventListener('click', () => {
  form.classList.toggle('open');
});

// Variável para armazenar o botão de voltar ao topo
let backToTopBtn = document.querySelector('.back-to-top');

// Adicionar um evento de rolagem à página
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Adicionar um evento de clique ao botão de voltar ao topo
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
