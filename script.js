const btnMenos = document.querySelectorAll('.btnMenos');
const btnMais = document.querySelectorAll('.btnMais');
const inputs = document.querySelectorAll('.valorMult');
const tot = document.querySelector('#total');

const labels = document.querySelectorAll('label');
const quantidades = document.querySelectorAll('input');

const finalizar = document.querySelector('#finalizar');

const perguntaFinalizar = document.querySelector('.perguntaFinalizar');

let conta = [];

function somaTotalProdutos(arrayEscolhida){
    let somaSorvetes = arrayEscolhida.reduce((acumulador, elemento) => {
      return acumulador + elemento;
    }, 0);
    return somaSorvetes;
  }

const arrayInpus = Array.from(inputs)

function contar(){
    conta = [];

    arrayInpus.forEach((input) =>{
        let value = +input.innerHTML
        if(value > 0){
        conta.push(value);
        tot.innerHTML = somaTotalProdutos(conta).toFixed(2)
        }
    })
}



const mapa = {
    'pclGroselha':1.50,
    'pclChiclete':1.50,
    'pclPinta':1.50,
    'pclChocolate':2.80,
    'pclMilho':2.80,
    'pclCoco':2.80,
    'pclCocoQueimado':2.80,
    'pclLeiteCondensado':2.80,
    'pclMorango':2.80,
}

btnMais.forEach((button) =>{
    button.addEventListener('click', ()=>{
    let produto = button.parentElement.firstElementChild.nextElementSibling.id;

    let valor = button.parentElement.firstElementChild.nextElementSibling.value ++;
    valor++
    let mostrar = button.parentElement.lastElementChild.lastElementChild;
    mostrar.innerHTML = (mapa[produto] * valor).toFixed(2);
    contar();
    });
});

btnMenos.forEach((button) =>{
    button.addEventListener('click', ()=>{
    let produto = button.parentElement.firstElementChild.nextElementSibling.id;

    
    let valor = button.parentElement.firstElementChild.nextElementSibling.value--;
    valor--
    let mostrar = button.parentElement.lastElementChild.lastElementChild;
    mostrar.innerHTML = (mapa[produto] * valor).toFixed(2);

    if((valor - 1) < 0) {
        button.parentElement.firstElementChild.nextElementSibling.value = 0;
        mostrar.innerHTML = '0.00';
        tot.innerHTML = '';
    }
    contar();
    });
});

finalizar.addEventListener('click', ()=>{
    perguntaFinalizar.classList.add('ativar')
    arrayInpus.forEach((input, i) =>{
        let value = +input.innerHTML
        if(value > 0){
            
            let label = labels[i].innerText;
            let quantidade = quantidades[i].value;
            let valorUni = mapa[quantidades[i].id];
            let mensagem = `${label} ${valorUni} x ${quantidade}un R$ ${value.toFixed(2)}`
            
            listaWhatsApp.push(mensagem)

        }
    })
})


function fechar(){
    listaWhatsApp = []
    perguntaFinalizar.classList.remove('ativar')
    
}

let listaWhatsApp = []
const bairro = document.querySelector('#bairro').value;
const formaPgt = document.querySelector('#formaPgt').value;
const caminho = document.querySelector('#caminho');
const boasVindas = `Olá, gostaria de fazer um pedido! `

function enviarWhatsApp(){
    let total  = somaTotalProdutos(conta).toFixed(2)
    let novaMensagem = listaWhatsApp.toString().replaceAll(',', '%0A')
  
    
    caminho.setAttribute('href', `https://api.whatsapp.com/send?phone=13997379899&text=${boasVindas}%0A%0A${novaMensagem}%0A%0A${formaPgt}%0ATAXA: R$${bairro}%0ATOTAL: R$${total}`);
}




