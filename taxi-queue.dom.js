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


// variables for queueJoined, leaveQueue and taxiCounter
var joined = 0;
var peopleLeft = 0;
var taxiCount = 0;

if (localStorage['queueJoined']) {
    counter.innerHTML = JSON.parse(localStorage.getItem('queueJoined'));
    joined = counter.innerHTML;
}

if (localStorage['peopleLeft']) {
    counter.innerHTML = JSON.parse(localStorage.getItem('peopleLeft'));
    peopleLeft = leaveQueue.innerHTML;
}

if (localStorage['taxiJoined']) {
    taxiCounter.innerHTML = JSON.parse(localStorage.getItem('taxiJoined'));
    taxiCount = taxiCounter.innerHTML;
}

// create Factory Function instance

const taxiQueue = TaxiQueue(joined, peopleLeft, taxiCount);

// DOM events
queueJoin.addEventListener('click', function() {
    // first join the people queue and then get the length
    taxiQueue.joinQueue();
    counter.innerText = taxiQueue.queueLength();
    // local storage
    localStorage.setItem('queueJoined', JSON.stringify(counter.innerText));
});


leaveQueue.addEventListener('click', function() {
    counter.innerText = taxiQueue.leaveQueue();
    // local storage
    localStorage.setItem('peopleLeft', JSON.stringify(counter.innerText));
});

taxiJoin.addEventListener('click', function() {
    taxiQueue.joinTaxiQueue();
    taxiCounter.innerText = taxiQueue.taxiQueueLength();
    // local storage
    localStorage.setItem('taxiJoined', JSON.stringify(taxiCounter.innerText));
});

departBtn.addEventListener('click', function() {
    taxiQueue.taxiDepart();
    counter.innerText = taxiQueue.leaveQueue();
    taxiCounter.innerText = taxiQueue.taxiQueueLength();
});