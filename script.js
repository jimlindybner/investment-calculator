// A = P(1 + (r/n))^nt

// A	=	final amount
// P	=	initial principal balance
// r	=	interest rate
// n	=	number of times interest applied per time period
// t	=	number of time periods elapsed

let btn = document.querySelector("button");
let answer = document.querySelector("#answer");
let inPrincipal = document.querySelector("#principal");
let inRate = document.querySelector("#interest-rate");
let inFrequency = document.querySelector("#frequency");
let inPeriod = document.querySelector("#period");

function calculate() {
    // variables from input
    let P = Number(inPrincipal.value);
    let r = Number(inRate.value) / 100;
    let n = Number(inFrequency.value);
    let t = Number(inPeriod.value);
    let A;
    let diff;
    let outA;
    let outDiff;

    // compound interest formula
    let powBase = (1 + (r / n));
    let powExp = n * t;
    A = P * Math.pow(powBase, powExp);

    // difference between principal and final amount
    diff = A - P;

    // output final amount
    outA = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(A);
    outDiff = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(diff);
    outP = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'} ).format(P);
    answer.innerHTML = 
        "You started with: " + outP +
        "<br>You gain: " + outDiff +
        "<hr>" +
        "Your final amount is: " + outA;

    // prevent submit
    return false;
}

// event listener
btn.onclick = calculate;