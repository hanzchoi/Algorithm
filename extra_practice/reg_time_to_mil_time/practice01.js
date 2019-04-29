// Write a function that takes in a time as a string and
// returns it in Military Time.
// “10:31 AM” -> “10:31”
// “2:05 PM” -> “14:05”
// “12:01 AM” -> “00:01”
// “7:00 AM” -> “07:00”
const arr = ["10:31 AM", "2:05 PM", "12:01 AM", "7:00 AM"];

function regTimeToMilTime(time){
  let hours = parseInt(time.slice(0, 2));
  let mins = time.length === 8 ? time.slice(3, 5) : time.slice(2, 4);
  const period = time.slice(time.length - 2, time.length);

  if(period === "AM"){
    if(hours === 12){
      hours = "00";
    }else {
      if(hours < 10){
        hours = `0${hours}`
      }
    }
  }else{
    if(hours === 12){
      hours = "12";
    }else{
      hours += 12;
    }
  }
  return `${hours}:${mins}`;
}

//console.log(regTimeToMilTime("10:31 AM"));

arr.forEach(time => {
  console.log(regTimeToMilTime(time));
})
