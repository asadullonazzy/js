"use strict";
// .....................................
// .............1 Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// ........2 .Создать объект personalMovieDB и в него поместить такие свойства:

const personalMovieDB = {
  // ..    - count - сюда передается ответ на первый вопрос

  count: numberOfFilms,

  //   - movies - в это свойство поместить пустой объект

  movies: {},

  //   - actors - тоже поместить пустой объект

  actors: {},

  //   - genres - сюда поместить пустой массив

  genre: [],

  //   - privat - в это свойство поместить boolean(логическое) значение false

  privat: false,
};

// ............3 Задайте пользователю по два раза вопросы:

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
