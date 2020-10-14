import binToDec from './src/helper/BinToDec.js';

const binField = document.getElementById('binField');
const decField = document.getElementById('decimal');

var oldValue = 0;   

binField.oninput = (event) => {
    if(/^[0-1]{0,8}$/.test(event.target.value)) {
        console.log(`Válido: ${event.target.value}`);
        oldValue = event.target.value;
        decField.innerText = binToDec(oldValue);
    } else {
        console.log(`Inválido: ${event.target.value}`);
        event.target.value = oldValue;
    }    
}
