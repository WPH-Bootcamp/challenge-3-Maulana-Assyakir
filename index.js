'use strict';
// 1. User Input Handling
let prompt = require("prompt-sync")();

function getValidNumberInput(prompMessage) {
    let num;
    let flag = 0;
    do {
        flag++;
        if (flag > 1)
            console.log("input tidak valid, silahkan masukkan angka yang benar.");
        num = prompt(prompMessage);
    } while (isNaN(num) || num.trim() === ''); 
    return parseFloat(num);}
{}

// 2. Basic Arithmetic Operation (Functions and Operators)
function calculation(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": return a/b;
        default: return "operator tidak valid";
    }
}

console.log("Calculator Simple");

while (true) {
    let angka = getValidNumberInput("Masukkan angka pertama: ");

    console.log("typeof: ", typeof angka); // typeof angka, berarti tipe datanya angka

    let angka2 = getValidNumberInput("Masukan angka kedua: ");

    let operator = prompt ("Masukkan operator (+, -, *, /): ");

    let hasil = calculation(parseInt(angka), parseInt(angka2), operator);

    console. log("Hasilnya adalah : ", hasil);

    let question = prompt ("Apakah Anda ingin lanjut? (y/n): ");

    if (question.toLowerCase() === "n") {
        console. log("Terima kasih.");
        break;
    }
}

    console.log("Kalkulator selesal.");
