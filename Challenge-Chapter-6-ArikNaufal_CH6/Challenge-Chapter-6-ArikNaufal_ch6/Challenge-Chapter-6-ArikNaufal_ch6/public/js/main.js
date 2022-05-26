//for loop. input css property
const playerBackground = document.querySelectorAll('.player li')
arrBg = Array.from(playerBackground);

for(let i = 0; i < arrBg.length; i++){
  arrBg[i].style.backgroundColor = 'transparent';
}

// computer random choice
function getCom (){
  let com = Math.random()

  if(com < 0.3){
    return "rock"
  } else if (com >= 0.3 && com <0.6){
    return "paper"
  } else{
    return  "scissor"
  }
}


// game's rules
const rules = (player, computer)=> {
  let trigger = false;
  if(player == computer){
    return "DRAW"
  } else if(player == "rock"){
    if(computer == "scissor"){
      return "WIN"
    }else {
      return "LOSE"
    }
  } else if(player == "paper"){
    if(computer == "rock"){
      return "WIN"
    }else {
      return "LOSE"
    }
  } else if(player == "scissor"){
    if(computer == "paper"){
      return "WIN"
    }else {
      return "LOSE"
    }
  }
}

//cheat rules
const cheat = (player, computer) =>{
  trigger = true
  if(player == computer){
    return "DRAW"
  } else if(player == "rock"){
    computer = "scissor"
    return "WIN";
  } else if(player == "paper"){
    computer = "rock"
    return "WIN";
  } else{
    computer = "paper";
    return "WIN";
  }
}

//change rules
count = 0
const changeRules = ()=> {
  count += 1;
  if(count < 3){
    rules();
    console.log('cheat deactivated')
  }else{
    cheat();
    console.log('cheat activated')
  }
}

// get the element
const getScissor = document.querySelector('.player .img-container li:nth-child(1)')
const getRock = document.querySelector('.player .img-container li:nth-child(2)')
const getPaper = document.querySelector('.player .img-container li:nth-child(3)')
const result = document.querySelector('.result')
const comImg = document.querySelector('.com .img-container li:nth-child(2) img')

// event for rock 
const rock = ()=>{
  const A_CCOMPUTER = getCom();
  const A_PLAYER = 'rock';
  const RESULT = rules(A_CCOMPUTER, A_PLAYER)

  result.innerHTML = RESULT;

  if(RESULT == 'WIN'){
    comImg.src = '../images/scissor.png'
    result.style.backgroundColor = "rgba(185, 250, 6, 0.5)";
  } else if(RESULT == 'LOSE'){
    comImg.src = '../images/papper.png'
    result.style.backgroundColor = "rgba(255, 38, 0, 0.549)";
  } else{
    comImg.src = '../images/rock.png'
  }
  getRock.className = 'img-bg';

  getScissor.removeEventListener('click', scissor)
  getRock.removeEventListener('click', rock)
  getPaper.removeEventListener('click', paper)
  result.addEventListener('click', refresh)

  stop()
}

getRock.addEventListener('click', rock)

// event for paper
const paper = ()=>{
  const A_CCOMPUTER = getCom();
  const A_PLAYER = 'paper';
  const RESULT = rules(A_CCOMPUTER, A_PLAYER)

  result.innerHTML = RESULT;

  if(RESULT == 'WIN'){
    comImg.src = '../images/rock.png'
    result.style.backgroundColor = "rgba(185, 250, 6, 0.5)";
  } else if(RESULT == 'LOSE'){
    comImg.src = '../images/scissor.png'
    result.style.backgroundColor = "rgba(255, 38, 0, 0.549)";
  } else{
    comImg.src = '../images/papper.png'
  }
  getPaper.className = 'img-bg';

  getScissor.removeEventListener('click', scissor)
  getRock.removeEventListener('click', rock)
  getPaper.removeEventListener('click', paper)
  result.addEventListener('click', refresh)

  stop()
}

getPaper.addEventListener('click', paper)

// event for scissor
const scissor = ()=>{
  const A_CCOMPUTER = getCom();
  const A_PLAYER = 'scissor';
  const RESULT = rules(A_CCOMPUTER, A_PLAYER) 

  result.innerHTML = RESULT;

  if(RESULT == 'WIN'){
    comImg.src = '../images/papper.png'
    result.style.backgroundColor = "rgba(185, 250, 6, 0.5)";
  } else if(RESULT == 'LOSE'){
    comImg.src = '../images/rock.png'
    result.style.backgroundColor = "rgba(255, 38, 0, 0.549)";
  } else{
    comImg.src = '../images/scissor.png'
  }
  getScissor.className = 'img-bg';

  getScissor.removeEventListener('click', scissor)
  getRock.removeEventListener('click', rock)
  getPaper.removeEventListener('click', paper)
  result.addEventListener('click', refresh)

  stop()
}

getScissor.addEventListener('click', scissor);

// scrabble the computer image
let IMAGE_TRACKER = 'scissor';

function changeImg(){
  if(IMAGE_TRACKER == 'scissor'){
    comImg.src = '../images/scissor.png';
    IMAGE_TRACKER = 'rock';
  } else if(IMAGE_TRACKER == 'rock'){
    comImg.src = '../images/rock.png';
    IMAGE_TRACKER = 'paper';
  } else{
    comImg.src = '../images/papper.png';
    IMAGE_TRACKER = 'scissor';
  }
}

let timer = setInterval('changeImg()', 100);

function stop(){
  clearInterval(timer)
}

// show modal without trigger
$(window).on('load', function(){
    $('#exampleModal').modal('show');
});

//popover bootstrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//refresh function
const reset = ()=>{
  let result = document.querySelector('.result');
  result.innerText = "refresh";
  result.style.fontWeight = 'lighter';
}

const antiReset = ()=>{
  let result = document.querySelector('.result')
  result.innerText = ' ';
  result.style.fontWeight = 'bold';
}

const refresh = ()=>{
  result.innerText = ' ';
  result.style.backgroundColor = "rgba(107, 107, 107, 0.5)";

  getScissor.classList.remove('img-bg');
  getPaper.classList.remove('img-bg');
  getRock.classList.remove('img-bg');

  timer = setInterval('changeImg()', 100);

  getPaper.addEventListener('click', paper);
  getScissor.addEventListener('click', scissor);
  getRock.addEventListener('click', rock);

  result.removeEventListener('click', refresh)
}
