
//Menu Hamburguer 
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu(){
    //Se o menu está fechado
    if(window.getComputedStyle(menu).right == "-210px"){
        //Abrir o menu
        menu.style.right = "80px"

        //Mostrar icone X
        iconeX.style.display = "inline"

        //Esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "5.5px"

    }else{
        //Fechar o menu
        menu.style.right = "-210px"

        //Esconder icone X
        iconeX.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }   
}

onresize = () =>{
    if(window.getComputedStyle(menu).right == "-210px"){
        //Mostra icone X
        iconeX.style.display = "none"
    }else{
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}


// ----------------------Login-----------------------

const container = document.querySelector('.container5')
const registerBtn = document.querySelector('.register-btn')
const loginBtn = document.querySelector('.login-btn')

registerBtn.addEventListener('click', () => {
    container5.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container5.classList.remove('active');
})