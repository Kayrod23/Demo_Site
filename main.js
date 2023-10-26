// https://pokeapi.co/api/v2/pokemon/charmander
console.log("javascript is working");

function initialize () {
    fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log('Data =>', data)
    }) 
}

initialize();