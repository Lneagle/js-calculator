let resultsArray = [];

function add(num1, num2) {
    let res = num1 + num2;
    resultsArray.unshift(createResultObject(num1, num2, "+", res));
}

function subtract(num1, num2) {
    let res = num1 - num2;
    resultsArray.unshift(createResultObject(num1, num2, "-", res));
}

function multiply(num1, num2) {
    let res = num1 * num2;
    resultsArray.unshift(createResultObject(num1, num2, "*", res));
}

function divide(num1, num2) {
    if (num2 == 0) {
        document.querySelector("#error").innerText = "Cannot divide by zero";
    } else {
        let res = num1 / num2;
        resultsArray.unshift(createResultObject(num1, num2, "/", res));
    }
}

function createResultObject(operand1, operand2, operator, result) {
    let obj = {
        operands: [operand1, operand2],
        operation: operator,
        result: result
    }
    return obj;
}

function refreshResults() {
    let lastResult = resultsArray[0];
    document.querySelector("#latest p").innerText = `${lastResult.operands[0]} ${lastResult.operation} ${lastResult.operands[1]} = ${lastResult.result}`;

    if (resultsArray.length > 1) {
        document.querySelector("#history p").innerText = "";
        for (let i=1; i<resultsArray.length; i++) {
            document.querySelector("#history p").innerText += `${resultsArray[i].operands[0]} ${resultsArray[i].operation} ${resultsArray[i].operands[1]} = ${resultsArray[i].result}\n`;
        }
    }
}

document.querySelector("#add").addEventListener("click", function() {
    document.querySelector("#error").innerText = "";
    add(Number(document.querySelector("#firstNum").value), Number(document.querySelector("#secondNum").value));
    refreshResults();
    document.querySelector("#firstNum").value = "";
    document.querySelector("#secondNum").value = "";
});
document.querySelector("#subtract").addEventListener("click", function() {
    document.querySelector("#error").innerText = "";
    subtract(Number(document.querySelector("#firstNum").value), Number(document.querySelector("#secondNum").value));
    refreshResults();
    document.querySelector("#firstNum").value = "";
    document.querySelector("#secondNum").value = "";
});
document.querySelector("#multiply").addEventListener("click", function() {
    document.querySelector("#error").innerText = "";
    multiply(Number(document.querySelector("#firstNum").value), Number(document.querySelector("#secondNum").value));
    refreshResults();
    document.querySelector("#firstNum").value = "";
    document.querySelector("#secondNum").value = "";
});
document.querySelector("#divide").addEventListener("click", function() {
    document.querySelector("#error").innerText = "";
    divide(Number(document.querySelector("#firstNum").value), Number(document.querySelector("#secondNum").value));
    refreshResults();
    document.querySelector("#firstNum").value = "";
    document.querySelector("#secondNum").value = "";
});