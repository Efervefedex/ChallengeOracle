const input = document.querySelector("#input");
const output = document.querySelector(".barra-lateral")

input.oninput = verificarinput;

var salida;

function mostrarSalida(){
    const elemento = document.querySelector("#salida");
    const hijo = document.createTextNode('');
    elemento.innerHTML = '';
    elemento.appendChild(hijo);
    salida = hijo;
}

mostrarSalida();

function Cod(x) {
    switch(x) {
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'a': return 'ai';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
    }
  }


function codificar(texto){
    var resultado = '';
    for (const caracter of texto){
        resultado += Cod(caracter)
    }
    return resultado;
}



function clickCodificar(){
    var text = input.value;
    input.value = '';
    if(text.length===0){
        salida.nodeValue = '';
        output.classList.remove('con-salida');
    } 
    else{
        salida.nodeValue = codificar(text);
        output.classList.add('con-salida');
    }
}



function clickDecodificar(){
    var text = input.value;
    input.value ='';
    if(text.length===0){
        salida.nodeValue = '';
        output.classList.remove('con-salida');
    }
    else{
        try {
            salida.nodeValue = decodificar(text);
        } catch (O_o) {
            salida.nodeValue = 'error'
        }
        output.classList.add('con-salida');
    }
}

function decodificar(text){
    var resultado = '';
    for (var i = 0; i < text.length;) {
     switch (text[i]) {
         case 'a' : 
             if (text[i+1]==='i') {
               resultado +=text[i]
               i+=2
             }
             else{
                error();
            }
             break;
        case 'e' :
            if (text[i+4]==='r') {
                resultado +=text[i]
                i+=5
            }
            else{
                error();
            }
            break;
        case 'i' :
            if (text[i+3]==='s') {
                resultado +=text[i]
                i+=4
            }
            else{
                error();
            }
            break;
        case 'o' :
            if (text[i+3]==='r') {
                resultado +=text[i]
                i+=4
            }
            else{
                error();
            }
            break;
        case 'u':
            if (text[i+3]==='t') {
                resultado +=text[i]
                i+=4
            }
            else{
                error();
            }
            break;
     
         default: resultado +=text[i++]
             break;
     }   
    }
    return resultado;
}

function error() {
    throw new SyntaxError('invalido');
}










const noperm = /[^a-z]/g
function verificarinput(ev){
    const{
        inputType,target,data
    }=ev
    if(inputType==='insertText') {
        noperm.lastIndex=0
        if(noperm.test(data)){
            let value = target.value
            target.value = value.substring(0,value.length-1)
            alert('Solo letras Minusculas y sin acento')
        }
    }
    else if(inputType==='insertFromPaste'){
        let value = data|| target.value||''
        value = value.toLowerCase()
        target.value = value.replace(noperm,'') 
     if(target.value !== value){
        alert('Texto Modificado')
     }
    }
}
