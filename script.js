'use strict';

//Задача 1:Дан многомерный массив. Выведите с его помощью слово 'голубой'.
// const arr = {
//   'ru':['голубой', 'красный', 'зеленый'],
//   'en':['blue', 'red', 'green'],
// };
// console.log(arr['ru'][0]);

//Задача 2: Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// const salary = {
//     Kolya: 200,
//     Vasya: 300,
//     Petya: 400,
//   };

// for ( let key in salary){
//   console.log (`${key} - the salary is ${salary[key]} dollars.`);
// }

//Задача 3: Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

// const obj = {
//   js:['jQuery','Angular'],
//   php:'hello',
//   css:'world',
// }
//  console.log (obj['js'][0]);

//Задача 4: Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английский (пусть понедельник - это нулевой день).

// const week = {
//   ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',],
//   en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
// }
// console.log(week['ru'][0]);
// console.log(week['en'][2]);

//Задача 5:  Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.


// const week = {
//   1: 'понедельник',
//   2: 'вторник',
//   3: 'среда',
//   4: 'четверг',
//   5: 'пятница',
//   6: 'суббота',
//   7: 'воскресенье',
// }
// let key = prompt("Какой сегодня день недели?");

// console.log(week[key]);


// Задача 6: Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в объект. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем {"dog0" : "dog0", "dog1": "dog1", "dog2": "dog2"}.

// function createObject(string, num){
//     let arr = [];
// for (let i=0; i < num; i++){
    
//     arr[string + i] = string + i;   
// } 
// console.log(arr);
// }

// createObject ("dog", 4);


// Задача 7: Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.


// let sumEven = 0;
// let sumOdd = 0;

// function evenSum(arr){  
//     for(let i= 0; i <= arr.length; i++){
//         if (i % 2 === 0){
//             sumEven +=i;
//         }else{
//             continue;
//         }
//     } alert(sumEven);
// }

// function oddSum(arr){
//     for(let i= 0; i <= arr.length; i++){
//         if (!(i % 2 === 0)){
//             sumOdd +=i;
//         }else{
//             continue;
//         }
//     } alert(sumOdd);
// }

// function maxSum(num1,num2){
//     if (num1 > num2){
//         alert (num1);
//     }else{
//         alert (num2);
//     }
// }
// evenSum([1,2,3,4,5,6,7,8,9]);
// oddSum([1,2,3,4,5,6,7,8,9]);
// maxSum(sumEven,sumOdd);



// Задача 8: Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32);

// function fahrenheit(num){
//     num = (num * (9/5) ) + 32;
//     alert(num);
// } 
// fahrenheit(5);




