console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
//blocking the main thread for 10 seconds
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
