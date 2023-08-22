const subButton = document.getElementById('subButton');
const cleanButton = document.getElementById('cleanButton');
const atvs = [];
const warning = document.getElementById('warning');
const atvsBody = document.querySelector('tbody');
const mediaElement = document.getElementById('media');
const aprovElement = document.getElementById('aprovacaoMedia');
const arrayMedia = [];
let media;
let aprovacao = '';
let aprovacaoMedia = '';
let atvForm;

function inserirMedia() {
    media = parseFloat(prompt("Escolha um valor para a média: "));
    if (isNaN(media) || media === null) {
        inserirMedia();
    }
}

subButton.addEventListener("click", function (event) {
    event.preventDefault();
    atvForm = document.getElementById('notaForm');
    let atvGrade = parseFloat(atvForm.atvGrade.value);

    if (atvForm.atvName.value === '' || isNaN(atvGrade) || atvGrade === 0) {
        warning.innerHTML = `<span style="color: red;">Insira valores válidos.</span>`;
    } else {
        atvs.push(atvForm.atvName.value);
        atvs.push(atvForm.atvGrade.value);

        arrayMedia.push(atvGrade);
        console.log(arrayMedia);
        let soma = 0;

        for (let i = 0; i < arrayMedia.length; i++) {
            soma += arrayMedia[i];
        }

        let somaMedia = soma / arrayMedia.length;

        mediaElement.innerText = somaMedia;

        
        
        if (somaMedia < media) {
            aprovacaoMedia = "Fail!";
        } else {
            aprovacaoMedia = "Yes!";
        }

        if (atvGrade < media) {
            aprovacao = "Fail!";
        } else {
            aprovacao = "Yes!";
        }
        
        // concertar o sistema de cores
       
        
        aprovElement.innerText = aprovacaoMedia;

        atvsBody.insertAdjacentHTML("afterbegin", `<tr> <td>${atvs[0]}</td> <td>${atvs[1]}</td> <td>${aprovacao}</td> </tr> `);
        atvs.length = 0;
        warning.innerHTML = '';

        
        
    }
});

function clicaLimpa(e) {
    e.preventDefault();
    atvsBody.innerHTML = '';
    arrayMedia.length = 0;
    mediaElement.innerText = '---';
    aprovElement.innerText = '---';
    atvForm.atvGrade.value = '';
    atvForm.atvName.value = '';
}

cleanButton.addEventListener("click", clicaLimpa);
window.onload = inserirMedia;
