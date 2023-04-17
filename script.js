// A = P(1 + (r/n))^nt

// A	=	final amount
// P	=	initial principal balance
// r	=	interest rate
// n	=	number of times interest applied per time period
// t	=	number of time periods elapsed

let btn = document.querySelector("button");
let answer = document.querySelector("#answer");

function calculate() {
    // variables from input
    let P = Number(document.querySelector("#principal").value);
    let r = Number(document.querySelector("#interest-rate").value) / 100;
    let n = Number(document.querySelector("#frequency").value);
    let t = Number(document.querySelector("#period").value);
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
    // outDiff = "$" + diff.toFixed(2);
    outDiff = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(diff);
    // outP = "$" + P.toFixed(2);
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