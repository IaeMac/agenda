const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let linhas ="";

form.addEventListener("submit" , function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById("nome-agenda");
    const inputTelAgenda = document.getElementById("tel-agenda");

    if(telefones.includes(parseFloat(inputTelAgenda.value))){
        alert(`O numero de telefone: ${inputTelAgenda.value} já foi inserido`)
    }else{
    nomes.push(inputNomeContato.value);
    telefones.push(parseFloat(inputTelAgenda.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td> `
    linha +=`<td>${inputTelAgenda.value}</td>`
    linha += "</tr>"

    linhas += linha;
    }

    inputNomeContato.value =""
    inputTelAgenda.value=""
}


function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}