// write your DOM code here.


// DOM element references
// passangers element references
const queueJoin = document.querySelector('.join_queue');
const counter = document.querySelector('.count');
const leaveQueue = document.querySelector('.leave_queue'); 

// taxi section elements references
const taxiJoin = document.querySelector('.join_taxi_queue');
const taxiCounter = document.querySelector('.taxi_queue_count');

// depart section references
const departBtn = document.querySelector('.depart');


// variables for queue, and taxiCounter
var joined = 0;
var taxiCount = 0;

if (localStorage['queue']) {
    counter.innerHTML = JSON.parse(localStorage.getItem('queue'));
    joined = counter.innerHTML;
}

if (localStorage['taxi']) {
    taxiCounter.innerHTML = JSON.parse(localStorage.getItem('taxi'));
    taxiCount = taxiCounter.innerHTML;
}

// create Factory Function instance

const taxiQueue = TaxiQueue(joined, taxiCount);

// DOM events
queueJoin.addEventListener('click', function() {
    // first join the people queue and then get the length
    taxiQueue.joinQueue();
    counter.innerText = taxiQueue.queueLength();
    // local storage
    localStorage.setItem('queue', JSON.stringify(counter.innerText));
});


leaveQueue.addEventListener('click', function() {
    taxiQueue.leaveQueue();
    counter.innerText = taxiQueue.queueLength();
});

taxiJoin.addEventListener('click', function() {
    taxiQueue.joinTaxiQueue();
    taxiCounter.innerText = taxiQueue.taxiQueueLength();
    // local storage
    localStorage.setItem('taxi', JSON.stringify(taxiCounter.innerText));
});

departBtn.addEventListener('click', function() {
    taxiQueue.taxiDepart();
    counter.innerText = taxiQueue.queueLength();
    // updating the localStorage variable with the new queueLength
    localStorage['queue'] = taxiQueue.queueLength();
    taxiCounter.innerText = taxiQueue.taxiQueueLength();
    // updating the localStorage variable with the new taxiQueueLength
    localStorage['taxi'] = taxiQueue.taxiQueueLength();
});