/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

'use strict';
 

let numberOfFilms;

function start() {
        while (numberOfFilms == null || numberOfFilms == 0 || isNaN(numberOfFilms))  {
     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }

}

start();

const this = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyfilms() {
    for (let i = 0; i < 2; i++) {
        
        let a, b;
        while (a == null || b == null || a.length > 50 || a.length == 0 || b.length == 0) {
            a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        }
        this.movies[a] = b;
    }
}
rememberMyfilms();

function detectPersonalLevel() {
if (this.count < 10) { 
    alert("Просмотрено довольно мало фильмов");
} else if (this.count <= 30) {
    alert("Вы классический зритель");
} else if (this.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошИбка");
}

}   
detectPersonalLevel();



function writeYourGenres() {
   
let i = 0;
    do {
        while (this.genres[i] == null || this.genres[i].length > 50 || this.genres[i] == "") {
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        }
        
        i++;
    } while (i < 3);
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden)
        console.log(this);
}

showMyDB(this.private);



    





