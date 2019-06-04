const main = document.createElement('div');
document.body.appendChild(main);
const title = document.createElement('h1');
title.innerHTML = 'Esto es un titulo';

// eloquoentjavascript.net
// javascript succinctly


const input = document.createElement('input');
const button = document.createElement('button');
const ele = document.createElement('ul');

button.innerHTML = 'Crear';

input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Nombre de la etiqueta');
input.setAttribute('id', 'tag');
button.addEventListener('click', addTag);

function addTag() {
    let i = 0;
    let tags = document.getElementsByTagName('li');
    if (tags.length > 0) {
        let e = document.querySelector('ul');
        let child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }
    while (i < parseInt(input.value)) {

        let li = document.createElement('li');
        fibonacci(i)
            .then(result => {
                li.innerHTML = result;
                ele.appendChild(li); // aqui crea el li
            }).catch(e => {
                console.log(e);
            });
        i++;
    }

}

function fibonacci(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = 1, y = 0, tmp;
            while (num >= 0) {
                tmp = x;
                x += y;
                y = tmp;
                num--;
            }
            resolve (y);
        },1000);

    });
}

function fib(num) {
    if (num < 2) return num;
    return fib(num -1) + fibonacci(num - 2);
}

main.appendChild(title);
main.appendChild(input);
main.appendChild(button);
main.appendChild(ele); // aqui se crea el ol




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Start');
setTimeout(() => console.log('Go'), 5000);
console.log('End');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const result = addTwoNumbers(1, 2);
console.log(result + 1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function addTwoNumbersAsync(num1, num2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num1 + num2);
//             //reject('Error');
//         }, 1000);
//     });
// }
//
// addTwoNumbersAsync(1, 2)
//     .then(result => {
//         console.log(result + 1);
//     })
//     .catch(e => {
//         console.log(e);
//     });

//  async / await /////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function addTwoNumbersAsync(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
            //reject('Error');
        }, 1000);
    });
}

async function getProcessedData() {
    let v;
    try {
        v = await addTwoNumbersAsync(1, 2);
    } catch(e) {
        v = await addTwoNumbersAsync(1, 2);
    }

    return console.log(`First result: ${v + 1}`);
}

getProcessedData();