const display = document.getElementById('display')


function keyInput(input){
  display.value += input
}

function calculate(){
  display.value = eval(display.value)
}

function clearInput() {
  display.value = ''
}

function del(){
  display.value = display.value.slice(0, -1)
}

