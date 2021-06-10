console.log('hello world')

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