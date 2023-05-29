function TaxiQueue(joined, taxiCount) {
	let counter = joined || 0;
	let taxiCounter = taxiCount || 0;
	// create a function that return the incremented counter variable by one
	function joinQueue() {
		counter++
	}
	// create a function that return the decremented counter variable by one
	function leaveQueue() {
		if (counter > 0) {
			counter--;
		} else {
			return 0;
		}
	}
	// create a function that returns the incremented taxi counter variable
	function joinTaxiQueue() {
		taxiCounter++;
	}
	// return the queue length
	function queueLength() {
		return counter;
	}
	// return the length of the taxi queue
	function taxiQueueLength() {
		return taxiCounter;
	}
	// create a funtcion that check if the queue length is greater than 12 or equal 12 and must the taxi queue length must be greater than
	// 0ne or equal one
	function taxiDepart(){
		if (queueLength() >= 12 && taxiQueueLength() >= 1) {
			// decrement the counter variable by 12
			counter -= 12;
			// decrement the taxi counter variable by 1
			taxiCounter -= 1;
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}