
const block = document.querySelector('.question-counter')
const quest1 = document.getElementById('quest1')
const quest2 = document.getElementById('quest2')
const quest3 = document.getElementById('quest3')
const quest4 = document.getElementById('quest4')
const quest5 = document.getElementById('quest5')
const quest6 = document.getElementById('quest6')
const questionOn = document.querySelector('.questionOn');
const questionTo = document.querySelector('.questionTo');
const questionThe = document.querySelector('.questionThe');

quest1.addEventListener('click', function (evt){
    evt.preventDefault();
    questionOn.classList.add('close-quest');
    questionTo.classList.remove('close-quest');
    item = 1
})

quest2.addEventListener('click', function (evt){
    evt.preventDefault();
    questionOn.classList.add('close-quest');
    questionTo.classList.remove('close-quest');
    item = 2
})

quest3.addEventListener('click', function (evt){
    evt.preventDefault();
    questionTo.classList.add('close-quest');
    questionThe.classList.remove('close-quest');
    item = item + 1
})

quest4.addEventListener('click', function (evt){
    evt.preventDefault();
    questionTo.classList.add('close-quest');
    questionThe.classList.remove('close-quest');
    item = item + 2
})

quest5.addEventListener('click', function (evt){
    evt.preventDefault();
    questionThe.classList.add('close-quest');
    item = item + 1
    const contElement = document.createElement('div');
    contElement.classList.add('contElement');
    const text = document.createElement('H1');
    text.textContent = `Ваш ответ: ${item}`;
    contElement.appendChild(text)
    block.appendChild(contElement)
})

quest6.addEventListener('click', function (evt){
    evt.preventDefault();
    questionThe.classList.add('close-quest');
    item = item + 2
    const contElement = document.createElement('div');
    contElement.classList.add('contElement');
    const text = document.createElement('H1');
    text.textContent = `Ваш ответ: ${item}`;
    contElement.appendChild(text)
    block.appendChild(contElement)
})

