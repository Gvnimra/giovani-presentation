//projetos.js - gera de forma dinamica os cards da seção "Projetos"

(function(){
  // 1 - Lista de projetos (adicione/edite aqui)

  const projetos = [
    {
      titulo: "Projeto 1",
      descricao: "Projetos em andamento, em breve eu colocarei eles aqui",
      imagem: "assets/img/img_teste1.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 

    },

    {
      titulo: "Projeto 2",
      descricao: "Projetos em andamento, em breve eu colocarei eles aqui",
      imagem: "assets/img/img_teste2.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 

    },
    {
      titulo: "Projeto 3",
      descricao: "Projetos em andamento, em breve eu colocarei eles aqui",
      imagem: "assets/img/img_teste3.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 

    },

    {
      titulo: "Projeto 4",
      descricao: "Projetos em andamento, em breve eu colocarei eles aqui",
      imagem: "assets/img/img_teste1.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 

    },

    {
      titulo: "Projeto 5",
      descricao: "Projetos em andamento, em breve eu colocarei eles aqui",
      imagem: "assets/img/img_teste2.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 

    },
    {
      titulo: "Projeto 6",
      descricao: "Projetos em andamento, em breve eu colocarei eles aqui",
      imagem: "assets/img/img_teste3.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 

    },

    // => Conforme novos projetos forem criados ou atualizados, é só copiar o objeto e atualizar os campos.
  ];

  // 2 - Função que cria um card DOM a partir de um objeto projeto 

  function criarCardProjeto (projeto) {
    const card = document.createElement('article'); //elemento semântico
    card.className = 'card-projeto';
    
    //Monta o HTML interno do card com o template literal
    card.innerHTML = `
      <div class = "card-thumb">
        <img src ="${projeto.imagem}" alt = "${escapeHtml(projeto.titulo)}" loading="lazy">
      </div>
      <div class = "card-body">
        <h3>${escapeHtml(projeto.titulo)}</h3>
        <p>${escapeHtml(projeto.descricao)}</p>
        <a class ="btn-projeto" href ="${encodeURI(projeto.link || '#')}" target = "_blank" rel = "noopener noreferrer"> Ver projeto</a>
      </div>
    `;

    return card;
  }

  // 3 -Função simples para escapar texto (evita injeção acidental)

  function escapeHtml(text) {
    if(!text && text !==0) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 4 - Função para renderizar todos os projetos no container

  function renderizarProjetos() {
    const container = document.getElementById('container-projetos');
    if(!container) return; //se caso não existir, aborta silenciosamente

    //limpa o container
    container.innerHTML = '';

    if(!Array.isArray(projetos) || projetos.length === 0){
      // mensagem quando não há projetos ainda
      container.innerHTML = `<p class="empty-msg"> Nenhum projeto publicado ainda - em breve aqui aparecerão meus trabalhos. </p>`
    }

    //cria um fragmento para inserir todos os cards de uma vez (melhoria de performance)

    const fragment = document.createDocumentFragment();

    projetos.forEach(projeto => {
      const card = criarCardProjeto(projeto);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  // 5 - Aguarda DOM pronto e executa a renderização

  document.addEventListener('DOMContentLoaded', renderizarProjetos);
})();