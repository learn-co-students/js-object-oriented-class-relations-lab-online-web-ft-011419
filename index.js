
let store = { drivers: [], trips: [], passengers:[] };
// initialize store with key of trips and drivers that each point to an empty array
let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        // insert in the driver to the store
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }
    passengers() {
        return this.trips().map(trip => {
          return trip.passenger();
    });
  }
}

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;

        // insert in the driver to the store
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }
    drivers() {
        return this.trips().map(trip => {
          return trip.driver();
    });
  }
}



class Trip {
  constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        store.trips.push(this);
    }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }

}
