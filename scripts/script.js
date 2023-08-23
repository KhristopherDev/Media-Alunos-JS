const subButton = document.getElementById('subButton'); //variavel constante, botao de submit
const cleanButton = document.getElementById('cleanButton'); //variavel constante, botao para limpar
const atvs = []; //variavel constante, valores da atividade sendo computada
const warning = document.getElementById('warning'); //variavel constante, span reservado para avisos
const atvsBody = document.querySelector('tbody'); //variavel constante, corpo da tabela
const mediaElement = document.getElementById('media'); //variavel constante, media das notas
const aprovElement = document.getElementById('aprovacaoMedia'); //variavel constante, aprovacao da media total
const arrayMedia = []; //variavel constante, variavel contento valor de todas as notas inseridas

let media; //variavel let, media minima escolhida pelo usuário
let aprovacao = ''; //variavel let, aprovacao da atividade
let aprovacaoMedia = ''; //variavel let, aprovacao da media
let atvForm; //variavel let, formulario


//funcao para inserir um valor de media pelo usuario e para verificar se e um numero valido
function inserirMedia() {
    media = parseFloat(prompt("Escolha um valor para a média: ")); //metodo para transformar media em numero decimal
    if (isNaN(media) || media === null) { //isNaN verifica se o valor e um numero
        window.alert("Insira valores válidos"); //alerta
        inserirMedia(); //repete a funcao
    }
}

subButton.addEventListener("click", function (event) {
    event.preventDefault(); //variavel 'event' recebe a acao que o botao esta executando (click), preventDefault() previne o comportamento padrao da acao e do botao
    atvForm = document.getElementById('notaForm'); //define um valor para a variavel form. esta recebendo o formulario
    let atvGrade = parseFloat(atvForm.atvGrade.value); //variavel let, recebe o valor da nota e o transforma em numero

    console.log(atvGrade) //variavel no console
    if (atvForm.atvName.value === '' || isNaN(atvGrade) || atvGrade < 0) { //verifica se o nome esta vazio, ou a nota nao e um numero, ou e menor do que zero
        warning.innerHTML = `<span style="color: red;">Insira valores válidos.</span>`; //condicao padrao caso alguma das verificacoes seja verdadeira
    } else { //condicao normal caso os valores sejam validos
        atvs.push(atvForm.atvName.value); //insere o valor do nome no array
        atvs.push(atvForm.atvGrade.value); //insere o valor da nota no array

        arrayMedia.push(atvGrade); //registra o valor da nota em um array para calcular a media
        console.log(arrayMedia); //variavel no console
        let soma = 0; //define variavel soma para somar todas as notas

        for (let i = 0; i < arrayMedia.length; i++) { //define variavel i (inicialmente como 0) para percorrer todo o array. arrayMedia.length define o destino final do array
            soma += arrayMedia[i]; //soma a nota da posicao de acordo na variavel
        }

        let somaMedia = soma / arrayMedia.length; //calcula a media e insere em outra variavel

        mediaElement.innerText = somaMedia; //insere o valor calculado no HTML do elemento media

        
        
        if (somaMedia < media) { //verifica se foi aprovado ou nao na media total
            aprovacaoMedia = "Fail!"; //nao foi buaaaa
        } else {
            aprovacaoMedia = "Yes!"; //foi yey
        }
     
        let classe; //classe para ser inserida no elemento "tr" da atividade, para mudar o background e outras coisas

        if (atvGrade < media) { //verifica se foi aprovado na atividade
            aprovacao = "Fail!"; //nao foi :(
            classe = "reprovado"; //classe reprovada
        } else {
            aprovacao = "Yes!"; //foi :D
            classe = "aprovado"; //classe aprovada
        }
        
       
        
        aprovElement.innerText = aprovacaoMedia; //aprovacao do elemento media

        atvsBody.insertAdjacentHTML("afterbegin", `<tr class="${classe}"> <td>${atvs[0]}</td> <td>${atvs[1]}</td> <td>${aprovacao}</td> </tr> `); //insere um codigo html abaixo de outro
        atvs.length = 0; //limpa/reseta o array
        warning.innerHTML = ''; //retira o aviso

        
        
    }
});

//funcao para limpar as atividades
function clicaLimpa(e) { //variavel e faz a mesma coisa que event, so nao e ele
    e.preventDefault(); //previne comportamento padrao
    atvsBody.innerHTML = ''; //limpa body da table, ou seja tira tudo
    arrayMedia.length = 0; //reseta o array das notas capturadas
    mediaElement.innerText = '---'; //reseta a media
    aprovElement.innerText = '---'; //faz a mesma coisa da linha de cima so que com a aprovacao da media(agora que eu percebi era bem mais pratico ter escrito reseta a aprovacao da media)
    atvForm.atvGrade.value = ''; //reseta a nota do formulario
    atvForm.atvName.value = ''; //reseta o nome do formulario
}

cleanButton.addEventListener("click", clicaLimpa); //funcao do botao de limpeza
window.onload = inserirMedia; //quando a tela (o site) carrega, ele executa a funcao de limpeza

//UWU

/*
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
*/