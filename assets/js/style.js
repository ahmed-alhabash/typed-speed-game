let bourd = document.querySelector('.bourd')
let rtl = document.getElementById('rtl')
let ltr = document.getElementById('ltr')
window.onclick = ()=>{
    bourd.style.display = 'block'
}
rtl.onclick = ()=>{
    show_arbic()
    input.focus()
}
ltr.onclick = ()=>{
    show_data()
    input.focus()
}



let li = document.querySelectorAll('.nav li')
console.log(li)



let alphabet = [
    'AB','c','D','e','F','g','H','i','j','k','L','M','n','o','p','Q','r','s','t','u','v','W','X','w','Z'
]


// selectors 
let input = document.getElementById('input')
let word_show =document.querySelector('.ariafiled .word-show')
let time_left = document.querySelector('.time_left')
let word_show_div = document.querySelector('.ariafiled .word-show div')
let reloud =document.querySelector('.reloud')
let array_word =document.querySelector('.array-word')
let start = document.getElementById('starts')
let loading = document.querySelector('.loading')
console.log(word_show)

// reloud the window 
console.log(reloud)
reloud.onclick = ()=>{
    
    show_data()
}
// reloud the window 

start.onclick = ()=>{
    start.remove()
    input.style.display = 'block'
    word_show.style.display = 'block'
    time_left.style.display = 'block'
    reloud.style.display = 'block'
    input.focus()

    
    
}

// english mode

function show_data(){
let randow = alphabet[Math.floor(Math.random() * alphabet.length)]
let indexalphabet = alphabet.indexOf(randow)
alphabet.splice(indexalphabet,1)
word_show.innerHTML = '';
word_show.innerHTML = randow

    time()
}

function time(){
 time_left.innerHTML = 2
    let setalpha = setInterval(()=>{
         time_left.innerHTML --
         if(time_left.innerHTML == '0'){
            clearInterval(setalpha)
         if(input.value == word_show.innerHTML){
            input.value = ''
            if(alphabet.length > 0){
                show_data();
            }else{
                word_show.innerHTML ='Win'
                word_show.style.background = 'green'
                word_show.style.fontSize = '70px'
                word_show.style.color = 'white'
            }
         }else{
            location.reload()
         }
         }
         
    },1000)
}
// arbic mode 
let arbic_alphabet = [
'ا',
'ب',
'ت',
'ث',
'ج',
'ح',
'خ',
'د',
'ذ',
'ر',
'ز',
'س',
'ش',
'ص',
'ض',
'ط',
'ظ',
'ع',
'غ',
'ف',
'ق',
'ك',
'ل',
'م',
'ن',
'ه',
'و',
'ي',
]
// english mode end
function show_arbic(){
    time_left.innerHTML = 2
   let randomar = arbic_alphabet[Math.floor(Math.random() * arbic_alphabet.length)]
   let arbicindex = arbic_alphabet.indexOf(randomar)
   arbic_alphabet.splice(arbicindex,1)
   word_show.innerHTML = ''
   word_show.innerHTML = randomar
   time_arbic()
} 
function time_arbic(){
    time_left.innerHTML = 2
       let setalpha = setInterval(()=>{
            time_left.innerHTML --
            if(time_left.innerHTML == '0'){
               clearInterval(setalpha)
            if(input.value == word_show.innerHTML){
               input.value = ''
               if(arbic_alphabet.length > 0){
                   show_arbic();
               }else{
                   word_show.innerHTML ='ربحت'
                   word_show.style.background = 'green'
                   word_show.style.fontSize = '70px'
                   word_show.style.color = 'white'
                   input.remove()
                   reloud.remove()
                   time_left.remove()
               }
            }else{
                location.reload()
             }
            }
        },1000)
    }

// arbic mode end
// html page search 
// html page search end 
// str.onclick = function(){
//     clickAudio()
// }
// function  clickAudio(){
//     let Audi0 = new Audio('win.mp3')
//     Audi0.play()
//   }   
  

 setInterval (()=>{
loading.remove()
},2000)
console.log('HEELO')





















