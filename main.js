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

const pkFrom = document.getElementById('pk-from');
const pkName = document.getElementById('pk-form');

pfForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkName.value}`)
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log('Data =>', data)
    }) 
})