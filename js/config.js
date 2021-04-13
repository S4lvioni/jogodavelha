let x = document.querySelector(".x");
let o = document.querySelector(".o");
let vsmode = document.getElementById("btn1");
let vsia = document.getElementById("btn2");

let slots = document.querySelectorAll(".old");
let message = "Venceu!";

let container = document.querySelector(".square");
let mostraPlacar = document.querySelector (".placar");
let winX, winO;

let vitorias1 = document.getElementById("counterx");
let vitorias2 = document.getElementById("countero");

//contador de jogadas
let counter1 = 0;
let counter2 = 0;

//adicionando o evento de click para todas as boxes
vsmode.addEventListener("click", function  (){
    container.classList.remove("hide");
    mostraPlacar.classList.remove("hide");
    Start();
    vsia.style.display = "none";
})

vsia.addEventListener("click", function () {
    container.classList.remove("hide");
    mostraPlacar.classList.remove("hide");
    machinePlaying();
    vsmode.style.display = "none";
})

function Start(){
    for (let i=0;i<slots.length;i++){
        slots[i].addEventListener("click", function Oi () {
            
            
            // aqui chamaremos a função para colocar o elemento na box
            let el = CheckPlayer();
    
            //so adicionaremos o node caso o slot esteja vazio
            if (slots[i].childNodes.length == 0){
                let CloneEl = el.cloneNode(true);
            
                //colocamos o elemento como filho da box atual 
                this.appendChild(CloneEl);
            }
                //aqui clonamos o elemento pois se nao fizermos isso só terá um de cada (um x e uma bola)
            winner();
        })
    }
}


function declararWinner(winner){

    let PlacarX = document.querySelector("#counterx");
    let PlacarO = document.querySelector("#countero");

    if (winner == "x"){
        PlacarX.textContent = parseInt(PlacarX.textContent) + 1;
    }else if (winner == "o"){
        PlacarO.textContent = parseInt(PlacarO.textContent) + 1;
    }else{
        alert("Deu velha");
    }

    counter1 = 0;
    counter2 = 0;

    let slotsToRemove = document.querySelectorAll(".old div");
    for (let i=0;i<slotsToRemove.length;i++){
        slotsToRemove[i].parentNode.removeChild(slotsToRemove[i]);
    }


}


function CheckPlayer(){
    if(counter1 == counter2){// como ele sempre inicia em 0=0, o X será sempre o 1.
        el = x;
        counter1 = counter1 + 1; //adicionando um counter para que o if se torne falso
    }else{
        el= o;
        counter2 = counter2 +1;// a chave dessa logica é o contador de jogadas lá encima. Quando estiverem iguais, é o X que joga, quando tiverem diferentes, é o circulo.
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
        if (b1.childNodes[0].className == b2.childNodes[0].className  && b2.childNodes[0].className == b3.childNodes[0].className ) {
            if(counter1 > counter2){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else{
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }
    } 
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length >0){
            if(b4.childNodes[0].className  === b5.childNodes[0].className && b5.childNodes[0].className === b6.childNodes[0].className){
                if(counter1 > counter2){
                    setTimeout(function (){
                        alert(" Jogador 1 " + message);
                        declararWinner("x");
                    },0300);
                }else{
                    setTimeout(function (){
                        alert(" Jogador 2 " + message);
                        declararWinner("o");
                    },0300);
                }
        }   
    } 
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length >0){
            if(b7.childNodes[0].className  === b8.childNodes[0].className && b8.childNodes[0].className === b9.childNodes[0].className){
                if(counter1 > counter2){
                    setTimeout(function (){
                        alert(" Jogador 1 " + message);
                        declararWinner("x");
                    },0300);
                }else{
                    setTimeout(function (){
                        alert(" Jogador 2 " + message);
                        declararWinner("o");
                    },0300);
                }
        }   
        }
        
    //verticais
     if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length >0){
         if(b1.childNodes[0].className === b4.childNodes[0].className && b4.childNodes[0].className === b7.childNodes[0].className){
            if(counter1 > counter2){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }
            if (counter1 == counter2){
                setTimeout( function (){
                    alert("Jogador 2 " + message)
                    declararWinner("o");
                },0300);
            }
        }
    }
     if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length >0){
         if(b2.childNodes[0].className === b5.childNodes[0].className && b5.childNodes[0].className=== b8.childNodes[0].className){
            if(counter1 > counter2){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else if (counter1 == counter2){
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }}
         if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length >0){
            if(b3.childNodes[0].className === b6.childNodes[0].className && b6.childNodes[0].className === b9.childNodes[0].className){
                if(counter1 > counter2){
                    setTimeout(function (){
                        alert(" Jogador 1 " + message);
                        declararWinner("x");
                    },0300);
                }else{
                    setTimeout(function (){
                        alert(" Jogador 2 " + message);
                        declararWinner("o");
                    },0300);
                }
        }
        }
        
    //diagonais
         if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length >0){
         if(b1.childNodes[0].className === b5.childNodes[0].className && b5.childNodes[0].className === b9.childNodes[0].className ){
            if(counter1 > counter2){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else{
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
        }}
         if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length >0){
         if(b3.childNodes[0].className === b5.childNodes[0].className && b5.childNodes[0].className === b7.childNodes[0].className ){
            if(counter1 > counter2){
                setTimeout(function (){
                    alert(" Jogador 1 " + message);
                    declararWinner("x");
                },0300);
            }else{
                setTimeout(function (){
                    alert(" Jogador 2 " + message);
                    declararWinner("o");
                },0300);
            }
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

  //IA
    function machinePlaying(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let preenchidos;
        for (let i=0;i<slots.length;i++){ // if de 0 a 9 (9 slots)
            let aleatorio = getRandomInt(0,8); // pega 9 numeros aleatorios de 0-8
            slots[i].addEventListener("click", function Oi (){
            let el = elementsPlaying(counter1,counter2);// aqui joga pra funcao que decide se vai preencher com BOLA OU X
            let elClone = el.cloneNode(true); // aqui eu to clonando o elemento, pra que possa ter varias BOLAS ou X
            if (counter1 == counter2){ // essas variaveis sao setadas em 0 inicialmente, quando uma pessoa joga ela recebe +1
                    if(slots[i].childNodes.length == 0){ // ta verificando se tá vazio
                        this.appendChild(elClone);// se tiver, coloca o elemento clonado no objeto
                        counter1++;//adiciona +1 no counter
                    }// essa parte aqui é a parte do PLAYER jogando, funciona de boa.
            }else{
                    for (let i = 0; i<slots.length;i++){//parte da ia jogando, mais perdido q cego em tiroteio
                        if (slots[i].childNodes.length > 0 ){
                            //preciso verificar se : 1) está na vez da IA jogar; 2) Gerar um numero aleatorio dentre as casas disponiveis; 3) Inserir a BOLA na casa
                        }
                    }
                }
            winner();     
            }
            
            )
            
        }
        
    }

function elementsPlaying (counter1,counter2){

    if (counter1 == counter2){
        el = x;
        counter1++;
        
    }else{
        el = o;
        counter2++;
    }
    return el;
}
