"use strict";


let form = ['entry.433313432=', '&entry.1399459001=', '&entry.648502256=',
'&entry.779449585=', '&entry.708310721=', '&entry.213406366=', '&entry.1989654872=']
let textArea = document.querySelector('textarea');
let btn = document.querySelector('.btn');
let check = document.querySelector('.check');
let example__check = document.querySelector('.example__check');
let text = document.querySelector('.text');
let date = new Date();
let now = date.getDate() + '.' + Number(date.getMonth()+Number(1)) + '.' + date.getFullYear();
text.textContent += now;
function send(){
    let link = 'https://docs.google.com/forms/d/e/1FAIpQLSfkYyW4H8QtOMe3JAg_ELRRPKsis1WHp4NXJ2dst3S3FH3ZZQ/viewform?';
    let arr = [];
    arr.push(textArea.value);
    let str = arr.join('\n');
    arr = str.split('\n');
    for(let i = 0; i<form.length; i++){
        link += form[i] + arr[i];
    }
    if(check.checked){
        let arr__clock = [];
        arr__clock.push('&entry.324580992_day=' + date.getDate())
        arr__clock.push('&entry.324580992_month=' + Number(date.getMonth()+Number(1)))
        arr__clock.push('&entry.324580992_year=' + date.getFullYear())
        for(let elem of arr__clock){
            link += elem;
        }
    }
    btn.href = link;
}
example__check.addEventListener('click', function(){
    if(example__check.checked){
        textArea.value = 'Колпиков Егор Олегович | 112922\nНемежанская Виктория ТЛ5\nИндивидуальные уроки (8 лет и старше)\n[416] Web Start [Ru]\nМодуль\nГруппа\nСсылка';
    }else{
        textArea.value = '';
    }
})
btn.addEventListener('mousedown', function(event){
    if (event.button === 1 || event.button === 2 || event.button === 0) {
        send();
    }
})

