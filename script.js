var textInput = document.querySelector("#texto-vazio");
var outInput = document.querySelector("#container-imagem")



function criptografar(){

    var texto = textInput.value;
  
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    
  document.getElementById('container-imagem').innerHTML = '<textarea readonly id="texto-vazio">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('container-imagem').innerHTML = '<textarea readonly id="texto-vazio">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('texto-vazio');
  
    textoCop.select();
    document.execCommand('copy');
    
}
  
      










