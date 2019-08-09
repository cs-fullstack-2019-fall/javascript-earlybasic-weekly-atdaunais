var quitKey = true;

while(quitKey === true)
{
var userChoice = prompt("Welcome to Andrew's program! Press 1 to count. Press 2 to use a calculator. Or press 'q' to quit.");
if (userChoice === "1")
{
	var countingChoice = prompt("Would you like to count by ones (enter 1) or twos (enter 2)?");
	if (countingChoice === "1")
	{
		var countingTo1 = parseInt(prompt("Enter a number for me to count to in the console."));
		var userStart1 = parseInt(prompt("Pick a number to start from."));

		if (userStart1 > countingTo1)
		{
			alert("ERROR");
		}

		while(userStart1 <= countingTo1)
		{
			console.log(userStart1);
			userStart1++;
		}
		
	}
	if (countingChoice === "2")
	{
		var countingTo2 = parseInt(prompt("Enter a number for me to count to in the console."));
		var userStart2 = parseInt(prompt("Pick a number to start from."));

		if (userStart2 > countingTo2)
		{
			alert("ERROR");
		}

		while(userStart2 <= countingTo2)
		{
			console.log(userStart2);
			userStart2 = userStart2 + 2;
		}
	}
}
else if (userChoice === "2")
{
	var AddSubtract = prompt("Would you like to add (enter 'a') or subtract (enter 's')?");
	if (AddSubtract === "a")
	{
		var num1 = parseInt(prompt("Enter a number."));
		var num2 = parseInt(prompt("Enter another number."));
		var total = num1 + num2;
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
else if (userChoice === "q")
{
	quitKey = false;
}
else
{
	alert("ERROR")
}
}