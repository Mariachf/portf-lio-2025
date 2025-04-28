// Seleciona todos os contêineres de imagem dentro da seção #Skills
const imageContainers = document.querySelectorAll('#Skills .image-container');

// Itera sobre cada contêiner de imagem
imageContainers.forEach(container => {
    const caption = container.querySelector('.caption'); // Seleciona a legenda dentro do contêiner
    
    // Evento para mover a legenda com o mouse
    container.addEventListener('mousemove', function(e) {
        const x = e.pageX - container.offsetLeft;
        const y = e.pageY - container.offsetTop;
        caption.style.left = x + 15 + 'px';
        caption.style.top = y  + 'px';
    });

    // Evento para mostrar a legenda quando o mouse entra
    container.addEventListener('mouseenter', function() {
        caption.style.opacity = '1';
    });

    // Evento para esconder a legenda quando o mouse sai
    container.addEventListener('mouseleave', function() {
        caption.style.opacity = '0';
    });
});

window.onscroll = function() {
    const buttton = document.querySelector('.back-to-top');

    if(document.documentElement.scrollTop > 300) {
        buttton.style.display = 'block';
    } else {
        buttton.style.display = 'none';
    }
};

window.onscroll = function() {
    const buttton = document.querySelector('.back-to-top');

    if(document.documentElement.scrollTop > 300) {
        buttton.style.display = 'block';
    } else {
        buttton.style.display = 'none';
    }
};

const btn = document.querySelector(".btn");
const body = document.body;


btn.onclick = function () {
    this.classList.toggle("active");
    body.classList.toggle("dark-mode"); 
    
};
