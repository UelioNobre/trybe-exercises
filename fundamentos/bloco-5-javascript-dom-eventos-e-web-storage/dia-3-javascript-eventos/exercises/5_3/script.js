function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Ex 1
// Obtem o container dos dias
const dayContainer = document.querySelector('#days');
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];


for (let day of decemberDaysList) {
  let dayLI = document.createElement('li');
  dayLI.innerText = day;
  dayLI.className = 'day';
  
  if (holidays.includes(day)) {
    dayLI.className += ' holiday';
  }
  
  if (fridays.includes(day)) {
    dayLI.className += ' friday';
  }

  dayContainer.appendChild(dayLI);
  dayLI.addEventListener('mouseover', daysZoomIn)
  dayLI.addEventListener('mouseleave', daysZoomOut)
}

// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
function createHolidaysButton(label) {
  const container = document.querySelector('.buttons-container');
  const tagButton = document.createElement('button');
  tagButton.innerText = label;
  tagButton.addEventListener('click', addHolidaysColors);
  container.appendChild(tagButton);
}
createHolidaysButton('Feriados');

function addHolidaysColors() {
  const holidays = document.querySelectorAll('.holiday');
  for (let holiday of holidays) {
    holiday.classList.toggle("holiday-color");
    console.log(holiday);
  }
}

// Ex 4
function createFridayBtn(label) {
  const container = document.querySelector('.buttons-container');
  const tagButton = document.createElement('button');
  tagButton.innerText = label;
  tagButton.setAttribute('id', 'btn-friday');
  tagButton.addEventListener('click', showFridays);
  container.appendChild(tagButton);
}

createFridayBtn('Sexta-feira');

// Ex 5
function showFridays() {
  const fridays = document.querySelectorAll('.friday');
  for (let friday of fridays) {
    friday.classList.toggle("friday-color");
    console.log(friday);
  }
}


// Ex 6
function daysZoomIn(event) {
  event.target.style.transform = 'scale(1.7)';
  event.target.style.transition = "all 0.3s"
}

function daysZoomOut(event) {
  event.target.style.transform = 'scale(1)';
}

// Ex 7
function createTodo(todo) {
  const myTasks = document.querySelector('.my-tasks');
  const tagSpan = document.createElement('span');
  tagSpan.innerText = todo
  myTasks.appendChild(tagSpan)
}
