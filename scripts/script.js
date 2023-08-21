const subButton = document.getElementById('subButton');
const atvs = [];
const warning = document.getElementById('warning');
const atvsBody = document.querySelector('tbody');
const mediaElement = document.getElementById('media');
const aprovElement = document.getElementById('aprovacaoMedia');
const arrayMedia = [];

let media = window.prompt("Escolha um valor para sua média: ");

subButton.addEventListener("click", function (event) {
    event.preventDefault();
    let atvForm = document.getElementById('notaForm');
    let atvGrade = parseInt(atvForm.atvGrade.value);

    let type = [typeof(atvForm.atvName.value), typeof(atvGrade)];

    if (atvForm.atvName.value == '' || atvForm.atvGrade.value == 0) {
        warning.innerHTML = `<span style="color: red;">Insira valores válidos.</span>`;
    } else {
        atvs.push(atvForm.atvName.value);
        atvs.push(atvForm.atvGrade.value);

        arrayMedia.push(atvGrade);
        console.log(arrayMedia);
        let soma = 0;

        for (let i=0;i < arrayMedia.length;i++) {
          console.log(i)
          soma += arrayMedia[i];
        }

        let somaMedia = soma / arrayMedia.length;

        mediaElement.innerText = somaMedia;

        if (somaMedia < media) {
          aprovacaoMedia = "Fail!";
        }else{
          aprovacaoMedia = "Yes!";
        }

        aprovElement.innerText = aprovacaoMedia;

        if (atvGrade < media) {
          aprovacao = "Fail!";
        }else{
          aprovacao = "Yes!";
        }


        console.log(atvs);
        atvsBody.insertAdjacentHTML("afterbegin" ,`<tr> <td>${atvs[0]}</td> <td>${atvs[1]}</td> <td>${aprovacao}</td> </tr> `);
        atvs.splice(0);
        atvs.splice(1);
        warning.innerHTML = '';
    }

})







//let valor = document.getElementById('texto').value;
//let textoFinal = document.getElementById('test');
//
//function getValue() {
//    valor = document.getElementById('texto').value;
//}
//
//
//
//function submited() {
//    getValue();
//    textoFinal.innerText = valor;
//}
//
//function clearText() {
//    textoFinal.innerText = '';
//}
