btn_one = document.querySelector(".btn_one");
btn_two = document.querySelector(".btn_two");

btn_one.addEventListener("click", btn_run_one);
btn_two.addEventListener("click", btn_run_two);

function btn_run_one() {
    alert('Молодесь , сматри рэклама дальше😊'); 
};

function btn_run_two() {
    alert('Как нэ хочэшь рэклама😡, сматри больше реклама👿'); 
};