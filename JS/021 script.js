/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Код возьмите из предыдущего домашнего задания

//let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function () {
    while (
      this.count == 0 ||
      isNaN(this.count)
    ) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyfilms: function () {
    for (let i = 0; i < 2; i++) {
      let a, b;
      while (
        a == null ||
        b == null ||
        a.length > 50 ||
        a.length == 0 ||
        b.length == 0
      ) {
        (a = prompt("Один из последних просмотренных фильмов?", "")),
          (b = prompt("На сколько оцените его?", ""));
      }
      this.movies[a] = b;
    }
  },

  detectPersonalLevel: function() {
    if (this.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (this.count <= 30) {
      alert("Вы классический зритель");
    } else if (this.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошИбка");
    }
  },

  writeYourGenres: function() {
    let i = 0;
    do {
      while (
        this.genres[i] == null ||
        this.genres[i].length > 50 ||
        this.genres[i] == ""
      ) {
        this.genres[i] = prompt(
          `Ваш любимый жанр под номером ${i + 1}`,
          ""
        );
      }

      i++;
    } while (i < 3);
      
      this.genres.forEach((item, i) =>  {
          console.log(`Любимый жанр # ${i + 1} - это ${item}`)
          
      }); 
        
      
  },

  showMyDB: function(hidden) {
    if (!hidden) console.log(this);
    },
  
    toggleVisibleMyDB: function () {
        if (this.private) { 
            this.private = false;
        } else {
            this.private = true;
        }
  }
};


// personalMovieDB.start();


// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.private);
