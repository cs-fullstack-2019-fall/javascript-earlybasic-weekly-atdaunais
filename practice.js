let flag = false;

function count() {
    let userNumber1 = parseInt(prompt("Choose a number to count from: "));
    let userNumber2 = parseInt(prompt("Choose a number to count to: "));

    while (userNumber1 <= userNumber2) {
        console.log(userNumber1);
        userNumber1++;
    }
}

function add_subtract() {
    let add_or_sub = prompt("Would you like to add (type ADD) two numbers or subtract them (type SUB)?");

    if (add_or_sub.toUpperCase() === "ADD") {
        let add1 = parseInt(prompt("Enter the first number to add: "));
        let add2 = parseInt(prompt("Enter the second number to add: "));
        let total = (add1 + add2);
        alert(`Your total is: ${total}`);
    } else if (add_or_sub.toUpperCase() === "SUB") {
        let sub1 = parseInt(prompt("Enter the first number to subtract: "));
        let sub2 = parseInt(prompt("Enter the second number to subtract: "));
        let total = (sub1 - sub2);
        alert(`Your total is: ${total}`);
    } else {
        alert("INVALID ENTRY")
    }
}

function main() {
    while (flag === false) {
        let userInput = prompt("Would you like to count (press 1) or add/subtract two number (press 2)? Press 'q' to quit the program.");

        if (userInput === "1") {
            count()
        } else if (userInput === "2") {
            add_subtract()
        } else if (userInput === "q") {
            alert("Goodbye!");
            flag = true;
        } else {
            alert("INVALID ENTRY")
        }
    }
}

main();