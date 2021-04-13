let x = document.querySelector(".x");
let o = document.querySelector(".o");
let vsmode = document.getElementById("btn1");
let vsia = document.getElementById("btn2");

let slots = document.querySelectorAll(".old");
let message = "Venceu!";
let secondPlayer ;

let container = document.querySelector(".square");
let mostraPlacar = document.querySelector (".placar");
let winX, winO;

let vitorias1 = document.getElementById("counterx");
let vitorias2 = document.getElementById("countero");

//contador de jogadas
let player1 = 0;
let player2 = 0;


vsmode.addEventListener("click", function  (){
    container.classList.remove("hide");
    mostraPlacar.classList.remove("hide");
    vsia.style.display = "none";
    secondPlayer = this.getAttribute("id");
})

vsia.addEventListener("click", function () {
    container.classList.remove("hide");
    mostraPlacar.classList.remove("hide");
    vsmode.style.display = "none";
    secondPlayer = this.getAttribute("id");
})

//adicionando o evento de click para todas as boxes no modo 2P

for (let i=0;i<slots.length;i++){
    slots[i].addEventListener("click", function Oi () {
            
            
        // aqui chamaremos a função para colocar o elemento na box
         let el = CheckPlayer(player1,player2);

        //so adicionaremos o node caso o slot esteja vazio
        if (slots[i].childNodes.length == 0){
            let CloneEl = el.cloneNode(true);
            
            //colocamos o elemento como filho da box atual 
            this.appendChild(CloneEl);
            if(player1==player2){
                player1++;
                if(secondPlayer=='btn2'){
                    //executar jogada
                    jogadamaquina();
                    player2++;
                }
            }else{
                player2++;
            }
            winner();
        }
        
    })
}


function CheckPlayer(player1,player2){
    if(player1 == player2){// como ele sempre inicia em 0=0, o X será sempre o 1.
        el = x;
    }else{
        el= o;
    }
    return el;
}  
function winner(){
    let b1 = document.getElementById("box1");
    let b2 = document.getElementById("box2");
    let b3 = document.getElementById("box3");
    let b4 = document.getElementById("box4");
    let b5 = document.getElementById("box5");
    let b6 = document.getElementById("box6");
    let b7 = document.getElementById("box7");
    let b8 = document.getElementById("box8");
    let b9 = document.getElementById("box9");
    let velha = 0;
    //horizontais
    
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length >0){
        if (b1.childNodes[0].className == "x" && b2.childNodes[0].className == "x" && b3.childNodes[0].className == "x") {
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else if (b1.childNodes[0]=='o' && b2.childNodes[0]=='o' && b3.childNodes[0]=='o'){
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }
     
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length >0){
        if (b4.childNodes[0].className == "x" && b5.childNodes[0].className == "x" && b6.childNodes[0].className == "x") {
                    setTimeout(function (){
                        alert(" Jogador 1 " + message);
                        declararWinner("x");
                    },0300);
                }else if (b4.childNodes[0]=='o' && b5.childNodes[0]=='o' && b6.childNodes[0]=='o'){
                    setTimeout(function (){
                        alert(" Jogador 2 " + message);
                        declararWinner("o");
                    },0300);
                }
        }   
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length >0){
            if(b7.childNodes[0].className == "x" && b8.childNodes[0].className == "x" && b9.childNodes[0].className == "x"){
                    setTimeout(function (){
                        alert(" Jogador 1 " + message);
                        declararWinner("x");
                    },0300);
                }else if (b7.childNodes[0]=='o' && b8.childNodes[0]=='o' && b9.childNodes[0]=='o'){
                    setTimeout(function (){
                        alert(" Jogador 2 " + message);
                        declararWinner("o");
                    },0300);
                }
        }   
        
    //verticais
     if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length >0){
         if(b1.childNodes[0].className == "x" && b4.childNodes[0].className == "x" && b7.childNodes[0].className == "x"){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }
            else if (b1.childNodes[0]=='o' && b4.childNodes[0]=='o' && b7.childNodes[0]=='o'){
                setTimeout( function (){
                    alert("Jogador 2 " + message)
                    declararWinner("o");
                },0300);
            }
        }
     if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length >0){
         if(b2.childNodes[0].className == "x" && b5.childNodes[0].className == "x" && b8.childNodes[0].className == "x"){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else if (b2.childNodes[0]=='o' && b5.childNodes[0]=='o' && b8.childNodes[0]=='o'){
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }
         if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length >0){
            if(b3.childNodes[0].className == "x" && b6.childNodes[0].className == "x" && b9.childNodes[0].className == "x"){
                    setTimeout(function (){
                        alert(" Jogador 1 " + message);
                        declararWinner("x");
                    },0300);
                }else if (b3.childNodes[0]=='o' && b6.childNodes[0]=='o' && b9.childNodes[0]=='o'){
                    setTimeout(function (){
                        alert(" Jogador 2 " + message);
                        declararWinner("o");
                    },0300);
                }
        }
    
    //diagonais
         if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length >0){
         if(b1.childNodes[0].className == "x" && b5.childNodes[0].className == "x" && b9.childNodes[0].className == "x"){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else if (b1.childNodes[0]=='o' && b5.childNodes[0]=='o' && b9.childNodes[0]=='o'){
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }
         if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length >0){
         if(b3.childNodes[0].className == "x" && b5.childNodes[0].className == "x" && b7.childNodes[0].className == "x" ){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else if (b3.childNodes[0]=='o' && b5.childNodes[0]=='o' && b7.childNodes[0]=='o'){
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }


    for (let i=0;i<slots.length;i++){
        if(slots[i].childNodes[0] != undefined){
            velha++;
        }
    }
    if (velha == 9){
        setTimeout(function (){
            declararWinner("Deu velha");
        },0700);
    }
}

function declararWinner(winner){

    let PlacarX = document.querySelector("#counterx");//pegando o contador do placar
    let PlacarO = document.querySelector("#countero");

    if (winner == "x"){
        PlacarX.textContent = parseInt(PlacarX.textContent) + 1; //recebendo o conteudo (string) e convertendo em INT
    }else if (winner == "o"){
        PlacarO.textContent = parseInt(PlacarO.textContent) + 1;
    }else {
        alert("Deu velha");
    }

    player1 = 0; // isso faz com que o X sempre seja o primeiro a jogar.
    player2 = 0;

    let slotsToRemove = document.querySelectorAll(".old div");
    for (let i=0;i<slotsToRemove.length;i++){
        slotsToRemove[i].parentNode.removeChild(slotsToRemove[i]);
    }


}
  //IA
   

function jogadamaquina(){

    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchido = 0;

    for (let i=0 ; i<slots.length;i++){
        let randomNumber = Math.floor(Math.random() * 5);
        if (slots[i].childNodes[0] == undefined){
            if (randomNumber <= 1 ){
                slots[i].appendChild(cloneO);
                contador++;
                break;
            }
        }else{
            preenchido++;
        }
    }
    if (contador == 0 && preenchido <9){
        jogadamaquina();
    }
}