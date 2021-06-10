console.log('hello world')
//primo esercizio
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
const studente = {
    nome: 'Paolo',
    cognome: 'Rossi',
    età: 40
}
// Stampare a schermo attraverso il for in tutte le proprietà;
for (let dati in studente){
    console.log(studente[dati])
    document.getElementById('first-studente').innerHTML +=  studente[dati] + '<br>'
}
// Creare un array di oggetti di studenti.
const studenti = [
    {
        nome: 'Paolo',
        cognome: 'Rossi',
        età: 40
    },
    {
        nome: 'Carlo',
        cognome: 'Bianchi',
        età: 20
    },
    {
        nome: 'Gianni',
        cognome: 'Boh',
        età: 18
    }
]
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (let index = 0; index < studenti.length; index++) {
    console.log(studenti[index].nome, studenti[index].cognome)  
    document.getElementById('tot-studenti').innerHTML+= 'Studenti' + ' ' +studenti[index].nome + ' ' + studenti[index].cognome + '<br>';
}

//secondo esercizio
// creare un array di frutta
let arraySecondo = ['Mela', 'Pera', 'Arancia', 'Pesca'];
for (let index = 0; index < arraySecondo.length; index++) {
    document.getElementById('frutta').innerHTML += arraySecondo[index] + ' ';
    
}


// chiedere all'utente l'inserimento di un frutto
let inserimento = prompt('scegli un frutto');

// se il frutto è presente nell'array ritornare presente in caso contrario mancante
if (arraySecondo.includes(inserimento)){
    console.log('Presente');
    document.getElementById('presenza').innerHTML = 'Presente';
} else {
    console.log('Mancante')
    document.getElementById('presenza').innerHTML = 'Mancante';
}