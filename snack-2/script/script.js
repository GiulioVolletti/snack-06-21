console.log('hello world');

//incremento numerico con ciclo for
const prova = 0;
let calcolo = (num) => {
    for (let index = 0; index < 5; index++) {
        //console.log(num)
         num++;
        
    }
   return num
}

//incremento numerico con click sul pulsante
let provaPulsante = 0;
document.getElementById('aumento').innerHTML= provaPulsante;

let pulsante = document.getElementById('provapulsante');
pulsante.addEventListener('click', function(){
    provaPulsante++
    console.log(provaPulsante)
    //cambio colore e classe ogni volta che il valore numerico si può dividere per 2
    if(provaPulsante % 2 == 0){
        pulsante.style.color = 'red';
        pulsante.className = 'rosso';
    } else {
        pulsante.style.color = 'black';
        pulsante.className = '';
    }
    document.getElementById('aumento').innerHTML= provaPulsante; 
})

console.log(calcolo(prova))

