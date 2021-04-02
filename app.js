// variables
let calculateBtn = document.querySelector(".calculate-btn");
let clearBtn = document.querySelector(".clear-btn");

function init(){
    tipTotal();
    perPerson();
    orderTotal();
    totalPerson();
}

function tipTotal(){
    // variables in the function:
    let bill = document.querySelector(".bill").value;
    let tip = document.querySelector(".tip").value;

    // calculation:
    let calculateTip = (tip / 100) * bill;

    // display answer in html:
    let totalTip = document.querySelector(".tip-total__amount").innerHTML = Math.ceil(calculateTip * 1);
}

function perPerson(){
    // variables in the function:
    let bill = document.querySelector(".bill").value;
    let tip = document.querySelector(".tip").value;
    let tipPer = document.querySelector(".people").value;

    // calculation:
    let calculateTip = (tip / 100) * bill;
    let totalTip = Math.ceil(calculateTip * 1);
    let tipPerCalculate = totalTip / tipPer;

    // display answer in html:
    let tipPerTotal = document.querySelector(".tip-per__amount").innerHTML = Math.ceil(tipPerCalculate);
}

function orderTotal(){
    // variables in the function:
    let bill = document.querySelector(".bill").value;
    let tip = document.querySelector(".tip").value;
    let tipPer = document.querySelector(".people").value;

    // calculation:
    let calculateTip = (tip / 100) * bill;
    let totalTip = Math.ceil(calculateTip);

    // display answer in html:
    let orderTotal = document.querySelector(".total__amount").innerHTML = parseInt(totalTip) + parseInt(bill);
}

function totalPerson(){
    // variables in the function:
    let bill = document.querySelector(".bill").value;
    let tip = document.querySelector(".tip").value;
    let tipPer = document.querySelector(".people").value;

    // calculation:
    let calculateTip = (tip / 100) * bill;
    let totalTip = Math.ceil(calculateTip);

    // display answer in html:
    let orderTotalPer = document.querySelector(".total-per__amount").innerHTML = ((parseInt(totalTip) + parseInt(bill)) / parseInt(tipPer));
}

calculateBtn.addEventListener("click", function(){
    tipTotal();
    perPerson();
    orderTotal();
    totalPerson();
});

clearBtn.addEventListener("click", function(){
    location.reload();
});