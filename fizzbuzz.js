for (var countUp = 1; countUp < 101; countUp++) {
	var divByThree = 3;
	var divByFive = 5;

	//Is the number divisible by three?
	if (countUp % divByThree == 0) {

		//Also, is it divisible by five?
		if (countUp % divByFive == 0) {

			//If so, then print fizzbuzz.
			console.log("fizzbuzz");
	//If its divisitble by three but not by five, print fizz.
	} else 
			console.log("fizz");
	
	//Is it divisible by five?
	} else if (countUp % divByFive == 0) {
			console.log("buzz");
	} else {
			console.log(countUp);
	}
}