const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span'); // прописала элементы с которыми буду взаимодействовать.

//console.log(counters); увидеть массив в console консоли увидела NodeList(6) [div.skills__ratings-counter, div.skills__ratings-counter, div.skills__ratings-counter, div.skills__ratings-counter, div.skills__ratings-counter, div.skills__ratings-counter] список моих нод узлов. теперь надо взять структуру каждый отдельный элемент и что-то с ним сделать

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//forEach метод который проходится по хранилищу элементов и просто с каждым элементом что-то делает (что делает написано в круглых скобках)
//item каждый отдельный счетчик .skills__ratings-counte который перебирается, добавляю еще один аргумент функции i сокращенно от индекс потому что у меня 6 элементов 
// => дальше идет функция (так записывается функция) и у функции есть тело в {} что умеет делать эта функция 
// обращаюсь к lines (это тоже массив со span'ами) к которому я могу обратиться по разному номеру поэтому пишу аргумет i и буду менять его стили а именно меня интересует ширина width и ширину я хочу установить такую которая содержится внутри счетчика .skills__ratings-counte
// команда innerHTML помогает вытащить значение счетчика (сколько там процентов) и переложить в стиль ширины то есть я убираю стиль у span написанный вручную и этот скрипт мне автоматически проставляет это значение: <span style="width: 95%"></span>
//потом можно доработать чтобы пользователь мог указывать только от 0 до 100%
//документ- это вся моя страница обращаюсь к документу
// функция это действие 
//querySelectorAll метод (действие) функция у объекта 
// аргумент функции это (что именно делать)
