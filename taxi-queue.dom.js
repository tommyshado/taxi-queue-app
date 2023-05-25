// write your DOM code here.


// DOM element references
// passangers element references
const queueJoin = document.querySelector('.join_queue');
const counter = document.querySelector('.count');
const leaveQueue = document.querySelector('.leave_queue'); 

// taxi section elements references
const taxiJoin = document.querySelector('.join_taxi_queue');
const taxiCounter = document.querySelector('.taxi_queue_count');
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
queueJoin.addEventListener('click', function() {
    counter.innerText = taxiQueue.joinQueue();
    // local storage
    localStorage.setItem('queueJoined', JSON.stringify(counter.innerText));
});


leaveQueue.addEventListener('click', function() {
    counter.innerText = taxiQueue.leaveQueue();
    // local storage
    localStorage.setItem('peopleLeft', JSON.stringify(counter.innerText));
});

taxiJoin.addEventListener('click', function() {
    taxiCounter.innerText = taxiQueue.joinTaxiQueue();
    // local storage
    localStorage.setItem('taxiJoined', JSON.stringify(taxiCounter.innerText));
});