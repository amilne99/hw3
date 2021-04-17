// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //Create variables for passenger
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let numberOfPassengers = ride.numberOfPassengers
  

  //Create variables for Pickup
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState =ride.pickupLocation.state
  let pickupZip =ride.pickupLocation.zip

  //Create variables for Dropoff
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState =ride.dropoffLocation.state
  let dropoffZip =ride.dropoffLocation.zip

  //Create variable for start of expressed based on customer conditional
  let status
  if (ride.purpleRequested == true) {
    status = `Noober Purple`
  } else if (numberOfPassengers > 3) {
    status = `Noober XL`
  } else {
    status = `Noober X`
  }

  //Print out the compiled ride order
  console.log(`${status} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Dropoff at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}`)
  // 🔥 YOUR CODE ENDS HERE 🔥
})
