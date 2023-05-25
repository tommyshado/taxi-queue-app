function TaxiQueue(joined, peopleLeft, taxiCount) {
	let counter = joined || peopleLeft || 0;
	let taxiCounter = taxiCount || 0;

	function joinQueue() {
		return Number(counter++);
	}

	function leaveQueue() {
		if (counter > 0) {
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
		if (queueLength() >= 12 && taxiQueueLength() >= 1) {
			counter -= 12;
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