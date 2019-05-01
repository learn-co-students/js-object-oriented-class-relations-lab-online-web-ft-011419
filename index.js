let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

// Has many trips, has many passengers through trips

class Driver {
  constructor(name) {
    this.id = driverId++;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {return trip.driverId == this.id;});
  }

  passengers() {
    return this.trips().map(trip => {return trip.passenger()});
  }
}

let passengerId = 0;

// Has many trips, has many drivers through trips

class Passenger {
  constructor(name) {
    this.id = passengerId++;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {return trip.passengerId == this.id});
  }

  drivers() {
    return this.trips().map(trip => {return trip.driver()});
  }
}

let tripId = 0;

// Belongs to driver and passenger

class Trip {
  constructor(driver, passenger) {
    this.id = tripId++;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => {return driver.id === this.driverId});
  }

  passenger() {
    return store.passengers.find(passenger => {return passenger.id === this.passengerId});
  }
}
