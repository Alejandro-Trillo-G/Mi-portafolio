function escrevendoLetra(){
  function ativaLetra(elemento){
      const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML  = '';
      arrTexto.forEach((letra, i)=>{
          setTimeout(()=>{
              elemento.innerHTML += letra; 
          }, 75 * i);
      });
  }

  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
} 

function ativacaoMenu(){
  const ativaMenu = document.querySelector('.menu-toggle');
  const icone = ativaMenu.querySelector('i');
  const navMenu = document.querySelector('header .navegacao-primaria')


  ativaMenu.addEventListener('click', ()=>{
      icone.classList.toggle('fa-x')
      navMenu.classList.toggle('ativado')
      const abrindo = navMenu.classList.contains('ativado');
      ativaMenu.setAttribute('aria-expanded', abrindo);
      ativaMenu.setAttribute('aria-label', abrindo ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  })
}

ativacaoMenu()

function atualizarAno(){
  const ano = document.getElementById('ano-atual');
  if (ano) ano.textContent = new Date().getFullYear();
}

atualizarAno()

escrevendoLetra()

function sobreMim(){
  const experiencia = document.querySelectorAll('.experience_content div');
  const botao = document.querySelectorAll('.experience_content ul li')
  const education = document.querySelectorAll('.education_content div');
  const botaoEducation = document.querySelectorAll('.education_content ul li')


  experiencia[0].classList.add('ativo')
  botao[0].classList.add('ativo')
  education[0].classList.add('ativo')
  botaoEducation[0].classList.add('ativo')

  function slideShow(index){
      experiencia.forEach((divisao)=>{
          divisao.classList.remove('ativo');
      });
      botao.forEach((item)=>{
          item.classList.remove('ativo')
      });
      experiencia[index].classList.add('ativo')
      botao[index].classList.add('ativo')
  }

  function slideShow2(index){
      education.forEach((divisao)=>{
          divisao.classList.remove('ativo');
      });
      botaoEducation.forEach((item)=>{
          item.classList.remove('ativo')
      });
      education[index].classList.add('ativo')
      botaoEducation[index].classList.add('ativo')
  }


  function aoAtivar(elemento, callback){
      elemento.addEventListener('keydown', (evento)=>{
          if (evento.key === 'Enter' || evento.key === ' '){
              evento.preventDefault();
              callback();
          }
      });
  }

  botao.forEach((event,index)=>{
      event.addEventListener('click', ()=>{
          slideShow(index)
      });
      aoAtivar(event, ()=> slideShow(index));
  });

  botaoEducation.forEach((div, index)=>{
      div.addEventListener('click', ()=>{
          slideShow2(index)
      })
      aoAtivar(div, ()=> slideShow2(index));
  })
}
sobreMim();