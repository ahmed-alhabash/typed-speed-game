let place_show = document.querySelector('.circles-letters')
let inputs = document.getElementById('inputs')
let counts = 0;
let letters = ['A','B','c','D','e','F','g','H','i','j','k','L','M','n','o','p','Q','r','s','t','u','v','W','X','w','Z']
function random(){
    let ran = letters[Math.floor(Math.random() * letters.length)]
    place_show.innerHTML = letters
}
random()