/*Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8,
true, «true», соответственно. При помощи оператора определения типа (typeof)
убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в
консоль (console.log()) типы операторов. */

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

/*Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по
смыслу предложения (1 абзац, переменная text):
1. «индо земля зашаталась под ногами-и вырос,»;
2. «и заревел он голосом диким...»;
3. «блеснула молния и ударил гром,»;
4. «а так какое-то чудище, страшное и мохнатое,»;
5. «как будто из-под земли, перед купцом:»;
6. «Он подошёл и сорвал аленький цветочек.»;
7. «зверь не зверь, человек не человек,»;
8. «В ту же минуту, безо всяких туч,».*/


let str1 = "индо земля зашаталась под ногами-и вырос,";
let str2 = "и заревел он голосом диким...";
let str3 = "блеснула молния и ударил гром,";
let str4 = "а так какое-то чудище, страшное и мохнатое,";
let str5 = "как будто из-под земли, перед купцом:";
let str6 = "Он подошёл и сорвал аленький цветочек.";
let str7 = "зверь не зверь, человек не человек,";
let str8 = "В ту же минуту, безо всяких туч,";

let text = str8 + str3 + str1 +str5 + str7 + str4 +str2;

console.log(text);

/* Создайте две строки: firstName и lastName. Объедините их в одну строку с пробелом между ними и сохраните в новой переменной fullName. Текст переменно должен начинатся с "Меня зовут:.", а заканчиваться "Мне 68 лет."*/

let firstName = "Юлия";
let lastName = "Васильева";
let fullName = `Меня зовут ${firstName} ${lastName}. Мне 68 лет.`;

console.log(fullName);

let h = 10;
let d = 4;
const pi = 3.14;
let VCilindra = pi *((d * d) /4) * h;
console.log(VCilindra);

let original = 100;
let copy = original;

original = 200;
console.log(original);
console.log(copy);


let price = 100;
let discount = 0.2;
let price2 = price - price * discount
console.log(`${price2} руб, вместо ${price} руб`);

/*Запросите у пользователя два числа А и Б. Выполните сложение двух чисел. Выведите результат в консоль.

let A = prompt('Введите число А:' , 5 );
let B = prompt('Введите число B:' , 2 );

let D = +A + + B;
console.log(D);*/

/*2. Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений:
5 % 3;
3 % 5;
5 + '3';
'5' – 3;
75 + 'кг';
785 * 653;
100 / 25;
0 * 0;
0 / 2;
89 / 0;
98 + 2;
5 – 98;
(8 + 56 * 4) / 5;
(9 - 12) * 7 / (5 + 2);
+"123";
1 || 0;
false || true;
true > 0.
Проверьте (выведите в консоль) каким типам принадлежат переменные.*/

let a1 = 5 % 3;
    a2 = 3 % 5;
    a3 = 5 + "3",
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
console.log(a14);
console.log(a15);
console.log(a16);
console.log(a17);
console.log(a18);


/*Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam.*/

let height = 23,
    width = 10;
let SPryam = height * width;
console.log(SPryam);


/*Найдите площадь круга (SKruga) с радиусом 5см (r).*/
{
    let r = 5;
    let SKruga = pi * (r * r);
    let rez1 = SKruga + 'см²';
    console.log(rez1); 
}

/*Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h).*/
{
    let a = 5,
        b = 7;
    
    let STrap = ((a + b) / 2) * h;
    let rez = STrap + 'см²';

    console.log(rez);
}

/*Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata.*/

{let S = 2000000,
    p = 10,
    years = 5;

    let Pereplata1 = ((S / years) / p) * 5;
    let Pereplata = Pereplata1 + 'p.'
    console.log(Pereplata);
}

/*Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;*/
{
    let a = 8,
        b = 3;
    let y1 = 16 - a;
    let y2 = y1 / 2;
    let x = y2 + 3;
    console.log(x)

    /*b(x+15)=a+6x;*/
    let r1 = b +'x'+ 45,
        r2 = 6 + 'x' + a;
        r3 = 45 - 45;
        r4 = a - 45;
        x1 = r4 / b;
    console.log(x1);
    
    /*x+2x+ax+bx=23780.*/
    let z1 = 1 + 2 + a + b,
        z2 = z1 / z1,
        x2 = 23780 / z1;
    console.log(x2);
}

/*Выведите в консоль стихотворение (соблюдайте все переносы и абзацы):

Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою.*/

let s1 ="\nБывало, спит у ног собака, \nкостер занявшийся гудит,\nи женщина из полумрака \nглазами зыбкими глядит.";
let s2 ='\nПотом под пихтою приляжет \nна куртку рыжую мою \nи мне, задумчивая, скажет: \nБывало, спит у ног собака,';
let f1 = '\n   '
let s3 ='\n"А ну-ка, спой!.."- и я пою.';
let poem = s1 + f1 + s2 + f1 + s3 + f1;
console.log(poem);


