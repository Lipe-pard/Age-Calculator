let current_date = new Date();

let current_day = current_date.getDate();
let current_month = current_date.getMonth() + 1;
let current_year = current_date.getFullYear();

let submit = document.querySelector('#submit');

function calculateAge() {
    let birth_day = parseInt(document.querySelector('#day').value);
    let birth_month = parseInt(document.querySelector('#month').value);
    let birth_year = parseInt(document.querySelector('#year').value);

    let age = current_year - birth_year;
    if(current_month < birth_month) {
        current_month = current_month + 12;
        age--;
    }
    if(current_day < birth_day) {
        current_month--;
        current_day = current_day + 30;
        console.log('passou aqui', current_month)
    }
    let month = current_month - birth_month;
    let day = current_day - birth_day;

    return {age: age,month: month,day: day};
}

submit.addEventListener('click', function() {
    let result = calculateAge();
    console.log(result)
    document.querySelector('#age_result').innerHTML = result.age;
    document.querySelector('#month_result').innerHTML = result.month;
    document.querySelector('#day_result').innerHTML = result.day;
});


console.log(birth_day, birth_month, birth_year)


console.log(current_date)

console.log(current_day, current_month, current_year)

console.log(calculateAge())