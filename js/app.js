"use strict";

var input = document.querySelector('.lol');
var div = document.querySelector('.div');
var da;
var a = {
  я: 'я',
  Я: 'я',
  " ": " ",
  к: 'л',
  р: "о",
  у: "ш",
  т: "а",
  о: "р",
  й: "а"
};
input.addEventListener('keypress', function (event) {
  console.log(event);

  if (a[event.key] == undefined) {} else {
    da = a[event.key];
    div.innerHTML += da;
  }
});