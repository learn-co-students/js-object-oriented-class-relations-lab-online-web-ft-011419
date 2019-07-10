let store = { drivers: [], passengers: [], trips: [] }

driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    let arrayOfPassengers = []
    this.trips().forEach(trip => arrayOfPassengers.push(trip.passenger()))
    return arrayOfPassengers
  }

}

passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    let arrayOfDrivers = []
    this.trips().forEach(trip => arrayOfDrivers.push(trip.driver()))
    return arrayOfDrivers
  }

}

tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
