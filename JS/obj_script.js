"use strict";

let options = {
    name: "Andrey",
    age: 35,
    colour: "white",
    adress: {
        city: "Dnipro",
        streat: "Kotlirevskogo"
    },
    makeTest: function () {
        console.log("Test");
    }
}

const { city, streat } = options.adress;

console.log(city);

options.makeTest();

for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`ключ: ${i} значение: ${options[key][i]}`);
        }
        console.log(`Кол-во эл. в обьекте: ${Object.keys(options[key]).length}`);
    } else {
        console.log(`ключ: ${key} значение: ${options[key]}`);
    }
}

console.log(`Кол-во эл. в обьекте: ${Object.keys(options).length}`);