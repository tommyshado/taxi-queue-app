function TaxiQueue() {
	let counter = 0;
	let taxiCounter = 0;

	function joinQueue() {
		if (counter < 12) {
			return Number(counter++);
		}
	}

	function leaveQueue() {
		if (counter !== 0) {
			return Number(counter--);
		} else {
			return 0;
		}
	}

	function joinTaxiQueue() {
		return Number(taxiCounter++);
	}

	function queueLength() {
		return counter;
	}

	function taxiQueueLength() {
		return taxiCounter;
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