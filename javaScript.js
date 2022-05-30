const block = document.querySelector('.question-counter')
const quest1 = document.getElementById('quest1-1')
const quest2 = document.getElementById('quest1-2')
const quest3 = document.getElementById('quest3')
const quest4 = document.getElementById('quest4')
const quest5 = document.getElementById('quest5')
const quest6 = document.getElementById('quest6')
const quest7 = document.getElementById('quest7')
const quest8 = document.getElementById('quest8')
const quest9 = document.getElementById('quest9')
const quest10 = document.getElementById('quest10')
const quest11 = document.getElementById('quest11')
const quest12 = document.getElementById('quest12')
const quest13 = document.getElementById('quest13')
const quest14 = document.getElementById('quest14')
const quest15 = document.getElementById('quest15')
const quest16 = document.getElementById('quest16')
const quest17 = document.getElementById('quest17')
const quest18 = document.getElementById('quest18')
const quest19 = document.getElementById('quest19')
const quest20 = document.getElementById('quest20')
const quest21 = document.getElementById('quest21')
const quest22 = document.getElementById('quest22')
const quest23 = document.getElementById('quest23')
const quest24 = document.getElementById('quest24')
const quest25 = document.getElementById('quest25')
const quest26 = document.getElementById('quest26')
const quest27 = document.getElementById('quest27')
const quest28 = document.getElementById('quest28')
const quest29 = document.getElementById('quest29')


const questionOn = document.querySelector('.questionOn');
const questionTo = document.querySelector('.questionTo');
const questionThe = document.querySelector('.questionThe');
const questionFo = document.querySelector('.questionFo');
const questionFive = document.querySelector('.questionFive');
const questionSix = document.querySelector('.questionSix');
const question7 = document.querySelector('.question7');
const question8 = document.querySelector('.question8');
const question9 = document.querySelector('.question9');
const question10 = document.querySelector('.question10');
const question11 = document.querySelector('.question11');
const question12 = document.querySelector('.question12');
const question13 = document.querySelector('.question13');
const question14 = document.querySelector('.question14');
const question15 = document.querySelector('.question15');
const question16 = document.querySelector('.question16');
const question17 = document.querySelector('.question17');



const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const btn7 = document.querySelector('.btn7')
const btn8 = document.querySelector('.btn8')
const btn9 = document.querySelector('.btn9')
const btn10 = document.querySelector('.btn10')
const btn11 = document.querySelector('.btn11')
const btn12 = document.querySelector('.btn12')
const btn13 = document.querySelector('.btn13')
const btn14 = document.querySelector('.btn14')
const btn15 = document.querySelector('.btn15')
const btn16 = document.querySelector('.btn16')
const btn17 = document.querySelector('.btn17')



const btnBack1 = document.querySelector('.btn-back-1')
const btnBack2 = document.querySelector('.btn-back-2')
const btnBack3 = document.querySelector('.btn-back-3')
const btnBack4 = document.querySelector('.btn-back-4')
const btnBack5 = document.querySelector('.btn-back-5')
const btnBack6 = document.querySelector('.btn-back-6')
const btnBack7 = document.querySelector('.btn-back-7')
const btnBack8 = document.querySelector('.btn-back-8')
const btnBack9 = document.querySelector('.btn-back-9')
const btnBack10 = document.querySelector('.btn-back-10')
const btnBack11 = document.querySelector('.btn-back-11')
const btnBack12 = document.querySelector('.btn-back-12')
const btnBack13 = document.querySelector('.btn-back-13')
const btnBack14 = document.querySelector('.btn-back-14')
const btnBack15 = document.querySelector('.btn-back-15')
const btnBack16 = document.querySelector('.btn-back-16')



const spr1 = document.querySelector('.spr1')
const btnSpr1 = document.querySelector('.btnSpr1')
const spr2 = document.querySelector('.spr2')
const btnSpr2 = document.querySelector('.btnSpr2')
const spr3 = document.querySelector('.spr3')
const btnSpr3 = document.querySelector('.btnSpr3')

const spr4 = document.querySelector('.spr4')
const btnSpr4 = document.querySelector('.btnSpr4')

const spr5 = document.querySelector('.spr5')
const btnSpr5 = document.querySelector('.btnSpr5')

const spr6 = document.querySelector('.spr6')
const btnSpr6 = document.querySelector('.btnSpr6')

const spr7 = document.querySelector('.spr7')
const btnSpr7 = document.querySelector('.btnSpr7')

const spr8 = document.querySelector('.spr8')
const btnSpr8 = document.querySelector('.btnSpr8')

const spr9 = document.querySelector('.spr9')
const btnSpr9 = document.querySelector('.btnSpr9')






let item = 0
console.log(item)

btn1.addEventListener('click', function (e){
    e.preventDefault();
    if (quest1.checked){
        questionOn.classList.add('close-quest');
        questionTo.classList.remove('close-quest');
        item = 2
        console.log(item)
    }
    if (quest2.checked){
        questionOn.classList.add('close-quest');
        questionTo.classList.remove('close-quest');
        item = 4
        console.log(item)
    }
})
btnBack1.addEventListener('click', function (e){
    questionTo.classList.add('close-quest');
    questionOn.classList.remove('close-quest');
    console.log(item)
})
btn2.addEventListener('click', function (e){
    e.preventDefault()
    if(quest3.checked){
        item = item + 11;
        console.log(item)
        questionTo.classList.add('close-quest');
        if (item === 15){
            questionFive.classList.remove('close-quest');
        } else {
            questionThe.classList.remove('close-quest');
        }
    }
    if (quest4.checked){
        item = item + 12;
        console.log(item)
        questionTo.classList.add('close-quest');
        if(item === 16){
            questionFive.classList.remove('close-quest');
        } else {
            questionFo.classList.remove('close-quest');
        }
    }
})
btnBack2.addEventListener('click', function (e) {
    questionFive.classList.add('close-quest');
    questionThe.classList.add('close-quest');
    questionFo.classList.add('close-quest');
    if(quest3.checked){
        item = item - 11
    }
    if(quest4.checked){
        item = item - 12
    }
    questionTo.classList.remove('close-quest');
    console.log(item)
})
btnBack3.addEventListener('click', function (e) {
    questionFive.classList.add('close-quest');
    questionThe.classList.add('close-quest');
    questionFo.classList.add('close-quest');
    if(quest3.checked){
        item = item - 11
    }
    if(quest4.checked){
        item = item - 12
    }
    questionTo.classList.remove('close-quest');
    console.log(item)
})
btn3.addEventListener('click', function (e){
    e.preventDefault()
    if(quest5.checked){
        questionThe.classList.add('close-quest');
        item = item + 20
        console.log(item)
        if (item === 33) {
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Коэффициент ранговой Корреляции Спирмана`
            const text2 = document.createElement('p');
            text2.textContent = `Коэффициент корреляции Фехнера`
            const text3 = document.createElement('p');
            text3.textContent = `Коэффициент корреляции Кендалла (Тау Кендалла)`;
            contElement.appendChild(text)
            contElement.appendChild(text2)
            contElement.appendChild(text3)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
    if(quest6.checked){
        questionThe.classList.add('close-quest');
        item = item + 30
        console.log(item)
        if (item === 43){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Коэффициент Корреляции Пирсона (r)`
            const text2 = document.createElement('p');
            text2.textContent = `Коэффициент ранговой Корреляции Спирмана`
            const text3 = document.createElement('p');
            text3.textContent = `Коэффициент корреляции Кендалла (Тау Кендалла)`
            const text4 = document.createElement('p');
            text4.textContent = `Коэффициент корреляции Фехнера`;
            contElement.appendChild(text)
            contElement.appendChild(text2)
            contElement.appendChild(text3)
            contElement.appendChild(text4)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
    if(quest7.checked){
        questionThe.classList.add('close-quest');
        item = item + 40
        console.log(item)
        if (item === 53){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Коэффициент Корреляции Пирсона (r)`
            const text3 = document.createElement('p');
            text3.textContent = `Коэффициент корреляции Кендалла (Тау Кендалла)`
            const text4 = document.createElement('p');
            text4.textContent = `Коэффициент корреляции Фехнера`;
            contElement.appendChild(text)
            contElement.appendChild(text3)
            contElement.appendChild(text4)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btn4.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest8.checked){
        questionFo.classList.add('close-quest');
        item = item + 20
        console.log(item)
        if (item === 34){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Коэффициент корреляции Фехнера`
            const text2 = document.createElement('p');
            text2.textContent = `Коэффициент корреляции Кендалла (Тау Кендалла!)`;
            contElement.appendChild(text)
            contElement.appendChild(text2)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
    if(quest9.checked){
        questionFo.classList.add('close-quest');
        item = item + 30
        console.log(item)
        if (item === 44){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text2 = document.createElement('p');
            text2.textContent = `Коэффициент ранговой Корреляции Спирмана`
            const text3 = document.createElement('p');
            text3.textContent = `Коэффициент корреляции Кендалла (Тау Кендалла)`
            const text4 = document.createElement('p');
            text4.textContent = `Коэффициент корреляции Фехнера`;
            contElement.appendChild(text2)
            contElement.appendChild(text3)
            contElement.appendChild(text4)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})

////////////////////////////////////////////////////////////////////////


btn5.addEventListener('click', function (e){
    e.preventDefault()
    if(quest10.checked){
        item = item + 20;
        console.log(item)
        questionFive.classList.add('close-quest');
        if (item === 35){
            questionSix.classList.remove('close-quest');
        }
        if (item === 36){
            question13.classList.remove('close-quest');
        }
    }
    if (quest11.checked){
        item = item + 30;
        console.log(item)
        questionFive.classList.add('close-quest');
        if(item === 45){
            question7.classList.remove('close-quest');
        }
        if (item === 46){
            question14.classList.remove('close-quest');
        }
    }
})


btnBack4.addEventListener('click', function (e) {
    questionFive.classList.add('close-quest');
    if(quest3.checked){
        item = item - 11
    }
    if(quest4.checked){
        item = item - 12
    }
    questionTo.classList.remove('close-quest');
    console.log(item)
})

btnBack5.addEventListener('click', function (e) {
    questionSix.classList.add('close-quest');
    if(quest10.checked){
        item = item - 20
    }
    if(quest11.checked){
        item = item - 30
    }
    questionFive.classList.remove('close-quest');
    console.log(item)
})

btn6.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest12.checked){
        item = item + 100
        console.log(item)
        questionSix.classList.add('close-quest');
        if (item === 135){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий Стьюдента для зависимых выборок(t)`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
    if (quest13.checked){
        item = item + 200
        console.log(item)
        questionSix.classList.add('close-quest');
        if (item === 235){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');
            const text = document.createElement('p');
            text.textContent = `Критерий знаков`
            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})

btn7.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest14.checked){
        item = item + 100
        console.log(item)
        question7.classList.add('close-quest');
        if (item === 145){
            question8.classList.remove('close-quest');
        }
    }
    if (quest15.checked){
        item = item + 200
        console.log(item)
        question7.classList.add('close-quest');
        if (item === 245){
            question10.classList.remove('close-quest');
        }
    }
    if (quest16.checked){
        item = item + 300
        console.log(item)
        question7.classList.add('close-quest');
        if (item === 345){
            question11.classList.remove('close-quest');
        }
    }
    if (quest17.checked){
        item = item + 400
        console.log(item)
        question7.classList.add('close-quest');
        if (item === 445){
            question12.classList.remove('close-quest');
        }
    }
})

btnBack6.addEventListener('click', function (e) {
    question7.classList.add('close-quest');
    if(quest10.checked){
        item = item - 20
        questionFive.classList.remove('close-quest');
    }
    if(quest11.checked){
        item = item - 30
        questionFive.classList.remove('close-quest');

    } else {
        questionFive.classList.remove('close-quest');

    }
    console.log(item)
})

btn8.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest18.checked){
        item = item + 1000
        console.log(item)
        question8.classList.add('close-quest');
        if (item === 1145){
            question9.classList.remove('close-quest');
        }
    }
})

btn9.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest19.checked){
        item = item + 10000
        console.log(item)
        question9.classList.add('close-quest');
        if (item === 11145){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий Стьюдента для зависимых выборок(t)`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})

btnBack7.addEventListener('click', function (e) {
    question8.classList.add('close-quest');
    if(quest18.checked){
        item = item - 100
        question7.classList.remove('close-quest');
    } else {
        item = item - 100
        question7.classList.remove('close-quest');
    }
    console.log(item)
})

btnBack8.addEventListener('click', function (e) {
    question9.classList.add('close-quest');
    if(quest19.checked){
        item = item - 1000
        question8.classList.remove('close-quest');
    } else {
        item = item - 1000
        question8.classList.remove('close-quest');
    }
    console.log(item)
})

btn10.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest20.checked){
        item = item + 2000
        console.log(item)
        question10.classList.add('close-quest');
        if (item === 2245){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий серий Вольда-Вольфовица`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack9.addEventListener('click', function (e) {
    question10.classList.add('close-quest');
    if(quest19.checked){
        item = item - 200
        question7.classList.remove('close-quest');
    } else {
        item = item - 200
        question7.classList.remove('close-quest');
    }
    console.log(item)
})

btn11.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest21.checked){
        item = item + 3000
        console.log(item)
        question11.classList.add('close-quest');
        if (item === 3345){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий Манна-Уитни(U)`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack10.addEventListener('click', function (e) {
    question11.classList.add('close-quest');
    if(quest21.checked){
        item = item - 300
        question7.classList.remove('close-quest');
    } else {
        item = item - 300
        question7.classList.remove('close-quest');
    }
    console.log(item)
})

btn12.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest22.checked){
        item = item + 4000
        console.log(item)
        question12.classList.add('close-quest');
        if (item === 4445){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');
            const text = document.createElement('p');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            text.textContent = `Критерий Колмогорова-Смирнова`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack11.addEventListener('click', function (e) {
    question12.classList.add('close-quest');
    if(quest22.checked){
        item = item - 400
        question7.classList.remove('close-quest');
    } else {
        item = item - 400
        question7.classList.remove('close-quest');
    }
    console.log(item)
})

btn13.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest23.checked){
        item = item + 200
        console.log(item)
        question13.classList.add('close-quest');
        if (item === 236){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий Знаков`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack12.addEventListener('click', function (e) {
    question13.classList.add('close-quest');
    if(quest23.checked){
        item = item - 20
        questionFive.classList.remove('close-quest');
    } else {
        item = item - 20
        questionFive.classList.remove('close-quest');
    }
    console.log(item)
})

btnBack13.addEventListener('click', function (e) {
    question14.classList.add('close-quest');
    if(quest24.checked || quest25.checked || quest26.checked){
        item = item - 30
        questionFive.classList.remove('close-quest');
    } else {
        item = item - 30
        questionFive.classList.remove('close-quest');
    }
    console.log(item)
})

btn14.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest24.checked){
        item = item + 200
        console.log(item)
        question14.classList.add('close-quest');
        if (item === 246){
            question15.classList.remove('close-quest');
        }
    }
    if (quest25.checked){
        item = item + 300
        console.log(item)
        question14.classList.add('close-quest');
        if (item === 346){
            question16.classList.remove('close-quest');
        }
    }
    if (quest26.checked){
        item = item + 400
        console.log(item)
        question14.classList.add('close-quest');
        if (item === 446){
            question17.classList.remove('close-quest');
        }
    }
})

btn15.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest27.checked){
        item = item + 2000
        console.log(item)
        question15.classList.add('close-quest');
        if (item === 2246){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий серий Вальда-Вольфовица`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack14.addEventListener('click', function (e) {
    question15.classList.add('close-quest');
    if(quest27.checked){
        item = item - 200
        question14.classList.remove('close-quest');
    } else {
        item = item - 200
        question14.classList.remove('close-quest');
    }
    console.log(item)
})

btn16.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest28.checked){
        item = item + 3000
        console.log(item)
        question16.classList.add('close-quest');
        if (item === 3346){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий Манна-Уитни(U)`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack15.addEventListener('click', function (e) {
    question16.classList.add('close-quest');
    if(quest28.checked){
        item = item - 300
        question14.classList.remove('close-quest');
    } else {
        item = item - 300
        question14.classList.remove('close-quest');
    }
    console.log(item)
})

btn17.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest29.checked){
        item = item + 4000
        console.log(item)
        question17.classList.add('close-quest');
        if (item === 4446){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');

            const containerSpravka = document.createElement('div')
            containerSpravka.classList.add('spravkaContain')
            const imgSpravka = document.createElement('img')
            imgSpravka.classList.add('imgSpravka')
            imgSpravka.setAttribute('src', 'imgSpravka.png')
            const linkSpravka = document.createElement('a')
            linkSpravka.classList.add('linkSpr')
            linkSpravka.innerText = 'Для получения более детального ответа'
            linkSpravka.setAttribute('href', 'spravka.html')
            containerSpravka.appendChild(imgSpravka)
            containerSpravka.appendChild(linkSpravka)

            const text = document.createElement('p');
            text.textContent = `Критерий Колмогорова-Смирнова`
            contElement.appendChild(text)
            contElement.appendChild(containerSpravka)
            block.appendChild(contElement)
        }
    }
})
btnBack16.addEventListener('click', function (e) {
    question17.classList.add('close-quest');
    if(quest29.checked){
        item = item - 400
        question14.classList.remove('close-quest');
    } else {
        item = item - 400
        question14.classList.remove('close-quest');
    }
    console.log(item)
})







/////////////////  - SPRAVKA
btnSpr1.addEventListener('click', function (e){
    spr1.classList.toggle('close-quest');
})
btnSpr2.addEventListener('click', function (e){
    spr2.classList.toggle('close-quest');
})

btnSpr3.addEventListener('click', function (e){
    spr3.classList.toggle('close-quest');
})
btnSpr4.addEventListener('click', function (e){
    spr4.classList.toggle('close-quest');
})

btnSpr5.addEventListener('click', function (e){
    spr5.classList.toggle('close-quest');
})
btnSpr6.addEventListener('click', function (e){
    spr6.classList.toggle('close-quest');
})

btnSpr7.addEventListener('click', function (e){
    spr7.classList.toggle('close-quest');
})
btnSpr8.addEventListener('click', function (e){
    spr8.classList.toggle('close-quest');
})

btnSpr9.addEventListener('click', function (e){
    spr9.classList.toggle('close-quest');
})

