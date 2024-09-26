const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')
// const lista = document.querySelectorAll('.lista')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativar')
}

document.getElementById('btn-menu').addEventListener('click', function() {
    document.body.classList.toggle('no-scroll');
});

// function ativaLink(){
//     for(let i of lista){
//         i.classList.remove('ativo')
//     }
//     this.classList.add('ativo')
// }

// for(let i of lista){
//     i.addEventListener('click', ativaLink)
// }