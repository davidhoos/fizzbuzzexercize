for (var i = 1; i < 101; i++) {
	var divByThree = 3;
	var divByFive = 5;
		if (i % divByThree == 0) {
			if (i % divByFive == 0) {
			console.log("fizzbuzz");
		} else {
			console.log("fizz");
		} else if (i % divByFive ==0) {
			console.log("buzz")
		} else {
			console.log(i);
		}
	}