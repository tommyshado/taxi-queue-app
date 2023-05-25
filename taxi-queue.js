function TaxiQueue() {
	let counter = 0;

	function joinQueue() {
		return counter++;
	}

	function leaveQueue() {
		if (counter !== 0) {
			return counter--;
		}
	}

	function joinTaxiQueue() {

	}

	function queueLength() {
		return counter;
	}

	function taxiQueueLength() {

	}

	function taxiDepart(){

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