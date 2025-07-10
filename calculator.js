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

function processClick(choice) {
    document.querySelector("#error").innerText = "";
    let num1 = Number(document.querySelector("#firstNum").value);
    let num2 = Number(document.querySelector("#secondNum").value);
    let lastResult;
    switch (choice) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    }
    lastResult = resultsArray[0];
    document.querySelector("#latest p").innerText = `${lastResult.operands[0]} ${lastResult.operation} ${lastResult.operands[1]} = ${lastResult.result}`;
    document.querySelector("#firstNum").value = "";
    document.querySelector("#secondNum").value = "";
}

document.querySelector("#add").addEventListener("click", function() {
    processClick("add");
});
document.querySelector("#subtract").addEventListener("click", function() {
    processClick("subtract");
});
document.querySelector("#multiply").addEventListener("click", function() {
    processClick("multiply");
});
document.querySelector("#divide").addEventListener("click", function() {
    processClick("divide");
});
document.querySelector("#showHistory").addEventListener("click", function() {
    if (resultsArray.length > 1) {
        document.querySelector("#history p").innerText = "";
        for (let i=1; i<resultsArray.length; i++) {
            document.querySelector("#history p").innerText += `${resultsArray[i].operands[0]} ${resultsArray[i].operation} ${resultsArray[i].operands[1]} = ${resultsArray[i].result}\n`;
        }
    } else {
        document.querySelector("#history p").innerText = "There are no stored calculations."
    }
    this.innerText = "Refresh calculation history";
});