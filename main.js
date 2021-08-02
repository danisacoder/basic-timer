let timerText = document.getElementById('timer-text')
let timerNum = document.getElementById('timer-num')


timerText.addEventListener('dblclick', function() {
  // console.log('Hello');
  editText();
}
)

function editText() {
  let existingText = timerText.textContent;
  console.log(existingText);
  timerText.innerHTML = `<input type='text' id='timer-text-field' name='timer-text-field' value='${existingText}'>`
}

document.addEventListener('click', function() {
  let timerTextField = document.body.getElementById('timer-text-field').value;

  timerText.innerHTML = `${timerTextField}`
})
