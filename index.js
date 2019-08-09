var userChoice = prompt("Welcome to my program! Press 1 to count. Press 2 to use a calculator. Or press 'q' to quit.");
if (userChoice === "1")
{
	var countingChoice = prompt("Would you like to count by ones (enter 1) or twos (enter 2)?");
	if (countingChoice === "1")
	{
		var countingTo1 = parseInt(prompt("Enter a number for me to count to in the console."));
		var x = 1;
		while(x <= countingTo1)
		{
			console.log(x++);
		}
	}
	if (countingChoice === "2")
	{
		var countingTo2 = parseInt(prompt("Enter a number for me to count to in the console."));
		var y = 1;
		while(y < countingTo2)
		{
			console.log(y = y + 2);
		}
	}
}
if (userChoice === "2")
{
	var AddSubtract = prompt("Would you like to add (enter 'a') or subtract (enter 's')?");
	if (AddSubtract === "a")
	{
		var num1 = parseInt(prompt("Enter a number."));
		var num2 = parseInt(prompt("Enter another number."));
		var summ = num1 + num2;
		alert("Your sum is: " + summ);
	}
	if (AddSubtract === "s")
	{
		var num1 = parseInt(prompt("Enter a number."));
		var num2 = parseInt(prompt("Enter another number."));
		var total = num1 - num2;
		alert("Your difference is: " + total);
	}
}
