
console.log('hello world');

// direct
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
request.send();
request.onload = () => {
    console.log()
    if(request.status === 200){
        console.log(JSON.parse(request.response))
    } else {
        console.log('error ${request.status}')
    }
}

// fetch api
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
   return response.json();
}).then(json => {
    console.log(json);
})

//second fetch 
async function getInfo() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    return data;
}

getInfo().then(response =>{ console.log(response)})


// jquery 
$(document).ready(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/1',
        type: 'GET',
        success: function (result2){
            console.log(result2)
        },
        error: function(err){
            console.log(err)
        }
    })
})