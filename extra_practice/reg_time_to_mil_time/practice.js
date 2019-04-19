// Write a function that takes in a time as a string and
// returns it in Military Time.
// “10:31 AM” -> “10:31”
// “2:05 PM” -> “14:05”
// “12:01 AM” -> “00:01”
// “7:00 AM” -> “07:00”

function regTimeToMilTime(time){
	let hours
	let period = time.slice(time.length-2, time.length)
  if(period === "AM"){
  	if(parseInt(time.slice(0, 2)) === 12){
    	hours = "00"
    	return `${hours}:${time.slice(3, 5)}`
    }else {
    	hours = parseInt(time.slice(0, 2))
      if(hours < 10){
      	return `0${hours}:${time.slice(3, 5)`
      }else{
      	return `${hours}:${time.slice(4, 6)}`
      }
    }

	}else{
  	if(parseInt(time.slice(0, 2)) === 12){
    	hours = "12"
    	return `${hours}:${time.slice(3, 5)}`
    }else {
    	hours = parseInt(time.slice(0, 2))
      if(hours < 10){
      	hours += 12
      	return `${hours}:${time.slice(3, 5)`
      }else{
      	hours += 12;
      	return `${hours}:${time.slice(4, 6)}`
      }
    }
	}
}
