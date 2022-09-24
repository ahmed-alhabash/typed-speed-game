let advancedenglish = document.querySelector('.advanced')
let relouds = document.querySelector('.relouded')
let circle = document.querySelector('.circle-new')
let box_show = document.querySelector('.box-show')
let timeall = document.querySelector('.smoll-circle')
let input = document.querySelector('.wright-code')
let mistec = document.querySelector('.smoll-circle-three')
let started = document.getElementById('started')
let corectalph = document.querySelector('.smoll-circle-four')
let corectword = document.querySelector('.smoll-circle-tow')
let circle_new = document.querySelector('.circle-new')
let box_all = document.querySelector('.box_all')
let arbicc = document.getElementById("arbic")
let english = document.getElementById("english")
const advanceden = document.querySelector('.advaanced-en')
let resolutsEnglish = document.querySelector(".resolutsEnglish")
let intro_four_english = document.querySelector('.intro-four-english')
console.log()
let moveTow =document.querySelector('.intro-towenglis')
let introenglish = document.querySelector('.introenglish')
let intro_three_englis  =document.querySelector('.intro-three-englis')
let informspan_one =document.querySelector('.erstimeinglish') 
let informspan_tow =document.querySelector('.ersc-eglish') 
let informspan_three =document.querySelector('.ersb-englis') 
let informspan_four =document.querySelector('.ersd-english') 
let index = mistace=  0;
let miss = 0
let indexArrbic = 0
// english mood
let english_mood = [
"between one over water thing saw tree America untill America close around only side for really group side for really group men know world high and by been let that set eye still let blew hand air then he read began city head city try try no she stop life mean sentence ",
'now three after night river but would had are hear well he under try childern write head for have could thought learn quick they grow hight get word stop number four its learn back very once does river great and car keep light anther grow man long world through would around face page',
'sometimes world been  does water spell still earth plant way big second get help began miss many old much open quite its call way above down three quick if take always its they would never qustion hand white make once or lice tree answer is mile tme great always sentence call',
'take water my like like togther enough any these such which on old does grow on light may came list name list kind go along girl small your really list sea had its di part began young both point father hand house by you start form so because through been intro boy each food paper',
'konw set somthings leave different school every by she house own with untill threr give and follow my without animal mother been more mean below without feet right cut start very men back next imporant walk look is America though litle said air tell near her then around large with for'
]
// reloud 
relouds.addEventListener('click',()=>{
  randomUP()
  input.focus()
})
// random
function randomUP(){
  let random = Math.floor(Math.random() * english_mood.length)
  let indexs = english_mood.indexOf(random)
  // english_mood.splice(indexs,1)
  box_show.innerHTML = ""
  english_mood[random].split('').forEach(span=>{
    let spans = `<span>${span}</span>`
    box_show.innerHTML += spans
  })
}

function show_data(){
  let catogery = box_show.querySelectorAll('span')
  let inputvalues = input.value.split("")[index]
if(inputvalues == null){
index --;
if(catogery[index].classList.contains('remo')){
  mistace --
}
catogery[index].classList.remove('add','remo')
}else{
  if(catogery[index].innerText === inputvalues){
    catogery[index].classList.add('add')
  }else{
    catogery[index].classList.add('remo')
    mistace ++
  }
  index ++ 
}
catogery.forEach(span=>span.classList.remove('toor'))
catogery[index].classList.add('toor')
mistec.innerHTML = mistace
informspan_three.innerHTML = mistec.innerHTML
corectalph.innerText = index - mistace
informspan_four.innerHTML = corectalph.innerHTML
let correcta = Math.round(((index + mistace )/5 -2))
corectword.innerHTML = correcta
informspan_tow.innerHTML = corectword.innerHTML
if(corectalph.innerHTML > 150){
  corectalph.style.background = 'green'
}else{
  corectalph.style.background = '#000000d6'
}
if(mistec.innerHTML > 50){
  mistec.style.background = 'red'
}else{
  mistec.style.background = '#000000d6'
}
}

input.addEventListener('input',show_data)
// time function
function gettime(){
let starts=  setInterval(()=>{
   timeall.innerHTML -- 
   if(timeall.innerHTML == 0){
    clearInterval(starts)
    resolutsEnglish.style.display ='block'
   input.remove()
   box_show.remove()
   circle.remove()
   relouds.remove()
   }else{
    if(timeall.innerHTML < 10){
      timeall.style.background = 'red'
    }
   }
  },1000)
}

// arbic varbiale
// alot of varibales to acsess on elements
let language_show = document.querySelector('.Choosealanguage .bord ')
console.log(language_show)
let language_i = document.querySelector('.Choosealanguage .show i')
let advanced_arbic = document.querySelector('.advanced-arbic')
let key_arbic = document.getElementById('keyArbic')
let one = document.querySelector('.one')
let tow = document.querySelector('.tow')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let card = document.querySelector('.card-show')
let circles  = document.querySelector('.circles')
let resold = document.querySelector('.resoluts')
let btns= document.getElementById('btns')
let btns_englis =document.getElementById('btns-englis')
let ind = errors = 0;
let ersb = document.querySelector('.ersb')
let ersc = document.querySelector('.ersc')
let ersd = document.querySelector('.ersd')
let erstime = document.querySelector('.erstime')
let x = document.querySelector('.resoluts .x')
let y = document.querySelector('.resoluts .y')
let a = document.querySelector('.a')
let b = document.querySelector('.b')
let b_b = document.querySelector('.intro-tow')
let c = document.querySelector('.c')
let d = document.querySelector('.d')
// data arbic
let arbic_mood = [
  'البرت انشتاين عالم الماني الجنسية اشتهر بأب النسبية وقد طور العديد من النظريات العلمية التي ساعدت البشر بشكل كبير جدا في مجال الفيزياءوقد حصل علي جائزة نوبل في الفزياء البرت انشتاين عالم الماني الجنسية اشتهر بأب النسبية وقد طور العديد من النظريات العلمية التي ساعدت البشر بشكل كبير جدا في مجال الفيزياء',
  'ولد ابن تيمية في حران للفقيه الحنبلي عبد الحليم ابن تيمية ونشأ نشأته الاولى في مدينة حران بعد بلوغه سن السابعة هاجرت عائلته منها الى مدينة دمشق بسبب اغارة التتار عليها واجه ابن تيمية السجن عدة مرات لقد بنى أصحاب هذا القانون موقفهم على أن العقل هو أساس النقل، فبالعقل عرفنا ربنا، وبالعقل عرفنا صدق النبي محمد صلى الله عليه وسلم',
  'تونس مدينة عصرية ومزدهرة  ومجيدة التاريخ  ،فهي  لا تتوقف  عن مفاجأتك. من جانب المدينة العتيقة ، عديد  البناءات القديمة تفتح أبوابها،  بعضها  تحولت إلى متاحف وأخرى إلى دور ثقافة أو  إلى مطاعم  و مقاهى وقاعات شاي. مدرجة من قبل منظمة اليونسكو على قائمة التراث العالمي، المدينة العتيقة تحتوي على نفائس معمارية مما',
  'هاجر الرسول محمّد عليه السلام من مكّة المكرّمة بعد 13 عاماً منذ بعثته وذلك لشدّة الأذى الذي تعرّض له ولأصحابه من المشركين النبي محمّد عليه الصلاة والسلام، من مكة المكرمة، من قبيلة قريش، وهو يتيم الأب، وأمه آمنة بنت وهب التي توفيت وهو في عمر الـ 6 سنوات، ومرضعته حليمة السعدية، إذ رباه جده عبد المطلب وعندما توفي جده رباه عمه أبو طالب، ',
  'جافا سكريبت هي لغة برمجة صممت في الأصل لإضافة مؤثرات وتفاعلات لصفحات الويب، ويعنى بالتفاعلات كل ما يتم عمله أو إجراؤه على مستوى المتصفح من دون الحاجة لإعادة تحميل الصفحة. نذكر على سبيل المثال هناك حدود يحاط بها الجافا سكريبت في المتصفح بحيث لا يستطيع تجاوزها، والهدف بكل تأكيد هو حماية بيانات '
]
// reloud click 
circles.onclick = ()=>{
  key_arbic.focus()
  again()
}
// random word 
function again(){
let again = Math.floor(Math.random() * arbic_mood.length)
card.innerHTML = ""
arbic_mood[again].split("").forEach(span=>{
  let element = `<span>${span}</span>`
  card.innerHTML += element
})
}
function data(){
  let allelements = card.querySelectorAll('span')
  let key = key_arbic.value.split("")[ind]
  if(key == null){
    ind --;

    
    if(allelements[ind].classList.contains('bad')){
      errors --;
    }
    allelements[ind].classList.remove('good','bad')
  }else{
    if(allelements[ind].innerHTML === key){
      allelements[ind].classList.add('good')
     }else{
      allelements[ind].classList.add('bad')
      errors ++
     }
     ind ++;
  }
  tow.innerHTML= errors
  let count = Math.round(((ind + errors )/5 - 2)) 
  console.log(`you count is${count}`)
  allelements.forEach(span=>span.classList.remove('act'))
  allelements[ind].classList.add('act')
  three.innerHTML = count
  four.innerHTML = ind - errors
  ersb.innerHTML = tow.innerHTML
  ersc.innerHTML = three.innerHTML
  ersd.innerHTML = four.innerHTML
  if(tow.innerHTML > 50){
    tow.style.background = 'red'
  }else{
    tow.style.background = '#000000d6'
  }
  if(four.innerHTML > 200){
    four.style.background = 'green'
  }else{
    four.style.background = '#000000d6'
  }

}
// function set time 
function oclock(){
   
  let coll = setInterval(()=>{
    one.innerHTML --
    if(one.innerHTML === '0'){
      clearInterval(coll)
       resold.style.display = 'block'
       advanced_arbic.remove()
    }else{

  

      
      if(one.innerHTML < 10){
        one.style.background = 'red'
      }
    }
  },1000)
}
key_arbic.addEventListener('input',data)

// sound 

// click to english mood
english.onclick = ()=>{
advanced_arbic.style.display = 'none'
advanceden.style.display = 'block'
language_i.remove()
language_show.remove()
randomUP()
gettime()
input.focus()
}
btns_englis.onclick = ()=>{
  btns_englis.remove();
  one_ele();
  tow_ele();
  three_ele();
  four_ele();
  informspan_one.style.display = 'block'
  informspan_tow.style.display = 'block'
  informspan_three.style.display = 'block'
  informspan_four.style.display = 'block'
}

// function one 
function one_ele(){
  introenglish.style.height = introenglish.dataset.target
}
function tow_ele(){
  moveTow.dataset.target = mistec.innerHTML +'px'
  moveTow.style.height = moveTow.dataset.target
}
function three_ele(){
  intro_three_englis.dataset.target = corectword.innerHTML + 'px'
  intro_three_englis.style.height = intro_three_englis.dataset.target
}
function four_ele(){
  intro_four_english.dataset.target = corectalph.innerHTML +'px'
  intro_four_english.style.height = intro_four_english.dataset.target
}






                                  //  arbic 

// click to arbic mood
arbic.onclick = ()=>{
  advanceden.style.display = 'none'
  advanced_arbic.style.display = 'block'
  language_i.remove()
  language_show.remove()
  again()
  oclock()
  key_arbic.focus()
}
let loading = document.querySelector('.loading')
setInterval(()=>{
loading.remove()
},1500)




// click to see the resoult
btns.onclick = function(){
  x.style.display = 'block'
  y.style.display = 'block'
  a.style.display = 'block'
  b.style.display = 'block'
  c.style.display = 'block'
  d.style.display = 'block'
  store()
  storetow()
  storethree()
  storefour()
  console.log('ok')
  btns.remove()
  erstime.style.display = 'block'
  ersb.style.display = 'block'
  ersc.style.display = 'block'
  ersd.style.display = 'block'
}
// function one to data target
let allspens = document.querySelector('.intro')
function store(){
allspens.style.height = allspens.dataset.target
}
// function tow to data target
let allspenstow = document.querySelector('.intro-tow')
console.log(allspenstow)
function storetow(){
  allspenstow.dataset.target = tow.innerHTML + 'px'
  allspenstow.style.height = allspenstow.dataset.target
}
// function three to data target
let allspensthree = document.querySelector('.intro-three')
console.log(allspensthree)
function storethree(){
  allspensthree.dataset.target = three.innerHTML + 'px'
  allspensthree.style.height = allspensthree.dataset.target

}
// function four to data target
let allspensfour = document.querySelector('.intro-four')
console.log(allspensfour)
function storefour(){
  allspensfour.dataset.target = four.innerHTML + 'px'
  allspensfour.style.height = allspensfour.dataset.target

}











































