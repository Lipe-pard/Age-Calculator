let current_date = new Date();

let current_day = current_date.getDate();
let current_mounth = current_date.getMonth();
let current_year = current_date.getFullYear();

let birth_day = document.querySelector('#day');
let birth_mounth = document.querySelector('#month');
let birth_year = document.querySelector('#year');

console.log(current_day, current_mounth, current_year)