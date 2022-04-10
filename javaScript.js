//
// const block = document.querySelector('.question-counter')
// const quest1 = document.getElementById('quest1')
// const quest2 = document.getElementById('quest2')
// const quest3 = document.getElementById('quest3')
// const quest4 = document.getElementById('quest4')
// const quest5 = document.getElementById('quest5')
// const quest6 = document.getElementById('quest6')
// const questionOn = document.querySelector('.questionOn');
// const questionTo = document.querySelector('.questionTo');
// const questionThe = document.querySelector('.questionThe');
// const spr = document.querySelector('.spr');
//
//
// spr.addEventListener('click', function (evt){
//     console.log('аывавпваопрволпошщерпишсптргшарповорпашгкрпо')
// })
//
// quest1.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionOn.classList.add('close-quest');
//     questionTo.classList.remove('close-quest');
//     item = 1
// })
//
// quest2.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionOn.classList.add('close-quest');
//     questionTo.classList.remove('close-quest');
//     item = 2
// })
//
// quest3.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionTo.classList.add('close-quest');
//     questionThe.classList.remove('close-quest');
//     item = item + 1
// })
//
// quest4.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionTo.classList.add('close-quest');
//     questionThe.classList.remove('close-quest');
//     item = item + 2
// })
//
// quest5.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionThe.classList.add('close-quest');
//     item = item + 1
//     const contElement = document.createElement('div');
//     contElement.classList.add('contElement');
//     const text = document.createElement('H1');
//     text.textContent = `Ваш ответ: ${item}`;
//     contElement.appendChild(text)
//     block.appendChild(contElement)
// })
//
// quest6.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionThe.classList.add('close-quest');
//     item = item + 2
//     if(item === 4){
//         const contElement = document.createElement('div');
//         contElement.classList.add('contElement');
//         const text = document.createElement('H1');
//         text.textContent = `Ваш ответ: d[as[das[das[d[`;
//         contElement.appendChild(text)
//         block.appendChild(contElement)
//     }
//     const contElement = document.createElement('div');
//     contElement.classList.add('contElement');
//     const text = document.createElement('H1');
//     text.textContent = `Ваш ответ: ${item}`;
//     contElement.appendChild(text)
//     block.appendChild(contElement)
// })
//
//
//
// const btn1 = document.querySelector('.btn1')
// const quest1 = document.getElementById('quest1-1')
// const quest2 = document.getElementById('quest1-2')
//
// let item = 0;
//
// btn1.addEventListener('click', function (e){
//     if (quest1.checked) {
//         item = 2
//     }
//     if (quest2.checked){
//         item = 4
//     }
// })

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
const questionOn = document.querySelector('.questionOn');
const questionTo = document.querySelector('.questionTo');
const questionThe = document.querySelector('.questionThe');
const questionFo = document.querySelector('.questionFo');
const questionFive = document.querySelector('.questionFive');
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btnBack1 = document.querySelector('.btn-back-1')
const btnBack2 = document.querySelector('.btn-back-2')
const btnBack3 = document.querySelector('.btn-back-3')

const spr1 = document.querySelector('.spr1')
const btnSpr1 = document.querySelector('.btnSpr1')
const spr2 = document.querySelector('.spr2')
const btnSpr2 = document.querySelector('.btnSpr2')





let item = 0
console.log(item)

// quest1.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionOn.classList.add('close-quest');
//     questionTo.classList.remove('close-quest');
//     item = 2
// })
//
// quest2.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionOn.classList.add('close-quest');
//     questionTo.classList.remove('close-quest');
//     item = 4
// })

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
            const text = document.createElement('H1');
            text.textContent = `Коэффициент ранговой КорреляцииСпирмана (R,[])
        Коэффициент корреляции ФехнераКоэффициенткорреляцииКендалла (Тау Кендалла)`;
            contElement.appendChild(text)
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
            const text = document.createElement('H1');
            text.textContent = `Коэффициент
        Корреляции Пирсона
        (r)
        Коэффициент
        ранговой
        Корреляции
        Спирмана (R,[])
        Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла)
        Коэффициент
        корреляции Фехнера`;
            contElement.appendChild(text)
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
            const text = document.createElement('H1');
            text.textContent = `Коэффициент
        Корреляции Пирсона
        (r)
        Коэффициент
        корреляции Фехнера
        Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла`;
            contElement.appendChild(text)
            block.appendChild(contElement)
        }
    }
})

// quest4.addEventListener('click', function (evt){
//     evt.preventDefault();
//     item = item + 12
//     questionTo.classList.add('close-quest');
//     if(item === 16){
//         questionFive.classList.remove('close-quest');
//     } else {
//         questionFo.classList.remove('close-quest');
//     }
// })
btn4.addEventListener('click', function (e) {
    e.preventDefault();
    if (quest8.checked){
        questionFo.classList.add('close-quest');
        item = item + 20
        console.log(item)
        if (item === 34){
            const contElement = document.createElement('div');
            contElement.classList.add('contElement');
            const text = document.createElement('H1');
            text.textContent = `Коэффициент
        корреляции Фехнера 
        Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла)`;
            contElement.appendChild(text)
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
            const text = document.createElement('H1');
            text.textContent = `Коэффициент
        корреляции Фехнера Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла)
        Коэффициент
        ранговой
        Корреляции
        Спирмана (R,[])`;
            contElement.appendChild(text)
            block.appendChild(contElement)
        }
    }
})


btnSpr1.addEventListener('click', function (e){
    spr1.classList.toggle('close-quest');
})
btnSpr2.addEventListener('click', function (e){
    spr2.classList.toggle('close-quest');
})

// quest8.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionFo.classList.add('close-quest');
//     item = item + 20
//     if (item === 34){
//         const contElement = document.createElement('div');
//         contElement.classList.add('contElement');
//         const text = document.createElement('H1');
//         text.textContent = `Коэффициент
//         корреляции Фехнера
//         Коэффициент
//         корреляции
//         Кендалла (Тау
//         Кендалла)`;
//         contElement.appendChild(text)
//         block.appendChild(contElement)
//     }
// })
// quest9.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionFo.classList.add('close-quest');
//     item = item + 30
//     if (item === 44){
//         const contElement = document.createElement('div');
//         contElement.classList.add('contElement');
//         const text = document.createElement('H1');
//         text.textContent = `Коэффициент
//         корреляции Фехнера Коэффициент
//         корреляции
//         Кендалла (Тау
//         Кендалла)
//         Коэффициент
//         ранговой
//         Корреляции
//         Спирмана (R,[])`;
//         contElement.appendChild(text)
//         block.appendChild(contElement)
//     }
// })







// quest3.addEventListener('click', function (evt){
//     evt.preventDefault();
//     item = item + 11
//     questionTo.classList.add('close-quest');
//     if (item === 15){
//         questionFive.classList.remove('close-quest');
//     } else {
//         questionThe.classList.remove('close-quest');
//     }
// })

// quest5.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionThe.classList.add('close-quest');
//     item = item + 20
//     if (item === 33) {
//         const contElement = document.createElement('div');
//         contElement.classList.add('contElement');
//         const text = document.createElement('H1');
//         text.textContent = `Коэффициент ранговой КорреляцииСпирмана (R,[])
//         Коэффициент корреляции ФехнераКоэффициенткорреляцииКендалла (Тау Кендалла)`;
//         contElement.appendChild(text)
//         block.appendChild(contElement)
//     }
// })

// quest6.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionThe.classList.add('close-quest');
//     item = item + 30
//     if (item === 43){
//         const contElement = document.createElement('div');
//         contElement.classList.add('contElement');
//         const text = document.createElement('H1');
//         text.textContent = `Коэффициент
//         Корреляции Пирсона
//         (r)
//         Коэффициент
//         ранговой
//         Корреляции
//         Спирмана (R,[])
//         Коэффициент
//         корреляции
//         Кендалла (Тау
//         Кендалла)
//         Коэффициент
//         корреляции Фехнера`;
//         contElement.appendChild(text)
//         block.appendChild(contElement)
//     }
// })
// quest7.addEventListener('click', function (evt){
//     evt.preventDefault();
//     questionThe.classList.add('close-quest');
//     item = item + 40
//     if (item === 53){
//         const contElement = document.createElement('div');
//         contElement.classList.add('contElement');
//         const text = document.createElement('H1');
//         text.textContent = `Коэффициент
//         Корреляции Пирсона
//         (r)
//         Коэффициент
//         корреляции Фехнера
//         Коэффициент
//         корреляции
//         Кендалла (Тау
//         Кендалла`;
//         contElement.appendChild(text)
//         block.appendChild(contElement)
//     }
// })